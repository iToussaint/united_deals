export interface Product {
  image: string;
  description: string;
  price: number;
  rating: number;
  discount: number;
  status?: 'HOT' | 'BEST DEALS' | 'SALE';
}
