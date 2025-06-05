import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1231365/pexels-photo-1231365.jpeg"
          alt="Traditional Bangladeshi Crafts"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Discover Authentic 
              <span className="text-bangla-gold-500"> Bangladeshi </span> 
              Treasures
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Explore our collection of handcrafted products from skilled artisans across Bangladesh. 
              From traditional clothing to exquisite handicrafts, we bring the best of Bengali 
              culture to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="btn btn-primary px-8 py-3"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="btn btn-outline border-white text-white hover:bg-white/10 focus:ring-white px-8 py-3"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;