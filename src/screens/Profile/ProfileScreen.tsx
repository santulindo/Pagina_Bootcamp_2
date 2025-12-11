// src/screens/Profile/ProfileScreen.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ProfileScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Juan</Text>
      <Text style={styles.subtitle}>Manage your profile and orders</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("EditProfile")}
      >
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Orders")}
      >
        <Text style={styles.buttonText}>My Orders</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "700" },
  subtitle: { color: "#555", marginBottom: 20 },
  button: {
    backgroundColor: "#3b82f6",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonText: { color: "white", fontWeight: "600", textAlign: "center" },
});
