import { useMemo } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ReviewCard from "../../components/ReviewCard";
import reviews from "../../data/reviews";

export default function ReviewsScreen({ route }: any) {
  const { productId } = route.params;

  const productReviews = useMemo(
    () => reviews.filter((r) => String(r.productId) === String(productId)),
    [productId]
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reviews</Text>

      <FlatList
        data={productReviews}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ReviewCard review={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
