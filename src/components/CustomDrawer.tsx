import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";


export default function CustomDrawer(props: any) {
return (
<DrawerContentScrollView {...props}>
<View style={styles.container}>
<Text style={styles.header}>Menu</Text>


<TouchableOpacity style={styles.item} onPress={() => props.navigation.navigate("HomeStack")}>
<Text>Home</Text>
</TouchableOpacity>


<TouchableOpacity style={styles.item} onPress={() => props.navigation.navigate("CartStack")}>
<Text>Cart</Text>
</TouchableOpacity>


<TouchableOpacity style={styles.item} onPress={() => props.navigation.navigate("ProfileStack")}>
<Text>Profile</Text>
</TouchableOpacity>
</View>
</DrawerContentScrollView>
);
}


const styles = StyleSheet.create({
container: { flex: 1, padding: 20 },
header: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
item: { paddingVertical: 12 },
});