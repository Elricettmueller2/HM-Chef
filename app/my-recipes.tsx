import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

// Temporary mock data - will be replaced with Context data later
const TEMP_RECIPES = [
  {
    id: '1',
    name: 'Pasta Carbonara',
    description: 'Classic Italian pasta dish with eggs, cheese, pancetta, and pepper.',
    image: 'https://via.placeholder.com/100'
  },
  {
    id: '2',
    name: 'Chicken Curry',
    description: 'Spicy chicken curry with onions, tomatoes, and aromatic spices.',
    image: 'https://via.placeholder.com/100'
  },
];

export default function MyRecipesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Recipes</Text>
      
      {TEMP_RECIPES.length === 0 ? (
        <Text style={styles.emptyText}>No recipes saved yet. Create your first recipe!</Text>
      ) : (
        <FlatList
          data={TEMP_RECIPES}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.recipeCard}>
              <Image 
                source={{ uri: item.image }} 
                style={styles.recipeImage} 
              />
              <View style={styles.recipeInfo}>
                <Text style={styles.recipeName}>{item.name}</Text>
                <Text style={styles.recipeDescription}>{item.description}</Text>
              </View>
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
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#7f8c8d',
    marginTop: 20,
  },
  recipeCard: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  recipeImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  recipeInfo: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  recipeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  recipeDescription: {
    fontSize: 14,
    color: '#555',
  },
});
