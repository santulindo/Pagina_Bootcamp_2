// src/components/CartItem.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { CartItemType } from '../types';
import { colors } from '../utils/colors';

interface Props {
  item: CartItemType;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

const CartItem = ({ item, onIncrease, onDecrease, onRemove }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.product.image }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title}>{item.product.title}</Text>
        <Text style={styles.price}>${item.product.price.toFixed(2)}</Text>

        <View style={styles.row}>
          <TouchableOpacity style={styles.btn} onPress={onDecrease}>
            <Text style={styles.btnText}>-</Text>
          </TouchableOpacity>

          <Text style={styles.qty}>{item.quantity}</Text>

          <TouchableOpacity style={styles.btn} onPress={onIncrease}>
            <Text style={styles.btnText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={onRemove}>
        <Text style={styles.remove}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3,
    alignItems: 'center',
  },
  image: {
    width: 75,
    height: 75,
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
  },
  price: {
    fontSize: 14,
    color: colors.primary,
    marginVertical: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: colors.light,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: { fontSize: 20 },
  qty: { marginHorizontal: 10, fontSize: 16 },
  remove: {
    fontSize: 22,
    color: colors.danger,
    marginLeft: 10,
  },
});

export default CartItem;
