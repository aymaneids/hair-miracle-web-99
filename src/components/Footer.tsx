
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-salon-light border-t border-salon-pink/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-bold text-salon-dark mb-4">
              The Hair <span className="text-salon-pink">Messiah</span>
            </h3>
            <p className="text-sm text-salon-dark/80 mb-6 max-w-xs">
              Expert hair braiding and extension services for those who seek the divine in beauty.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/iamthehairmessiah" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-salon-dark hover:text-salon-pink transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-salon-dark/80 hover:text-salon-pink transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-salon-dark/80 hover:text-salon-pink transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-salon-dark/80 hover:text-salon-pink transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-salon-dark/80 hover:text-salon-pink transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-salon-dark/80 hover:text-salon-pink transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a 
                  href="https://thehairmessiahllc.as.me" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-salon-dark/80 hover:text-salon-pink transition-colors"
                >
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-medium text-lg mb-4">Contact Information</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-salon-pink flex-shrink-0 mt-0.5" />
                <span className="text-sm text-salon-dark/80">Forest Park, IL 60130</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-2 text-salon-pink flex-shrink-0 mt-0.5" />
                <a href="tel:+1234567890" className="text-sm text-salon-dark/80 hover:text-salon-pink transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 text-salon-pink flex-shrink-0 mt-0.5" />
                <a href="mailto:contact@thehairmessiah.com" className="text-sm text-salon-dark/80 hover:text-salon-pink transition-colors">
                  contact@thehairmessiah.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 text-salon-pink flex-shrink-0 mt-0.5" />
                <div className="text-sm text-salon-dark/80">
                  <div>Mon-Fri: 9am - 7pm</div>
                  <div>Sat: 9am - 5pm</div>
                  <div>Sun: Closed</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-salon-pink/10">
          <p className="text-sm text-center text-salon-dark/60">
            © {currentYear} The Hair Messiah, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
