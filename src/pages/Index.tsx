
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Heart, Calendar, FileText, Award, ChevronRight, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.fade-in-section');
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).getBoundingClientRect().top;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const screenHeight = window.innerHeight;
        
        // If section is in viewport
        if (sectionTop < screenHeight - sectionHeight / 3) {
          section.classList.add('is-visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  const testimonials = [
    {
      name: "Alexandra S.",
      quote: "TEGO NAIL SPA provides the best nail services in Chicago! I love the attention to detail and the friendly staff.",
      rating: 5
    },
    {
      name: "Michelle T.",
      quote: "I've tried many nail salons, but no one understands nail art like TEGO. Professional, attentive, and truly talented!",
      rating: 5
    },
    {
      name: "Jasmine R.",
      quote: "The acrylic nail extensions I got at TEGO lasted longer than any other salon. Absolutely worth every penny!",
      rating: 5
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1632344004476-3ceec8315d1c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1621799754526-a0d52c49fad5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1600428853876-fb5a850b444f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Beautiful nail art"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-2xl">
            <span className="inline-block text-white/80 text-sm font-medium px-3 py-1 border border-white/20 rounded-full mb-4 backdrop-blur-sm bg-white/10 animate-fade-in">
              Professional Nail Salon in Chicago, IL
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              TEGO NAIL SPA
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Beauté, cosmétique et soins. No chip, dip, nail art, acrylics, and manicure & pedicure services💅
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Link
                to="/book-now"
                className="btn-primary"
              >
                Book Appointment
              </Link>
              <Link to="/services" className="btn-secondary bg-white/20 text-white border-white/40 hover:bg-white/30">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
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
      
      {/* Services Section */}
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
      
      {/* Gallery Preview */}
      <section className="content-section fade-in-section">
        <div className="text-center mb-16">
          <span className="inline-block text-salon-pink font-medium mb-2">Our Gallery</span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
            Our Beautiful Work
          </h2>
          <p className="text-salon-dark/80 max-w-2xl mx-auto">
            Browse through our gallery to see the transformations we've created for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg aspect-square group">
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/gallery" className="btn-secondary">
            View Full Gallery
          </Link>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="bg-salon-light py-16 md:py-24 fade-in-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-salon-pink font-medium mb-2">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
              What Our Clients Say
            </h2>
            <p className="text-salon-dark/80 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                quote={testimonial.quote}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-16 md:py-24 fade-in-section">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Beautiful nail art"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-white mb-6">
            Ready for Your Nail Transformation?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Book your appointment today and experience the excellence of TEGO NAIL SPA.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/book-now"
              className="btn-primary"
            >
              <Calendar size={18} className="mr-2" />
              Book Appointment
            </Link>
            <Link to="/contact" className="btn-secondary bg-white/20 text-white border-white/40 hover:bg-white/30">
              <MapPin size={18} className="mr-2" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
