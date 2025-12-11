// src/screens/Profile/OrderDetailScreen.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function OrderDetailScreen({ route }: any) {
  const { order } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order #{order.id}</Text>

      <Text style={styles.label}>Date: {order.date}</Text>
      <Text style={styles.label}>Total: ${order.total}</Text>

      <Text style={styles.itemsTitle}>Items:</Text>
      <Text style={styles.item}>• Item 1</Text>
      <Text style={styles.item}>• Item 2</Text>
      <Text style={styles.item}>• Item 3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 12 },
  label: { fontSize: 16, marginBottom: 5 },
  itemsTitle: { fontWeight: "700", marginTop: 20, marginBottom: 10 },
  item: { fontSize: 16, marginBottom: 5 },
});
