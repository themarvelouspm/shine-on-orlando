
import { Link } from 'react-router-dom';
import { Car, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="automotive-gradient p-2 rounded-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-xl">EV's Detail & Buff</span>
                <p className="text-sm text-gray-400">Orlando's Premier Mobile Auto Detailing</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-md">
              We bring professional auto detailing services directly to you. 
              Fully mobile with water and power, eco-friendly products, and 5-star rated service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/book" className="text-gray-400 hover:text-white transition-colors">Book Now</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="tel:+14072196915" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
                <span>(407) 219-6915</span>
              </a>
              <a href="mailto:evsdetailservices@gmail.com" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
                <span>evsdetailservices@gmail.com</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>Orlando, FL & Surrounding Areas</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 EV's Detail & Buff. All rights reserved. Professional & Insured.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
