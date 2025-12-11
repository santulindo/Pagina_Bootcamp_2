import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/home/HomeScreen';
import ProductDetailScreen from '../../screens/home/ProductDetailScreen';
import ReviewsScreen from '../../screens/home/ReviewsScreen';

export type HomeStackParamList = {
  Home: undefined;
  ProductDetail: { productId: string };
  Reviews: { productId: string };
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      <Stack.Screen name="Reviews" component={ReviewsScreen} />
    </Stack.Navigator>
  );
}
