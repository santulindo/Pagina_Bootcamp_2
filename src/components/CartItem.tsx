import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { CartItem as ItemType } from "../context/CartContext";

type Props = {
  item: ItemType;
  onRemove: () => void;
  onChangeQty: (qty: number) => void;
};

export default function CartItem({ item, onRemove, onChangeQty }: Props) {
  return (
    <View style={styles.container}>
      {item.image && (
        <Image source={{ uri: item.image }} style={styles.image} />
      )}

      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>

        {/* Quantity Controls */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => onChangeQty(item.quantity - 1)}
          >
            <Text>-</Text>
          </TouchableOpacity>

          <Text style={styles.qty}>{item.quantity}</Text>

          <TouchableOpacity
            style={styles.qtyBtn}
            onPress={() => onChangeQty(item.quantity + 1)}
          >
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={onRemove}>
        <Text style={styles.remove}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 12,
    alignItems: "center",
    gap: 10,
  },
  image: { width: 80, height: 80, borderRadius: 10 },
  title: { fontWeight: "700" },
  price: { color: "#444", marginBottom: 6 },
  row: { flexDirection: "row", alignItems: "center" },
  qtyBtn: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderRadius: 6,
    marginHorizontal: 6,
  },
  qty: { fontWeight: "bold" },
  remove: { color: "red", fontWeight: "600" },
});
