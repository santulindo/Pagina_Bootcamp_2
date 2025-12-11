// src/components/CustomDrawer.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { colors } from '../utils/colors';
import { categories } from '../data/categories';


const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/100' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>John Doe</Text>
      </View>

      <Text style={styles.title}>Categories</Text>

      {categories.map((cat) => (
        <TouchableOpacity
          key={cat.id}
          style={styles.item}
          onPress={() => {
            props.navigation.navigate('Category', { categoryId: cat.id });
            props.navigation.closeDrawer();
          }}
        >
          <Text style={styles.itemText}>{cat.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.light,
  },
  avatar: { width: 80, height: 80, borderRadius: 40 },
  name: { marginTop: 10, fontSize: 18, fontWeight: '700' },
  title: { marginTop: 20, marginLeft: 20, fontSize: 18, fontWeight: '600' },
  item: {
    padding: 15,
    marginTop: 5,
    borderBottomWidth: 0.3,
    borderColor: colors.light,
  },
  itemText: { fontSize: 16 },
});

export default CustomDrawer;
