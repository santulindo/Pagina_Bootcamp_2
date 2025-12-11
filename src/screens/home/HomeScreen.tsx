import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ProductCard from '../../components/ProductCard';
import { products } from '../../data/products';
import { colors } from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos Destacados</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    padding: 14,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 12,
  },
});
