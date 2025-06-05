import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CategoryCard from './CategoryCard';
import { Category } from '../types';
import { categories } from '../data/products';

const Categories = () => {
  const [allCategories, setAllCategories] = useState<Category[]>([]);

  useEffect(() => {
    // In a real app, this would be an API call
    setAllCategories(categories);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our diverse collection of authentic Bangladeshi products, carefully organized 
            to help you discover the perfect treasures.
          </p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {allCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;