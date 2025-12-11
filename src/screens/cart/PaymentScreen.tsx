import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function PaymentScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Method</Text>
      <Text style={styles.text}>Visa •••• 4242</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Confirmation")}
      >
        <Text style={styles.buttonText}>Confirm Payment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 16, marginBottom: 20 },
  button: {
    backgroundColor: "green",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16 },
});
