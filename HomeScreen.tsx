import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';

type Dish = {
  id: string;
  name: string;
  price: number;
  description: string;
  course: string;
};

export default function HomeScreen({ navigation, route }: any) {
  // Initial menu items
  const initialDishes: Dish[] = [
    { id: '1', name: 'Salad', price: 50, description: 'Fresh garden salad', course: 'Starter' },
    { id: '2', name: 'Steak', price: 150, description: 'Grilled steak', course: 'Main' },
    { id: '3', name: 'Pasta', price: 100, description: 'Creamy pasta', course: 'Main' },
    { id: '4', name: 'Sushi', price: 120, description: 'Assorted sushi', course: 'Starter' },
    { id: '5', name: 'Ice cream cake', price: 60, description: 'Milk & Ice cream', course: 'Dessert' },
  ];

  const [dishes, setDishes] = useState<Dish[]>(initialDishes);
  const [selectedItems, setSelectedItems] = useState<Dish[]>([]);

  // Update dishes when the list is modified in ManageMenuScreen
  useEffect(() => {
    if (route.params?.dishes) {
      setDishes(route.params.dishes);
    }
  }, [route.params?.dishes]);

  // Toggle item selection
  const toggleItemSelection = (dish: Dish) => {
    setSelectedItems(prevSelectedItems =>
      prevSelectedItems.some(item => item.id === dish.id)
        ? prevSelectedItems.filter(item => item.id !== dish.id)
        : [...prevSelectedItems, dish]
    );
  };

  // Calculate average price by course
  const calculateAveragePrice = (course: string) => {
    const courseDishes = dishes.filter(dish => dish.course.toLowerCase() === course.toLowerCase());
    const total = courseDishes.reduce((acc, dish) => acc + dish.price, 0);
    return courseDishes.length ? (total / courseDishes.length).toFixed(2) : 'N/A';
  };

  // Handle checkout navigation
  const handleCheckout = () => {
    if (selectedItems.length === 0) {
      Alert.alert('No items selected', 'Please select at least one item before proceeding.');
    } else {
      navigation.navigate('Checkout', { selectedItems });
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://th.bing.com/th/id/OIP.Mix9387rswrjOIh6G5mZDAHaFb?w=225&h=180&c=7&r=0&o=5&pid=1.7' }} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Menu</Text>

        {/* Display Average Prices by Course */}
        <View style={styles.averagePriceContainer}>
          <Text>Starter Average Price: R {calculateAveragePrice('starter')}</Text>
          <Text>Main Course Average Price: R {calculateAveragePrice('main')}</Text>
          <Text>Dessert Average Price: R {calculateAveragePrice('dessert')}</Text>
        </View>

        <Text style={styles.totalItems}>Total Menu Items: {dishes.length}</Text>

        <FlatList
          data={dishes}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.item, selectedItems.some(selected => selected.id === item.id) && styles.selectedItem]}
              onPress={() => toggleItemSelection(item)}
            >
              <Text>{item.name}</Text>
              <Text>{item.description}</Text>
              <Text>({item.course})</Text>
              <Text>R {item.price.toFixed(2)}</Text>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('ManageMenu', { dishes })}
        >
          <Text style={styles.buttonText}>Manage Menu</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('FilterMenu', { dishes })}
        >
          <Text style={styles.buttonText}>Guest</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button} 
          onPress={handleCheckout}
        >
          <Text style={styles.buttonText}>Go to Checkout</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  totalItems: {
    fontSize: 18,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  item: {
    padding: 15,
    backgroundColor: '#ffffff',
    marginBottom: 10,
    borderRadius: 5,
  },
  selectedItem: {
    backgroundColor: '#0eec5883',
  },
  averagePriceContainer: {
    marginBottom: 20,
  },
});
