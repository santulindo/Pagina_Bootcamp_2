import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ShippingScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shipping Address</Text>
      <Text style={styles.text}>123 Fake Street, Medellín</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Payment")}
      >
        <Text style={styles.buttonText}>Continue to Payment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 16, marginBottom: 20 },
  button: {
    backgroundColor: "#3b82f6",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16 },
});
