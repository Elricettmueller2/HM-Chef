import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useRecipes } from '../context/RecipeContext';
import { router } from 'expo-router';

export default function MyRecipesScreen() {
  const { recipes } = useRecipes();
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Recipes</Text>
      
      {recipes.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No recipes saved yet.</Text>
          <TouchableOpacity 
            style={styles.createButton}
            onPress={() => router.push('/new-recipe')}
          >
            <Text style={styles.createButtonText}>Create your first recipe</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={recipes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.recipeCard}
              onPress={() => console.log('View recipe details', item.id)}
            >
              <View style={styles.recipeContent}>
                <View style={styles.recipeInfo}>
                  <Text style={styles.recipeName}>{item.name}</Text>
                  <Text style={styles.recipeDescription}>{item.description}</Text>
                </View>
                
                {item.imageUri && (
                  <Image 
                    source={{ uri: item.imageUri }} 
                    style={styles.recipeImage} 
                  />
                )}
              </View>
            </TouchableOpacity>
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
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 20,
  },
  createButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  createButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
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
  recipeContent: {
    flexDirection: 'row',
  },
  recipeInfo: {
    flex: 1,
    marginRight: 10,
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
  recipeImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
});
