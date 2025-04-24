import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';

// Define the meal type for TypeScript
interface Meal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strMealThumb: string;
  strInstructions?: string;
  [key: string]: string | undefined;
}

export default function HomeScreen() {
  const [randomMeal, setRandomMeal] = useState<Meal | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRandomMeal();
  }, []);

  const fetchRandomMeal = async () => {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await response.json();
      if (data.meals && data.meals.length > 0) {
        setRandomMeal(data.meals[0]);
      }
    } catch (error) {
      console.error('Error fetching random meal:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Byte</Text>
      
      {loading ? (
        <ActivityIndicator size="large" color="#e74c3c" style={styles.loader} />
      ) : randomMeal ? (
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: randomMeal.strMealThumb }} 
            style={styles.mealImage}
          />
          <Text style={styles.mealName}>{randomMeal.strMeal}</Text>
        </View>
      ) : (
        <Image 
          source={require('../assets/alien.png')} 
          style={styles.fallbackImage}
        />
      )}
      
      <Text style={styles.subtitle}>Your personal recipe collection</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#e74c3c',
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    marginTop: 20,
  },
  loader: {
    marginVertical: 40,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mealImage: {
    width: 300,
    height: 300,
    borderRadius: 150,
    resizeMode: 'cover',
    borderWidth: 3,
    borderColor: '#e74c3c',
  },
  mealName: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
    color: '#333',
    textAlign: 'center',
  },
  fallbackImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});
