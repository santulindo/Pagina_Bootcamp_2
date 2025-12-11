import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import CartItem from "../../components/CartItem";
import { useCart } from "../../context/CartContext";

export default function CartScreen({ navigation }: any) {
  const { cartItems, removeFromCart, updateQuantity, total } = useCart();

  const goToShipping = () => navigation.navigate("Shipping");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>

      {cartItems.length === 0 ? (
        <View style={styles.empty}>
          <Text>Your cart is empty</Text>
        </View>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CartItem
              item={item}
              onRemove={() => removeFromCart(item.id)}
              onChangeQty={(qty) => updateQuantity(item.id, qty)}
            />
          )}
        />
      )}

      <View style={styles.footer}>
        <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>

        <TouchableOpacity
          style={[styles.checkoutBtn, cartItems.length === 0 && { opacity: 0.5 }]}
          onPress={goToShipping}
          disabled={cartItems.length === 0}
        >
          <Text style={{ color: "white", fontWeight: "600" }}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
  empty: { flex: 1, alignItems: "center", justifyContent: "center" },
  footer: {
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#eee",
    marginTop: 8,
  },
  total: { fontSize: 18, fontWeight: "700", marginBottom: 8 },
  checkoutBtn: {
    backgroundColor: "#3b82f6",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
});
