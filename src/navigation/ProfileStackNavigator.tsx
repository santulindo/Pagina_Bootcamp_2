// src/navigation/ProfileStackNavigator.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProfileScreen from "../screens/Profile/ProfileScreen";
import EditProfileScreen from "../screens/Profile/EditProfileScreen";
import OrdersScreen from "../screens/Profile/OrdersScreen";
import OrderDetailScreen from "../screens/Profile/OrderDetailScreen";

const Stack = createNativeStackNavigator();

export default function ProfileStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileHome" component={ProfileScreen} options={{ title: "My Profile" }} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ title: "Edit Profile" }} />
      <Stack.Screen name="Orders" component={OrdersScreen} options={{ title: "My Orders" }} />
      <Stack.Screen name="OrderDetail" component={OrderDetailScreen} options={{ title: "Order Detail" }} />
    </Stack.Navigator>
  );
}
