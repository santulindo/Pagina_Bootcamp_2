// src/components/ReviewCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { Review } from '../types';
import { colors } from '../utils/colors';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  review: Review;
}

const ReviewCard: React.FC<Props> = ({ review }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Ionicons name="person-circle-outline" size={28} />
        <Text style={styles.user}>{review.userId}</Text>
      </View>
      <Text style={styles.rating}>Rating: {review.rating} / 5</Text>
      {review.comment ? <Text style={styles.comment}>{review.comment}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 8,
    shadowRadius: 4,
    shadowOpacity: 0.1,
    marginBottom: 10,
  },
  header: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  user: { fontWeight: '600', marginLeft: 8 },
  rating: { marginTop: 6, color: colors.dark },
  comment: { marginTop: 4, color: colors.dark },
});

export default ReviewCard;
