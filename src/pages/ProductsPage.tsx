import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, Search, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { Product, SortOption } from '../types';
import { products, categories } from '../data/products';

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter and sort products
  useEffect(() => {
    let result = [...products];
    
    // Apply category filter
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Apply price range filter
    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Apply search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(query) || 
          product.description.toLowerCase().includes(query)
      );
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'popular':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
      default:
        // Assuming id correlates with newness in this mock data
        result.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, sortBy, priceRange, searchQuery]);
  
  // Set initial category from URL parameter
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  // Handle price range change
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = parseInt(e.target.value);
    const newRange = [...priceRange] as [number, number];
    newRange[index] = value;
    setPriceRange(newRange);
  };

  // Toggle mobile filters
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="py-8"
    >
      <div className="container-custom">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Products</h1>
          <p className="text-gray-600">
            Discover our collection of authentic Bangladeshi products
          </p>
        </div>
        
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-4">
          <button 
            onClick={toggleFilters}
            className="w-full flex items-center justify-between p-3 bg-white border border-gray-300 rounded-md shadow-sm"
          >
            <span className="font-medium">Filters & Sorting</span>
            <SlidersHorizontal className="h-5 w-5 text-gray-500" />
          </button>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div 
            className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden'} lg:block`}
          >
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 sticky top-24">
              {/* Search */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-bangla-green-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>
              
              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Categories</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="all-categories"
                      checked={!selectedCategory}
                      onChange={() => setSelectedCategory(null)}
                      className="w-4 h-4 text-bangla-green-900 focus:ring-bangla-green-500 border-gray-300"
                    />
                    <label htmlFor="all-categories" className="ml-2 text-gray-700">
                      All Categories
                    </label>
                  </div>
                  
                  {categories.map(category => (
                    <div key={category.id} className="flex items-center">
                      <input
                        type="radio"
                        id={category.id}
                        checked={selectedCategory === category.id}
                        onChange={() => setSelectedCategory(category.id)}
                        className="w-4 h-4 text-bangla-green-900 focus:ring-bangla-green-500 border-gray-300"
                      />
                      <label htmlFor={category.id} className="ml-2 text-gray-700">
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Price Range */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Price Range</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="min-price" className="block text-sm text-gray-600 mb-1">
                      Min Price: ৳{priceRange[0]}
                    </label>
                    <input
                      type="range"
                      id="min-price"
                      min="0"
                      max="5000"
                      step="100"
                      value={priceRange[0]}
                      onChange={e => handlePriceChange(e, 0)}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <div>
                    <label htmlFor="max-price" className="block text-sm text-gray-600 mb-1">
                      Max Price: ৳{priceRange[1]}
                    </label>
                    <input
                      type="range"
                      id="max-price"
                      min="0"
                      max="15000"
                      step="100"
                      value={priceRange[1]}
                      onChange={e => handlePriceChange(e, 1)}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              
              {/* Sort By (Mobile Only) */}
              <div className="mb-6 lg:hidden">
                <h3 className="text-lg font-semibold mb-3">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value as SortOption)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-bangla-green-500 focus:border-transparent"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="popular">Most Popular</option>
                </select>
              </div>
              
              {/* Apply/Reset Buttons (Mobile Only) */}
              <div className="flex gap-3 lg:hidden">
                <button
                  onClick={() => {
                    setPriceRange([0, 5000]);
                    setSelectedCategory(null);
                    setSearchQuery('');
                    setSortBy('newest');
                  }}
                  className="flex-1 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Reset
                </button>
                <button
                  onClick={() => setShowFilters(false)}
                  className="flex-1 py-2 bg-bangla-green-900 text-white rounded-md hover:bg-bangla-green-800"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Sort and Results Count (Desktop) */}
            <div className="hidden lg:flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing <span className="font-medium">{filteredProducts.length}</span> products
              </p>
              
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value as SortOption)}
                  className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-bangla-green-500 focus:border-transparent"
                >
                  <option value="newest">Sort by: Newest</option>
                  <option value="price-low">Sort by: Price Low to High</option>
                  <option value="price-high">Sort by: Price High to Low</option>
                  <option value="popular">Sort by: Most Popular</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
            
            {/* Products */}
            {filteredProducts.length > 0 ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-12">
                <img 
                  src="https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg" 
                  alt="No products found" 
                  className="w-48 h-48 mx-auto mb-4 rounded-full object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-gray-600">
                  Try adjusting your filters or search query
                </p>
                <button
                  onClick={() => {
                    setPriceRange([0, 5000]);
                    setSelectedCategory(null);
                    setSearchQuery('');
                    setSortBy('newest');
                  }}
                  className="mt-4 py-2 px-4 bg-bangla-green-900 text-white rounded-md hover:bg-bangla-green-800"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductsPage;