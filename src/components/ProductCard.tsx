// src/components/ProductCard.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Product } from '../types';
import { colors } from '../utils/colors';

interface Props {
  item: Product;
  onPress: () => void;
}

const ProductCard = ({ item, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <Text style={styles.title} numberOfLines={2}>
        {item.title}
      </Text>

      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
  },
  image: {
    width: '100%',
    height: 130,
    resizeMode: 'contain',
  },
  title: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: '500',
    color: colors.dark,
  },
  price: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: '700',
    color: colors.primary,
  },
});

export default ProductCard;
