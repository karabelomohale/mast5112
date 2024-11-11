import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';

export default function CheckoutScreen({ route, navigation }: any) {
  const { selectedItems } = route.params;
  const totalPrice = selectedItems.reduce((total: number, item: any) => total + item.price, 0);

  // Handle order placement
  const handlePlaceOrder = () => {
    Alert.alert("Order Confirmed!", "Your order has been successfully placed.", [
      { text: "OK", onPress: () => navigation.navigate('Home') }
    ]);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://amakenlb.com/wp-content/uploads/2016/07/stock-footage-happy-chef-making-ok-sign-to-camera-in-commercial-kitchen.jpg' }} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Checkout</Text>

        {/* List of selected items */}
        <FlatList
          data={selectedItems}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text>R {item.price.toFixed(2)}</Text>
            </View>
          )}
        />
        
        {/* Total Price */}
        <Text style={styles.total}>Total: R {totalPrice.toFixed(2)}</Text>

        {/* Place Order Button */}
        <TouchableOpacity style={styles.button} onPress={handlePlaceOrder}>
          <Text style={styles.buttonText}>Place Order</Text>
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
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light overlay for readability
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    marginBottom: 10,
    borderRadius: 5,
    elevation: 3,  // Adds shadow effect for iOS
  },
  itemName: {
    fontSize: 18,
    fontWeight: '500',
  },
  total: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
