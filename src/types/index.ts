// src/types/index.ts
export type Review = {
  id: string;
  productId: string;
  userId: string;
  rating: number; // 1..5
  comment?: string;
  createdAt?: string;
};

export type Product = {
  id: string;
  title: string;
  price: number;
  categoryId: string;
  image?: string;
  description?: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
};
