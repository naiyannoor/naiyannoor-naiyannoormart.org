import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <section className="relative bg-bangla-green-900 py-20">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/3618162/pexels-photo-3618162.jpeg" 
            alt="Bangladesh Landscape" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About NaiyanNoorMart</h1>
          <p className="text-bangla-green-100 text-lg max-w-2xl mx-auto">
            Connecting artisans of Bangladesh with the global community
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-gray-600 mb-4">
                BanglaMart was founded in 2018 with a simple mission: to showcase the extraordinary craftsmanship of 
                Bangladeshi artisans to the world while ensuring they receive fair compensation for their work.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey began when our founder, Tasnim Rahman, returned to Bangladesh after studying abroad and 
                was struck by the immense talent of local artisans who struggled to reach markets beyond their local communities.
              </p>
              <p className="text-gray-600">
                What started as a small initiative with a handful of artisans has grown into a platform that now 
                supports over 200 artisans and small businesses across Bangladesh, bringing their exceptional 
                creations to customers worldwide.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/7543638/pexels-photo-7543638.jpeg" 
                alt="Bangladeshi Artisan" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-bangla-gold-500 p-4 rounded-lg shadow-lg hidden md:block">
                <p className="text-lg font-semibold text-gray-900">Supporting 200+ artisans</p>
                <p className="text-sm text-gray-800">Across all regions of Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
            <p className="text-gray-600 text-lg">
              At BanglaMart, we're committed to preserving Bangladesh's rich cultural heritage while 
              creating sustainable economic opportunities for artisans and small businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-bangla-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-bangla-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Preserving Culture</h3>
              <p className="text-gray-600">
                We showcase traditional crafts and techniques that have been passed down through generations, 
                helping to preserve Bangladesh's rich cultural heritage.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-bangla-gold-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-bangla-gold-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Fair Compensation</h3>
              <p className="text-gray-600">
                We ensure artisans receive fair payment for their work, creating sustainable income 
                opportunities and improving livelihoods in rural communities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-bangla-red-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-bangla-red-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Global Connections</h3>
              <p className="text-gray-600">
                We connect Bangladeshi artisans with customers worldwide, introducing global audiences 
                to the beauty and quality of Bengali craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative mb-4 inline-block">
                <img 
                  src="https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg" 
                  alt="Tasnim Rahman" 
                  className="w-48 h-48 rounded-full object-cover mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Tasnim Rahman</h3>
              <p className="text-bangla-green-900 mb-3">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Passionate about preserving Bangladeshi cultural heritage and creating opportunities for artisans.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-4 inline-block">
                <img 
                  src="https://images.pexels.com/photos/8090137/pexels-photo-8090137.jpeg" 
                  alt="Rafiq Islam" 
                  className="w-48 h-48 rounded-full object-cover mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Rafiq Islam</h3>
              <p className="text-bangla-green-900 mb-3">Head of Operations</p>
              <p className="text-gray-600 text-sm">
                Oversees our partnerships with artisans and ensures smooth operations across all regions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-4 inline-block">
                <img 
                  src="https://images.pexels.com/photos/5717632/pexels-photo-5717632.jpeg" 
                  alt="Nusrat Jahan" 
                  className="w-48 h-48 rounded-full object-cover mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Nusrat Jahan</h3>
              <p className="text-bangla-green-900 mb-3">Creative Director</p>
              <p className="text-gray-600 text-sm">
                Works directly with artisans to develop new product lines while preserving traditional techniques.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-4 inline-block">
                <img 
                  src="https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg" 
                  alt="Arif Khan" 
                  className="w-48 h-48 rounded-full object-cover mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Arif Khan</h3>
              <p className="text-bangla-green-900 mb-3">Marketing Lead</p>
              <p className="text-gray-600 text-sm">
                Leads our efforts to share Bangladeshi craftsmanship with global audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Us</h2>
              <p className="text-gray-600 mb-8">
                Have questions, suggestions, or want to collaborate? We'd love to hear from you! 
                Fill out the form or use our contact information below.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-bangla-green-900 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Visit Us</h3>
                    <p className="text-gray-600">123 Gulshan Avenue, Dhaka 1212, Bangladesh</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-bangla-green-900 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">info@banglamart.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-bangla-green-900 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">+880 1234-567890</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Business Hours</h3>
                <div className="space-y-1 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-gray-900">Send Us a Message</h3>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-bangla-green-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-bangla-green-500 focus:border-transparent"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-bangla-green-500 focus:border-transparent"
                    placeholder="Subject of your message"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-bangla-green-500 focus:border-transparent"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary py-3 px-6 w-full sm:w-auto"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-bangla-red-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Experience Authentic Bangladeshi Products</h2>
          <p className="text-bangla-red-100 mb-8 max-w-2xl mx-auto">
            Explore our collection of handcrafted treasures and bring a piece of Bangladeshi culture into your home.
          </p>
          <Link
            to="/products"
            className="btn bg-white text-bangla-red-900 hover:bg-gray-100 focus:ring-white px-8 py-3"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;