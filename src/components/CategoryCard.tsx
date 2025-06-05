import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const { id, name, image, productCount } = category;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden rounded-lg shadow-sm group"
    >
      <Link to={`/products?category=${id}`}>
        <div className="relative aspect-square">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
            <div className="absolute bottom-0 left-0 p-4 w-full">
              <h3 className="text-xl font-semibold text-white mb-1">{name}</h3>
              <p className="text-sm text-white/80">{productCount} Products</p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;