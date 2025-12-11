// src/navigation/types.ts
import { Product } from '../types';

export type HomeStackParamList = {
  Home: undefined;
  ProductDetail: { productId: string };
  Reviews: { productId: string };
};
