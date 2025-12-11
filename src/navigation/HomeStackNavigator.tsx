import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/HomeScreen";
import ProductDetailScreen from "../screens/home/ProductDetailScreen";
import ReviewsScreen from "../screens/home/ReviewsScreen";


const Stack = createNativeStackNavigator();


export default function HomeStack() {
return (
<Stack.Navigator>
<Stack.Screen name="Home" component={HomeScreen} options={{ title: "Home" }} />
<Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: "Product Details" }} />
<Stack.Screen name="Reviews" component={ReviewsScreen} options={{ title: "Reviews" }} />
</Stack.Navigator>
);
}