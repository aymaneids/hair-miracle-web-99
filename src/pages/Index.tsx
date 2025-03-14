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
      title: "Braid Extensions",
      description: "Custom braiding styles designed to enhance your natural beauty while protecting your hair.",
      icon: <Scissors size={20} />,
      link: "/services",
      imageSrc: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Hair Extensions",
      description: "Premium quality hair extensions that blend seamlessly with your natural hair.",
      icon: <Heart size={20} />,
      link: "/services",
      imageSrc: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Nail Glam",
      description: "Exquisite nail treatments to complement your stunning hairstyle.",
      icon: <Award size={20} />,
      link: "/services",
      imageSrc: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Hair Classes",
      description: "Learn professional hair techniques from our experienced stylists.",
      icon: <FileText size={20} />,
      link: "/services",
      imageSrc: "https://images.unsplash.com/photo-1516914589923-f105f1535f88?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  const testimonials = [
    {
      name: "Alexandra S.",
      quote: "The Hair Messiah transformed my look completely! My braids were perfect and lasted much longer than I expected. Best salon experience I've ever had.",
      rating: 5
    },
    {
      name: "Michelle T.",
      quote: "I've been to many stylists, but no one understands my hair like The Hair Messiah. Professional, attentive, and truly talented!",
      rating: 5
    },
    {
      name: "Jasmine R.",
      quote: "My extensions look so natural that even my close friends couldn't tell! Absolutely worth every penny.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
          <img
            src="https://img.freepik.com/premium-photo/woman-with-sleek-straight-hair-parted-middle-posing-against-minimalist-background-highlight-simplicity-elegance-her-style_1229213-60889.jpg"
            alt="Beautiful sleek hairstyle"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-2xl">
            <span className="inline-block text-white/80 text-sm font-medium px-3 py-1 border border-white/20 rounded-full mb-4 backdrop-blur-sm bg-white/10 animate-fade-in">
              Licensed Cosmetologist in Forest Park, IL
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              The Hair Messiah, LLC
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Elevate Your Hair Experience with Expert Braiding and Extensions
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <a
                href="https://thehairmessiahllc.as.me"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book Appointment
              </a>
              <Link to="/services" className="btn-secondary bg-white/20 text-white border-white/40 hover:bg-white/30">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Rest of the sections */}
      {/* About Section */}
      <section className="content-section fade-in-section">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-salon-pink font-medium mb-2">About Us</span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
              Divine Hair Transformations
            </h2>
            <p className="text-salon-dark/80 mb-6">
              At The Hair Messiah, LLC, we believe everyone deserves to look and feel divine. As a licensed cosmetologist specializing in braids and hair extensions, 
              we're dedicated to creating styles that enhance your natural beauty while maintaining the health of your hair.
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
              src="https://images.unsplash.com/photo-1630149462311-cbc8b1f8194b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Hair stylist at work"
              className="w-full h-auto rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 p-4 glass-card shadow-lg max-w-xs">
              <div className="flex items-center">
                <div className="bg-salon-pink rounded-full p-2 mr-3">
                  <Award size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium">Licensed Professional</p>
                  <p className="text-xs text-salon-dark/70">Certified Cosmetologist</p>
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
              Exceptional Hair Services
            </h2>
            <p className="text-salon-dark/80 max-w-2xl mx-auto">
              We offer a wide range of premium hair services designed to meet your unique style preferences and needs.
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
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <div key={num} className="relative overflow-hidden rounded-lg aspect-square group">
              <img
                src={`https://source.unsplash.com/random/300x300?hair,braids&sig=${num}`}
                alt={`Gallery image ${num}`}
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
            src="https://images.unsplash.com/photo-1590383324653-38b1f99d9a8f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Beautiful hairstyle"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-white mb-6">
            Ready for Your Hair Transformation?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Book your appointment today and experience the divine difference with The Hair Messiah, LLC.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://thehairmessiahllc.as.me"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Calendar size={18} className="mr-2" />
              Book Appointment
            </a>
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
