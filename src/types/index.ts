// src/types/index.ts
export type Review = {
  id: string;
  productId: string;
  userId: string;
  rating: number; // 1..5
  comment?: string;
  createdAt?: string;
};

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
}

export type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
};
