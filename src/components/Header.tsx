import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, User, Store } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Store className="w-8 h-8 text-bangla-green-900" />
            <span className="text-xl font-bold font-display text-bangla-green-900">
              NaiyanNoor<span className="text-bangla-red-900">Mart</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-bangla-green-900 ${
                  isActive ? 'text-bangla-green-900' : 'text-gray-700'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-bangla-green-900 ${
                  isActive ? 'text-bangla-green-900' : 'text-gray-700'
                }`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-bangla-green-900 ${
                  isActive ? 'text-bangla-green-900' : 'text-gray-700'
                }`
              }
            >
              About
            </NavLink>
          </nav>

          {/* Header Actions */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleSearch}
              className="p-2 text-gray-700 transition-colors rounded-full hover:bg-gray-100 hover:text-bangla-green-900"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-gray-700 transition-colors rounded-full hover:bg-gray-100 hover:text-bangla-green-900"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </button>
            <button
              className="relative p-2 text-gray-700 transition-colors rounded-full hover:bg-gray-100 hover:text-bangla-green-900"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs text-white rounded-full bg-bangla-red-900">
                0
              </span>
            </button>
            <button
              onClick={toggleMobileMenu}
              className="p-2 md:hidden text-gray-700 transition-colors rounded-full hover:bg-gray-100"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-full bg-white shadow-md py-4"
          >
            <div className="container-custom">
              <div className="relative flex items-center">
                <Search className="absolute left-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full py-2 pl-10 pr-4 text-gray-900 placeholder-gray-500 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-bangla-green-500 focus:border-transparent"
                  autoFocus
                />
                <button
                  onClick={toggleSearch}
                  className="absolute right-3 p-1 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md"
          >
            <nav className="container-custom py-4 flex flex-col space-y-4">
              <NavLink
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium px-2 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'bg-bangla-green-50 text-bangla-green-900'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-bangla-green-900'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium px-2 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'bg-bangla-green-50 text-bangla-green-900'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-bangla-green-900'
                  }`
                }
              >
                Products
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium px-2 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'bg-bangla-green-50 text-bangla-green-900'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-bangla-green-900'
                  }`
                }
              >
                About
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;