
import { ChevronRight, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="content-section fade-in-section">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block text-salon-pink font-medium mb-2">About Us</span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
            Exceptional Nail Care Experience
          </h2>
          <p className="text-salon-dark/80 mb-6">
            At TEGO NAIL SPA, we believe everyone deserves to look and feel their best. As licensed nail technicians specializing in nail art and treatments, 
            we're dedicated to creating styles that enhance your natural beauty while maintaining the health of your nails.
          </p>
          <p className="text-salon-dark/80 mb-8">
            Our salon offers a serene, welcoming environment where you can relax while we transform your look. We take pride in our attention to detail and commitment to client satisfaction.
          </p>
          <Link to="/about" className="inline-flex items-center text-salon-pink font-medium">
            Learn More About Us <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1607779097040-0a3d53e62105?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Nail technician at work"
            className="w-full h-auto rounded-lg shadow-xl"
          />
          <div className="absolute -bottom-6 -left-6 p-4 glass-card shadow-lg max-w-xs">
            <div className="flex items-center">
              <div className="bg-salon-pink rounded-full p-2 mr-3">
                <Award size={20} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-medium">Licensed Professionals</p>
                <p className="text-xs text-salon-dark/70">Certified Nail Technicians</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
