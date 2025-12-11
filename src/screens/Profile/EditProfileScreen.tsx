// src/screens/Profile/EditProfileScreen.tsx
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default function EditProfileScreen({ navigation }: any) {
  const [name, setName] = useState("Juan Manuel");
  const [email, setEmail] = useState("juan@example.com");

  const saveProfile = () => {
    // Aquí puedes integrar AsyncStorage o backend
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Email Address</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.saveBtn} onPress={saveProfile}>
        <Text style={styles.saveText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { marginTop: 15, fontWeight: "600" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginTop: 5,
  },
  saveBtn: {
    backgroundColor: "#22c55e",
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  saveText: { color: "white", textAlign: "center", fontWeight: "700" },
});
