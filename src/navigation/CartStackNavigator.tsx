import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from "../screens/cart/CartScreen";
import ShippingScreen from "../screens/cart/ShippingScreen";


const Stack = createNativeStackNavigator();


export default function CartStack() {
return (
<Stack.Navigator>
<Stack.Screen name="Cart" component={CartScreen} options={{ title: "Cart" }} />
<Stack.Screen name="Shipping" component={ShippingScreen} options={{ title: "Shipping" }} />
</Stack.Navigator>
);
}