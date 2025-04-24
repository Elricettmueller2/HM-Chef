import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import { RecipeProvider } from '../context/RecipeContext';

export default function AppLayout() {
  return (
    <RecipeProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#e74c3c',
          tabBarInactiveTintColor: 'gray',
          headerStyle: {
            backgroundColor: '#e74c3c',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Byte',
            tabBarLabel: 'Home',
          }}
        />
        <Tabs.Screen
          name="new-recipe"
          options={{
            title: 'New Recipe',
            tabBarLabel: 'New Recipe',
          }}
        />
        <Tabs.Screen
          name="my-recipes"
          options={{
            title: 'My Recipes',
            tabBarLabel: 'My Recipes',
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: 'Search',
            tabBarLabel: 'Search',
          }}
        />
      </Tabs>
    </RecipeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
