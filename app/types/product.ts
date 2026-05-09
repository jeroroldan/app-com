export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  imageAlt: string;
  marketingBlurb: string;
  featured?: boolean;
}
