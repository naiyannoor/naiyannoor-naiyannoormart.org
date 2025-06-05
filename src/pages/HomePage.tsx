import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import Testimonials from '../components/Testimonials';
import { ChevronRight, Award, TruckIcon, Shield, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <Categories />
      
      {/* Benefits Section */}
      <section className="py-16 bg-bangla-gold-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose NaiyanNoorMart</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We take pride in offering authentic Bangladeshi products with exceptional service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-md flex items-center justify-center">
                <Award className="w-8 h-8 text-bangla-green-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Authentic Products</h3>
              <p className="text-gray-600">
                All products are sourced directly from artisans and trusted suppliers in Bangladesh
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-md flex items-center justify-center">
                <TruckIcon className="w-8 h-8 text-bangla-green-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Reliable shipping partners ensure your products reach you safely and on time
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-md flex items-center justify-center">
                <Shield className="w-8 h-8 text-bangla-green-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-600">
                Multiple secure payment options to ensure safe and hassle-free transactions
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-md flex items-center justify-center">
                <HeartHandshake className="w-8 h-8 text-bangla-green-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fair Trade</h3>
              <p className="text-gray-600">
                We ensure artisans and producers receive fair compensation for their craftsmanship
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedProducts />
      
      {/* Banner Section */}
      <section className="py-16 bg-bangla-red-900 relative overflow-hidden">
        <div className="absolute inset-0 mix-blend-multiply opacity-20">
          <img 
            src="https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg" 
            alt="Traditional Bangladeshi Pattern" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Experience the Rich Culture of Bangladesh
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Our products tell stories of traditions passed down through generations. Each purchase supports 
              local artisans and helps preserve Bangladesh's cultural heritage.
            </p>
            <Link 
              to="/products" 
              className="btn bg-white text-bangla-red-900 hover:bg-gray-100 focus:ring-white px-8 py-3"
            >
              Explore Collection
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      
      <Testimonials />
      
      {/* Newsletter Section */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to receive updates on new products, special offers, and Bangladeshi cultural insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-bangla-green-500 focus:border-transparent"
              />
              <button className="btn btn-primary py-3 px-6 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;