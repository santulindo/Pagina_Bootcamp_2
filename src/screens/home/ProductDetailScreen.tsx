import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { products } from '../../data/products';
import { colors } from '../../utils/colors';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function ProductDetailScreen() {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();

  const product = products.find((p) => p.id === route.params.productId);

  if (!product) return null;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />

      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>$ {product.price}</Text>
      <Text style={styles.desc}>{product.description}</Text>

      <TouchableOpacity
        style={styles.reviewsBtn}
        onPress={() => navigation.navigate('Reviews', { productId: product.id })}
      >
        <Text style={styles.reviewsText}>Ver Reviews</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    backgroundColor: colors.white,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 12,
  },
  price: {
    fontSize: 20,
    color: colors.primary,
    marginTop: 4,
  },
  desc: {
    marginTop: 10,
    fontSize: 14,
    color: colors.dark,
  },
  reviewsBtn: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 12,
    marginTop: 20,
  },
  reviewsText: {
    color: colors.white,
    fontWeight: '700',
    textAlign: 'center',
  },
});
