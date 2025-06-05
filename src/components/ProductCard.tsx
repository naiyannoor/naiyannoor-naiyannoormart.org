import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, name, price, image, rating, inStock, discount } = product;
  
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'BDT',
    minimumFractionDigits: 0,
  }).format(price);
  
  const discountedPrice = discount 
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'BDT',
        minimumFractionDigits: 0,
      }).format(price * (1 - discount / 100))
    : null;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="card group"
    >
      <div className="relative overflow-hidden">
        {discount && (
          <div className="absolute top-2 left-2 z-10 bg-bangla-red-900 text-white text-xs font-bold px-2 py-1 rounded">
            {discount}% OFF
          </div>
        )}
        
        {!inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
            <span className="text-white font-medium px-3 py-1 bg-gray-900 bg-opacity-75 rounded">
              Out of Stock
            </span>
          </div>
        )}
        
        <Link to={`/products/${id}`}>
          <img 
            src={image} 
            alt={name}
            className="w-full h-64 object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <button 
              className="p-2 bg-white rounded-full shadow-md hover:bg-bangla-green-50 transition-colors"
              aria-label="Add to cart"
              disabled={!inStock}
            >
              <ShoppingCart className="w-5 h-5 text-bangla-green-900" />
            </button>
            <button 
              className="p-2 bg-white rounded-full shadow-md hover:bg-bangla-red-50 transition-colors"
              aria-label="Add to wishlist"
            >
              <Heart className="w-5 h-5 text-bangla-red-900" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center mb-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({rating})</span>
        </div>
        
        <h3 className="font-medium text-gray-900 mb-1">
          <Link to={`/products/${id}`} className="hover:text-bangla-green-900 transition-colors">
            {name}
          </Link>
        </h3>
        
        <div className="flex items-center">
          {discount ? (
            <>
              <span className="font-bold text-bangla-red-900">{discountedPrice}</span>
              <span className="ml-2 text-sm text-gray-500 line-through">{formattedPrice}</span>
            </>
          ) : (
            <span className="font-bold text-gray-900">{formattedPrice}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;