export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  salePrice?: number;
  images: string[];
  description: string;
  ribbon?: 'Best Seller' | 'New' | 'Sale';
  inStock: boolean;
  ingredients?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}
