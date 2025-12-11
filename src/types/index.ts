export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Review {
  id: string;
  productId: string;
  user: string;
  rating: number;
  comment: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}
