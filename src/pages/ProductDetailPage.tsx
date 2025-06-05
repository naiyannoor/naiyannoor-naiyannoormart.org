import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ShoppingCart, Heart, Share2, Star, Check, ShieldCheck, ArrowLeft } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';
import { getProductById, getRelatedProducts } from '../data/products';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    if (id) {
      // In a real app, this would be an API call
      const foundProduct = getProductById(id);
      if (foundProduct) {
        setProduct(foundProduct);
        const related = getRelatedProducts(foundProduct);
        setRelatedProducts(related);
      }
    }
    
    // Reset state when product changes
    setQuantity(1);
    setIsAddedToCart(false);
    
    // Scroll to top when product changes
    window.scrollTo(0, 0);
  }, [id]);

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
    // In a real app, this would add the product to the cart
  };

  const toggleWishlist = () => {
    setIsInWishlist(!isInWishlist);
    // In a real app, this would toggle the product in the wishlist
  };

  const formattedPrice = product ? new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'BDT',
    minimumFractionDigits: 0,
  }).format(product.price) : '';

  const discountedPrice = product?.discount 
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'BDT',
        minimumFractionDigits: 0,
      }).format(product.price * (1 - product.discount / 100))
    : null;

  if (!product) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Product not found</h2>
        <Link to="/products" className="text-bangla-green-900 hover:underline">
          <ArrowLeft className="inline mr-2 h-4 w-4" />
          Back to products
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="py-8"
    >
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="flex mb-6 text-sm">
          <Link to="/" className="text-gray-500 hover:text-bangla-green-900">Home</Link>
          <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
          <Link to="/products" className="text-gray-500 hover:text-bangla-green-900">Products</Link>
          <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
          <span className="text-gray-900">{product.name}</span>
        </nav>
        
        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Product Image */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img 
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">{product.rating} ({Math.floor(product.rating * 10)} reviews)</span>
            </div>
            
            {/* Price */}
            <div className="mb-6">
              {product.discount ? (
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-bangla-red-900 mr-2">{discountedPrice}</span>
                  <span className="text-lg text-gray-500 line-through">{formattedPrice}</span>
                  <span className="ml-2 bg-bangla-red-100 text-bangla-red-900 text-sm font-medium px-2 py-0.5 rounded">
                    {product.discount}% OFF
                  </span>
                </div>
              ) : (
                <span className="text-2xl font-bold text-gray-900">{formattedPrice}</span>
              )}
            </div>
            
            {/* Description */}
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            {/* Details */}
            {product.details && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Product Details</h3>
                <ul className="space-y-2">
                  {Object.entries(product.details).map(([key, value]) => (
                    <li key={key} className="flex">
                      <span className="font-medium min-w-32 text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                      <span className="text-gray-600">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Stock Status */}
            <div className="flex items-center mb-6">
              {product.inStock ? (
                <div className="flex items-center text-green-600">
                  <Check className="h-5 w-5 mr-1" />
                  <span>In Stock</span>
                </div>
              ) : (
                <div className="text-red-600">Out of Stock</div>
              )}
            </div>
            
            {/* Quantity Selector */}
            {product.inStock && (
              <div className="mb-6">
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 border border-gray-300 rounded-l-md hover:bg-gray-100"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 p-2 text-center border-y border-gray-300 focus:outline-none"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 border border-gray-300 rounded-r-md hover:bg-gray-100"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>
            )}
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`btn ${
                  isAddedToCart 
                    ? 'bg-green-600 hover:bg-green-700 focus:ring-green-500' 
                    : product.inStock 
                      ? 'btn-primary' 
                      : 'bg-gray-300 cursor-not-allowed'
                } flex-1 py-3`}
              >
                {isAddedToCart ? (
                  <>
                    <Check className="mr-2 h-5 w-5" />
                    Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </>
                )}
              </button>
              <button
                onClick={toggleWishlist}
                className={`btn ${
                  isInWishlist 
                    ? 'bg-bangla-red-900 text-white hover:bg-bangla-red-800 focus:ring-bangla-red-500' 
                    : 'btn-outline'
                } py-3`}
              >
                <Heart className={`mr-2 h-5 w-5 ${isInWishlist ? 'fill-current' : ''}`} />
                {isInWishlist ? 'Added to Wishlist' : 'Add to Wishlist'}
              </button>
            </div>
            
            {/* Shipping & Returns */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex items-start mb-3">
                <ShieldCheck className="h-5 w-5 text-bangla-green-900 mr-2 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900">Secure Payment</h4>
                  <p className="text-sm text-gray-600">Multiple secure payment options available</p>
                </div>
              </div>
              <div className="flex items-start">
                <ShieldCheck className="h-5 w-5 text-bangla-green-900 mr-2 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900">30-Day Returns</h4>
                  <p className="text-sm text-gray-600">Shop with confidence with our 30-day return policy</p>
                </div>
              </div>
            </div>
            
            {/* Share */}
            <div className="mt-6 flex items-center">
              <span className="text-gray-700 mr-3">Share:</span>
              <div className="flex space-x-2">
                <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </motion.div>
  );
};

export default ProductDetailPage;