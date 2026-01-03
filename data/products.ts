import { Product } from '@/types';
import { withBasePath } from '@/lib/utils';

export const products: Product[] = [
  {
    id: '1',
    name: 'Calm',
    slug: 'calm',
    price: 9.50,
    images: [withBasePath('/images/products/calm-soap.png'), withBasePath('/images/products/calm-soap.png')],
    description: 'A soothing soap crafted with calming essential oils and coffee grounds for gentle exfoliation.',
    ribbon: 'New',
    inStock: true,
    ingredients: ['Recycled Coffee Grounds', 'Coconut Oil', 'Olive Oil', 'Lavender Essential Oil', 'Chamomile', 'Shea Butter']
  },
  {
    id: '2',
    name: 'Forest',
    slug: 'forest-soap',
    price: 9.50,
    images: [withBasePath('/images/products/forest-soap.jpg')],
    description: 'Earthy forest-inspired soap with pine and cedarwood scents, combined with natural coffee exfoliant.',
    inStock: true,
    ingredients: ['Recycled Coffee Grounds', 'Coconut Oil', 'Olive Oil', 'Pine Essential Oil', 'Cedarwood Essential Oil', 'Shea Butter']
  },
  {
    id: '3',
    name: 'CLC Soap (Coffee-Lemon-Cedar)',
    slug: 'clc-soap',
    price: 6.00,
    images: [withBasePath('/images/products/clc-soap-1.png'), withBasePath('/images/products/clc-soap-1.png')],
    description: 'Our best-selling handcrafted soap made from recycled coffee grounds. Natural exfoliation with refreshing lemon and cedar scents.',
    ribbon: 'Best Seller',
    inStock: true,
    ingredients: ['Recycled Coffee Grounds', 'Coconut Oil', 'Olive Oil', 'Lemon Essential Oil', 'Cedar Essential Oil', 'Shea Butter']
  },
  {
    id: '4',
    name: 'Lavender Bliss Soap',
    slug: 'lavender-bliss-soap',
    price: 6.00,
    images: [withBasePath('/images/products/tote-bag-1.jpg')],
    description: 'Calming lavender soap with coffee grounds for gentle exfoliation.',
    inStock: true
  },
  {
    id: '5',
    name: 'Mint Refresh Soap',
    slug: 'mint-refresh-soap',
    price: 6.00,
    images: [withBasePath('/images/products/tote-bag-2.jpg')],
    description: 'Invigorating peppermint soap with natural coffee exfoliant.',
    inStock: true
  },
  {
    id: '6',
    name: 'Citrus Burst Soap',
    slug: 'citrus-burst-soap',
    price: 5.50,
    salePrice: 4.50,
    images: [withBasePath('/images/products/placeholder.jpg')],
    description: 'Energizing citrus blend with coffee grounds.',
    ribbon: 'Sale',
    inStock: true
  }
];
