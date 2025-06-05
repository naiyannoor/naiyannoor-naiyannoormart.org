export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  rating: number;
  inStock: boolean;
  featured?: boolean;
  discount?: number;
  tags?: string[];
  details?: {
    material?: string;
    dimensions?: string;
    weight?: string;
    origin?: string;
    [key: string]: string | undefined;
  };
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
  productCount: number;
}

export type SortOption = 'newest' | 'price-low' | 'price-high' | 'popular';