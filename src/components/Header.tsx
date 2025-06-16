
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Car, Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="automotive-gradient p-2 rounded-lg">
              <Car className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="font-bold text-xl text-gray-900 font-montserrat">EV's Detail</span>
              <span className="text-sm text-gray-600 block leading-none font-roboto">& Buff</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 font-roboto ${
                  location.pathname === item.path
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Phone & Book Now */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+14072196915"
              className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors font-roboto"
            >
              <Phone className="h-4 w-4" />
              <span>(407) 219-6915</span>
            </a>
            <Button asChild className="btn-primary hover:opacity-90 transition-opacity font-roboto">
              <Link to="/book">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 text-sm font-medium transition-colors hover:text-blue-600 hover:bg-gray-50 font-roboto ${
                    location.pathname === item.path
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t mt-2 pt-2 px-4">
                <a
                  href="tel:+14072196915"
                  className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors py-2 font-roboto"
                >
                  <Phone className="h-4 w-4" />
                  <span>(407) 219-6915</span>
                </a>
                <Button asChild className="w-full mt-2 btn-primary font-roboto">
                  <Link to="/book" onClick={() => setIsMenuOpen(false)}>Book Now</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
