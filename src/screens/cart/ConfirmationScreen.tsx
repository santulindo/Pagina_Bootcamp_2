import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ConfirmationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Confirmed 🎉</Text>
      <Text style={styles.text}>Thank you for your purchase!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 18, color: "#444" },
});
