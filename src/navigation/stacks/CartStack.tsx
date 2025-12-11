import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from "../../screens/cart/CartScreen";
import ShippingScreen from "../../screens/cart/ShippingScreen";
import PaymentScreen from "../../screens/cart/PaymentScreen";
import ConfirmationScreen from "../../screens/cart/ConfirmationScreen";

const Stack = createNativeStackNavigator();

export default function CartStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Shipping" component={ShippingScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
    </Stack.Navigator>
  );
}