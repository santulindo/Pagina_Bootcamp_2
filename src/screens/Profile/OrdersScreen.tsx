// src/screens/Profile/OrdersScreen.tsx
import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const orders = [
  { id: "o1", date: "2025-01-01", total: 120.5 },
  { id: "o2", date: "2025-01-15", total: 59.9 },
];

export default function OrdersScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Orders</Text>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.orderCard}
            onPress={() => navigation.navigate("OrderDetail", { order: item })}
          >
            <Text style={styles.orderText}>Order #{item.id}</Text>
            <Text>Date: {item.date}</Text>
            <Text>Total: ${item.total}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 15 },
  orderCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
  },
  orderText: { fontWeight: "700", marginBottom: 5 },
});
