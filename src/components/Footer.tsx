import { Link } from 'react-router-dom';
import { Store, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <Store className="w-8 h-8 text-bangla-gold-500" />
              <span className="text-xl font-bold font-display text-white">
                NaiyanNoor<span className="text-bangla-red-500">Mart</span>
              </span>
            </Link>
            <p className="mt-4 text-gray-400">
              Bringing authentic Bangladeshi products to your doorstep. Discover the rich culture 
              and craftsmanship of Bangladesh through our carefully curated collection.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-bangla-gold-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-bangla-gold-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-bangla-gold-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-bangla-gold-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-bangla-gold-500 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-bangla-gold-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-bangla-gold-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-bangla-gold-500 transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=clothing" className="text-gray-400 hover:text-bangla-gold-500 transition-colors">
                  Traditional Clothing
                </Link>
              </li>
              <li>
                <Link to="/products?category=handicrafts" className="text-gray-400 hover:text-bangla-gold-500 transition-colors">
                  Handicrafts
                </Link>
              </li>
              <li>
                <Link to="/products?category=food" className="text-gray-400 hover:text-bangla-gold-500 transition-colors">
                  Food & Spices
                </Link>
              </li>
              <li>
                <Link to="/products?category=jewelry" className="text-gray-400 hover:text-bangla-gold-500 transition-colors">
                  Traditional Jewelry
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-bangla-gold-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">13 Words Maltinogor, Bogura 5800, Bangladesh</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-bangla-gold-500 flex-shrink-0" />
                <span className="text-gray-400">+880 1234-567890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-bangla-gold-500 flex-shrink-0" />
                <span className="text-gray-400">info@naiyannoormart.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-800 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; {currentYear} NaiyanNoorMart. All rights reserved
            </p>
            <div className="mt-4 sm:mt-0">
              <img 
                src="https://images.pexels.com/photos/6863337/pexels-photo-6863337.jpeg" 
                alt="Payment Methods" 
                className="h-8 w-auto rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;