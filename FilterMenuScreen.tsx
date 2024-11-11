import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button } from 'react-native';

// Define the type for Dish
type Dish = {
  id: string;
  name: string;
  description: string;
  course: string;
  price: number;
};

export default function FilterMenuScreen({ route, navigation }: any) {
  const [dishes, setDishes] = useState<Dish[]>(route.params?.dishes || []);
  const [filteredDishes, setFilteredDishes] = useState<Dish[]>(dishes);
  const [selectedCourse, setSelectedCourse] = useState('');

  useEffect(() => {
    if (route.params?.dishes) {
      setDishes(route.params.dishes);
      applyFilter(selectedCourse, route.params.dishes);
    }
  }, [route.params?.dishes]);

  const applyFilter = (course: string, dishesToFilter: Dish[] = dishes) => {
    if (course) {
      setFilteredDishes(
        dishesToFilter.filter((dish: Dish) => dish.course.toLowerCase() === course.toLowerCase())
      );
    } else {
      setFilteredDishes(dishesToFilter);
    }
    setSelectedCourse(course);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Menu by Course</Text>
      
      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        <TouchableOpacity 
          style={[styles.filterButton, selectedCourse === '' && styles.selectedButton]} 
          onPress={() => applyFilter('')}
        >
          <Text style={styles.buttonText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.filterButton, selectedCourse === 'starter' && styles.selectedButton]} 
          onPress={() => applyFilter('starter')}
        >
          <Text style={styles.buttonText}>Starter</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.filterButton, selectedCourse === 'main' && styles.selectedButton]} 
          onPress={() => applyFilter('main')}
        >
          <Text style={styles.buttonText}>Main</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.filterButton, selectedCourse === 'dessert' && styles.selectedButton]} 
          onPress={() => applyFilter('dessert')}
        >
          <Text style={styles.buttonText}>Dessert</Text>
        </TouchableOpacity>
      </View>

      {/* List of Filtered Dishes */}
      <FlatList
        data={filteredDishes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.dishItem}>
            <Text>{item.name} ({item.course}) - R{item.price.toFixed(2)}</Text>
          </View>
        )}
      />

      {/* Navigation Buttons */}
      <View style={styles.navigationButtons}>
        <TouchableOpacity 
          style={styles.navigationButton} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  filterContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    marginBottom: 20 
  },
  filterButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#6200EE',
    marginHorizontal: 5,
  },
  selectedButton: {
    backgroundColor: '#3700B3',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  dishItem: { 
    padding: 10, 
    borderBottomColor: '#ccc', 
    borderBottomWidth: 1 
  },
  navigationButtons: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    marginTop: 20 
  },
  navigationButton: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    backgroundColor: '#6200EE',
    marginVertical: 10,
    width: '40%',
    alignItems: 'center',
  },
});
