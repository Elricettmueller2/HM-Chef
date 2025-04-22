import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Image, TouchableOpacity } from 'react-native';

// Define the meal type for TypeScript
interface Meal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strMealThumb: string;
}

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Meal[]>([]);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const searchRecipes = async () => {
    if (!searchQuery.trim()) return;
    
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );
      const data = await response.json();
      setSearchResults(data.meals || []);
    } catch (error) {
      console.error('Error searching recipes:', error);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleImageExpansion = (mealId: string) => {
    setExpandedImage(expandedImage === mealId ? null : mealId);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Recipes</Text>
      
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Enter recipe name"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Button title="Search" onPress={searchRecipes} />
      </View>
      
      {isLoading ? (
        <Text style={styles.statusText}>Searching...</Text>
      ) : searchResults.length === 0 ? (
        <Text style={styles.statusText}>
          {searchQuery.trim() ? 'No recipes found. Try another search.' : 'Enter a recipe name to search.'}
        </Text>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.idMeal}
          renderItem={({ item }) => (
            <View style={styles.recipeCard}>
              <View style={styles.recipeInfo}>
                <Text style={styles.recipeName}>{item.strMeal}</Text>
                <Text style={styles.recipeCategory}>Category: {item.strCategory}</Text>
              </View>
              
              <TouchableOpacity onPress={() => toggleImageExpansion(item.idMeal)}>
                <Image
                  source={{ uri: item.strMealThumb }}
                  style={[
                    styles.recipeImage,
                    expandedImage === item.idMeal && styles.expandedImage
                  ]}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#e74c3c',
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  statusText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#7f8c8d',
    marginTop: 20,
  },
  recipeCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  recipeInfo: {
    marginBottom: 10,
  },
  recipeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  recipeCategory: {
    fontSize: 14,
    color: '#555',
  },
  recipeImage: {
    width: '100%',
    height: 150,
    borderRadius: 5,
    resizeMode: 'cover',
  },
  expandedImage: {
    height: 300,
  },
});
