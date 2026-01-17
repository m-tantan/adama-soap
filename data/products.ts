import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Calm',
    slug: 'calm',
    price: 9.50,
<<<<<<< HEAD
    images: [
      withBasePath('/images/products/Calm/Whisk_ab556fd70c14b5e942b46e79b621f67edr.png'),
      withBasePath('/images/products/Calm/Whisk_ba9b8b2d9c4df33ae784132f53d103f6dr.png'),
      withBasePath('/images/products/Calm/Whisk_ef9b4054a8760cc8736453a83293b209dr.png')
    ],
    description: 'A soothing soap crafted with calming essential oils and coffee grounds for gentle exfoliation. Perfect for unwinding after a long day.',
    ribbon: 'Best Seller',
=======
    images: ['/images/products/calm-soap.png', '/images/products/calm-soap.png'],
    description: 'A soothing soap crafted with calming essential oils and coffee grounds for gentle exfoliation.',
    ribbon: 'New',
>>>>>>> 0a4e95199605bef6ef16a9560f6edc0c3a0788b7
    inStock: true,
    ingredients: ['Recycled Coffee Grounds', 'Coconut Oil', 'Olive Oil', 'Lavender Essential Oil', 'Chamomile', 'Shea Butter']
  },
  {
    id: '2',
    name: 'Sunny Sage',
    slug: 'sunny-sage',
    price: 9.50,
    images: [
      withBasePath('/images/products/SunnySage/Whisk_2ad69ab69811f7db3dc4bf4d3ff164e4eg.png'),
      withBasePath('/images/products/SunnySage/Whisk_75ea0189cf0145da5a14ddb2722e623beg.png'),
      withBasePath('/images/products/SunnySage/Whisk_85e3f10feaed6c99eae4d5c8b1c83db3eg.png'),
      withBasePath('/images/products/SunnySage/Whisk_8d0c2167d9ce36fa4a9475af8c78a234dr.png'),
      withBasePath('/images/products/SunnySage/Whisk_cdnzywy4qtoyiznj1szxmwytygnkrtllztz40co.png'),
      withBasePath('/images/products/SunnySage/Whisk_ff6b2bbc296e345bdd74cddd38ebdffaeg.png')
    ],
    description: 'Bright and refreshing soap infused with sage and citrus notes. Made with recycled coffee grounds for natural exfoliation.',
    ribbon: 'New',
    inStock: true,
    ingredients: ['Recycled Coffee Grounds', 'Coconut Oil', 'Olive Oil', 'Sage Essential Oil', 'Lemon Essential Oil', 'Shea Butter']
  },
  {
    id: '3',
    name: 'Forest',
    slug: 'forest-soap',
    price: 9.50,
    images: ['/images/products/forest-soap.jpg'],
    description: 'Earthy forest-inspired soap with pine and cedarwood scents, combined with natural coffee exfoliant.',
    inStock: true,
    ingredients: ['Recycled Coffee Grounds', 'Coconut Oil', 'Olive Oil', 'Pine Essential Oil', 'Cedarwood Essential Oil', 'Shea Butter']
<<<<<<< HEAD
=======
  },
  {
    id: '3',
    name: 'CLC Soap (Coffee-Lemon-Cedar)',
    slug: 'clc-soap',
    price: 6.00,
    images: ['/images/products/clc-soap-1.png', '/images/products/clc-soap-1.png'],
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
    images: ['/images/products/tote-bag-1.jpg'],
    description: 'Calming lavender soap with coffee grounds for gentle exfoliation.',
    inStock: true
  },
  {
    id: '5',
    name: 'Mint Refresh Soap',
    slug: 'mint-refresh-soap',
    price: 6.00,
    images: ['/images/products/tote-bag-2.jpg'],
    description: 'Invigorating peppermint soap with natural coffee exfoliant.',
    inStock: true
  },
  {
    id: '6',
    name: 'Citrus Burst Soap',
    slug: 'citrus-burst-soap',
    price: 5.50,
    salePrice: 4.50,
    images: ['/images/products/placeholder.jpg'],
    description: 'Energizing citrus blend with coffee grounds.',
    ribbon: 'Sale',
    inStock: true
>>>>>>> 0a4e95199605bef6ef16a9560f6edc0c3a0788b7
  }
];
