import { View, Text, StyleSheet } from "react-native";

type Review = {
  id: string | number;
  productId: string | number;
  user: string;
  rating: number;
  comment: string;
};

type Props = {
  review: Review;
};

export default function ReviewCard({ review }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.user}>{review.user}</Text>
      <Text style={styles.rating}>Rating: {review.rating} / 5</Text>
      <Text style={styles.comment}>{review.comment}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#fff",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  user: { fontWeight: "700", marginBottom: 4 },
  rating: { color: "#444", marginBottom: 6 },
  comment: { color: "#333" },
});
