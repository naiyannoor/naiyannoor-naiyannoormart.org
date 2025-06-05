import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'clothing',
    name: 'Traditional Clothing',
    image: 'https://images.pexels.com/photos/6592361/pexels-photo-6592361.jpeg',
    description: 'Authentic Bangladeshi clothing including sarees, salwar kameez, and more.',
    productCount: 24,
  },
  {
    id: 'handicrafts',
    name: 'Handicrafts',
    image: 'https://images.pexels.com/photos/6045028/pexels-photo-6045028.jpeg',
    description: 'Handmade crafts showcasing Bangladeshi artistry and cultural heritage.',
    productCount: 18,
  },
  {
    id: 'food',
    name: 'Food & Spices',
    image: 'https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg',
    description: 'Authentic spices, sweets, and food products from Bangladesh.',
    productCount: 15,
  },
  {
    id: 'jewelry',
    name: 'Traditional Jewelry',
    image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg',
    description: 'Beautiful jewelry pieces reflecting Bangladeshi craftsmanship.',
    productCount: 12,
  },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Jamdani Saree',
    price: 12500,
    category: 'clothing',
    image: 'https://images.pexels.com/photos/9017680/pexels-photo-9017680.jpeg',
    description: 'Handwoven Jamdani saree made with the finest cotton and traditional techniques. Features intricate geometric patterns.',
    rating: 4.8,
    inStock: true,
    featured: true,
    tags: ['saree', 'jamdani', 'handwoven', 'traditional'],
    details: {
      material: 'Cotton',
      dimensions: '5.5m x 1.2m',
      origin: 'Dhaka, Bangladesh',
      careInstructions: 'Hand wash with mild detergent, hang dry in shade',
    },
  },
  {
    id: '2',
    name: 'Nakshi Kantha',
    price: 3500,
    category: 'handicrafts',
    image: 'https://images.pexels.com/photos/4946975/pexels-photo-4946975.jpeg',
    description: 'Traditional embroidered quilt featuring intricate stitching and Bengali folk motifs. Perfect as a wall hanging or bedspread.',
    rating: 4.7,
    inStock: true,
    featured: true,
    tags: ['kantha', 'embroidery', 'handmade', 'quilt'],
    details: {
      material: 'Cotton fabric with cotton thread embroidery',
      dimensions: '90cm x 110cm',
      origin: 'Rajshahi, Bangladesh',
      careInstructions: 'Dry clean only',
    },
  },
  {
    id: '3',
    name: 'Premium Bangladeshi Tea',
    price: 450,
    category: 'food',
    image: 'https://images.pexels.com/photos/1493080/pexels-photo-1493080.jpeg',
    description: 'Premium black tea from the hills of Sylhet. Known for its rich aroma and robust flavor.',
    rating: 4.5,
    inStock: true,
    tags: ['tea', 'organic', 'sylhet', 'beverage'],
    details: {
      weight: '250g',
      origin: 'Sylhet, Bangladesh',
      shelfLife: '18 months',
      storage: 'Store in a cool, dry place',
    },
  },
  {
    id: '4',
    name: 'Bengali Silver Filigree Earrings',
    price: 2800,
    category: 'jewelry',
    image: 'https://images.pexels.com/photos/9953667/pexels-photo-9953667.jpeg',
    description: 'Handcrafted silver filigree earrings using traditional techniques. These elegant pieces showcase intricate details.',
    rating: 4.9,
    inStock: true,
    featured: true,
    tags: ['earrings', 'silver', 'filigree', 'handcrafted'],
    details: {
      material: '92.5% Silver',
      weight: '8g (pair)',
      origin: 'Dhaka, Bangladesh',
      careInstructions: 'Clean with silver polish cloth',
    },
  },
  {
    id: '5',
    name: 'Muslin Cotton Kurta',
    price: 1800,
    category: 'clothing',
    image: 'https://images.pexels.com/photos/2531734/pexels-photo-2531734.jpeg',
    description: 'Lightweight muslin cotton kurta with traditional embroidery. Perfect for summer wear.',
    rating: 4.3,
    inStock: true,
    discount: 15,
    tags: ['kurta', 'muslin', 'cotton', 'embroidery'],
    details: {
      material: 'Muslin Cotton',
      sizes: 'S, M, L, XL',
      origin: 'Dhaka, Bangladesh',
      careInstructions: 'Hand wash with mild detergent',
    },
  },
  {
    id: '6',
    name: 'Terracotta Pottery Set',
    price: 1200,
    category: 'handicrafts',
    image: 'https://images.pexels.com/photos/2162938/pexels-photo-2162938.jpeg',
    description: 'Handcrafted terracotta pottery set featuring traditional Bengali designs. Set includes 4 cups and a serving jug.',
    rating: 4.6,
    inStock: true,
    tags: ['pottery', 'terracotta', 'handcrafted', 'homeware'],
    details: {
      material: 'Terracotta clay',
      dimensions: 'Cups: 8cm x 7cm, Jug: 18cm x 12cm',
      origin: 'Rajshahi, Bangladesh',
      careInstructions: 'Hand wash only, not dishwasher safe',
    },
  },
  {
    id: '7',
    name: 'Premium Bangladeshi Honey',
    price: 850,
    category: 'food',
    image: 'https://images.pexels.com/photos/9137034/pexels-photo-9137034.jpeg',
    description: 'Pure, raw honey collected from the Sundarbans mangrove forest. Known for its distinctive flavor and medicinal properties.',
    rating: 4.7,
    inStock: true,
    featured: true,
    tags: ['honey', 'organic', 'sundarbans', 'natural'],
    details: {
      weight: '500g',
      origin: 'Sundarbans, Bangladesh',
      shelfLife: '24 months',
      storage: 'Store in a cool, dry place',
    },
  },
  {
    id: '8',
    name: 'Traditional Brass Bangle Set',
    price: 1600,
    category: 'jewelry',
    image: 'https://images.pexels.com/photos/13013639/pexels-photo-13013639.jpeg',
    description: 'Set of 6 handcrafted brass bangles with traditional Bengali patterns. Each piece is uniquely designed and polished to perfection.',
    rating: 4.5,
    inStock: true,
    tags: ['bangles', 'brass', 'handcrafted', 'traditional'],
    details: {
      material: 'Brass',
      dimensions: 'Inner diameter: 6.5cm',
      origin: 'Dhaka, Bangladesh',
      careInstructions: 'Clean with brass polish cloth',
    },
  },
  {
    id: '9',
    name: 'Silk Panjabi',
    price: 4500,
    category: 'clothing',
    image: 'https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg',
    description: 'Elegant silk panjabi with intricate embroidery. Perfect for special occasions and festivals.',
    rating: 4.8,
    inStock: true,
    discount: 10,
    tags: ['panjabi', 'silk', 'embroidery', 'formal'],
    details: {
      material: 'Silk',
      sizes: 'M, L, XL, XXL',
      origin: 'Dhaka, Bangladesh',
      careInstructions: 'Dry clean only',
    },
  },
  {
    id: '10',
    name: 'Bamboo Basket Set',
    price: 950,
    category: 'handicrafts',
    image: 'https://images.pexels.com/photos/4207790/pexels-photo-4207790.jpeg',
    description: 'Set of 3 handwoven bamboo baskets in different sizes. Perfect for storage or decoration.',
    rating: 4.4,
    inStock: true,
    tags: ['basket', 'bamboo', 'handwoven', 'homeware'],
    details: {
      material: 'Bamboo',
      dimensions: 'Small: 15cm, Medium: 20cm, Large: 25cm diameter',
      origin: 'Chittagong, Bangladesh',
      careInstructions: 'Wipe clean with damp cloth',
    },
  },
  {
    id: '11',
    name: 'Bangladeshi Spice Box',
    price: 1200,
    category: 'food',
    image: 'https://images.pexels.com/photos/4198714/pexels-photo-4198714.jpeg',
    description: 'Curated box of premium Bangladeshi spices including turmeric, cumin, coriander, cinnamon, and cardamom.',
    rating: 4.6,
    inStock: true,
    tags: ['spices', 'organic', 'cooking', 'gourmet'],
    details: {
      weight: '250g total (5 x 50g jars)',
      origin: 'Various regions, Bangladesh',
      shelfLife: '12 months',
      storage: 'Store in a cool, dry place',
    },
  },
  {
    id: '12',
    name: 'Traditional Silver Nose Pin',
    price: 1800,
    category: 'jewelry',
    image: 'https://images.pexels.com/photos/7543637/pexels-photo-7543637.jpeg',
    description: 'Handcrafted silver nose pin featuring intricate traditional design. A perfect accessory for special occasions.',
    rating: 4.7,
    inStock: true,
    tags: ['nose pin', 'silver', 'handcrafted', 'traditional'],
    details: {
      material: '92.5% Silver',
      weight: '1.5g',
      origin: 'Dhaka, Bangladesh',
      careInstructions: 'Clean with silver polish cloth',
    },
  },
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (product: Product, limit: number = 4): Product[] => {
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
};