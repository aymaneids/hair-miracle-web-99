
import { Link } from 'react-router-dom';
import { Scissors, Heart, Calendar, FileText, Award } from 'lucide-react';
import ServiceCard from '../ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      title: "Nail Services",
      description: "Premium quality nail services including no chip, dip, and gel manicures.",
      icon: <Scissors size={20} />,
      link: "/services",
      imageSrc: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Nail Art",
      description: "Creative and custom nail art designs to express your unique style.",
      icon: <Heart size={20} />,
      link: "/services",
      imageSrc: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Acrylics",
      description: "Professional acrylic nail extensions for length and durability.",
      icon: <Award size={20} />,
      link: "/services",
      imageSrc: "https://images.unsplash.com/photo-1632344004476-3ceec8315d1c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Pedicures",
      description: "Relaxing and rejuvenating pedicure treatments for healthy feet.",
      icon: <FileText size={20} />,
      link: "/services",
      imageSrc: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  return (
    <section className="bg-salon-light py-16 md:py-24 fade-in-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-salon-pink font-medium mb-2">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
            Exceptional Nail Services
          </h2>
          <p className="text-salon-dark/80 max-w-2xl mx-auto">
            We offer a wide range of premium nail services designed to meet your unique style preferences and needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
