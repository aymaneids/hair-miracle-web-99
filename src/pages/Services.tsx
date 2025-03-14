
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Scissors, Heart, Award, FileText, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const mainServices = [
    {
      id: "braids",
      title: "Braid Extensions",
      description: "Our stunning braid extensions are designed to protect your natural hair while giving you a gorgeous, low-maintenance style that lasts.",
      icon: <Scissors size={24} />,
      image: "https://images.unsplash.com/photo-1621784563330-caee0b138a00?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
      styles: [
        {
          name: "Lemonade Braids",
          description: "Side-swept cornrows inspired by Beyoncé's iconic 'Lemonade' album look.",
          image: "https://images.unsplash.com/photo-1595944024804-5f64b8623d3e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3"
        },
        {
          name: "Feedin Ponytail",
          description: "Sleek, high-ponytail style with braided extensions for extra length and volume.",
          image: "https://images.unsplash.com/photo-1612113568411-6b578aa01781?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3"
        },
        {
          name: "French Braids",
          description: "Elegant, timeless braids that start at the crown and work down the head.",
          image: "https://images.unsplash.com/photo-1583244532610-2a234e7c3eca?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3"
        },
        {
          name: "Fulani Braids",
          description: "Beautiful pattern inspired by Fulani culture, featuring a combination of cornrows and loose braids.",
          image: "https://images.unsplash.com/photo-1622601802957-1852708af784?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3"
        },
        {
          name: "Tribal Braids",
          description: "Thick, statement-making braids with decorative elements and unique patterns.",
          image: "https://images.unsplash.com/photo-1595944024804-5f64b8623d3e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3"
        },
        {
          name: "Senegalese Twists",
          description: "Rope-like twists that provide versatile styling options and protection.",
          image: "https://images.unsplash.com/photo-1596858305288-58e3a7d41561?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3"
        }
      ]
    },
    {
      id: "extensions",
      title: "Hair Extensions",
      description: "Transform your look with our premium quality hair extensions, expertly applied to blend seamlessly with your natural hair.",
      icon: <Heart size={24} />,
      image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3",
      styles: [
        {
          name: "Human Knotless",
          description: "The most natural-looking braids using human hair with a special knotless technique for comfort.",
          image: "https://images.unsplash.com/photo-1595944024804-5f64b8623d3e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3"
        },
        {
          name: "Sew-In Extensions",
          description: "Long-lasting extensions sewn into cornrows for a natural look and feel.",
          image: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3"
        },
        {
          name: "Tape-In Extensions",
          description: "Quick application extensions that lie flat against the head for a natural appearance.",
          image: "https://images.unsplash.com/photo-1560869713-7d0a29674437?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3"
        }
      ]
    },
    {
      id: "nails",
      title: "Nail Glam",
      description: "Complete your look with our exquisite nail services, from classic manicures to intricate nail art designs.",
      icon: <Award size={24} />,
      image: "https://images.unsplash.com/photo-1457972851104-4fd469440bf9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
      styles: [
        {
          name: "Manicures",
          description: "Classic nail care for beautifully groomed nails.",
          image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3"
        },
        {
          name: "Gel Polish",
          description: "Long-lasting, chip-resistant polish that maintains high shine.",
          image: "https://images.unsplash.com/photo-1632344004476-3ceec8315d1c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3"
        },
        {
          name: "Nail Art",
          description: "Custom designs to express your personal style.",
          image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3"
        }
      ]
    },
    {
      id: "classes",
      title: "Hair Classes",
      description: "Learn professional hair techniques in our specialized classes, from basic styling to advanced braiding methods.",
      icon: <FileText size={24} />,
      image: "https://images.unsplash.com/photo-1470259078422-826894b933aa?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3",
      styles: [
        {
          name: "Braiding Basics",
          description: "Learn fundamentals of different braiding techniques.",
          image: "https://images.unsplash.com/photo-1522337094846-8a818192de1f?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3"
        },
        {
          name: "Advanced Extension Techniques",
          description: "Master the art of seamless hair extensions.",
          image: "https://images.unsplash.com/photo-1580618864180-f6d7d39b8ff6?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3"
        },
        {
          name: "Hair Maintenance Workshop",
          description: "Learn how to care for and maintain various hairstyles.",
          image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-salon-dark/70 to-salon-dark/40 z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Salon interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6 animate-fade-in">
              Our Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Discover our range of premium hair and beauty services
            </p>
          </div>
        </section>
        
        {/* Services Overview */}
        <section className="content-section">
          <div className="text-center mb-16">
            <span className="inline-block text-salon-pink font-medium mb-2">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
              Expert Hair & Beauty Services
            </h2>
            <p className="text-salon-dark/80 max-w-2xl mx-auto">
              At The Hair Messiah, we provide a comprehensive range of services to enhance your natural beauty and keep you looking your best.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {mainServices.map((service, index) => (
              <div 
                key={service.id}
                className="glass-card overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-salon-light text-salon-pink mr-3">
                      {service.icon}
                    </div>
                    <h3 className="font-serif text-2xl font-medium">{service.title}</h3>
                  </div>
                  <p className="text-salon-dark/70 mb-6">{service.description}</p>
                  <a 
                    href={`#${service.id}`} 
                    className="inline-flex items-center text-salon-pink font-medium hover:underline"
                  >
                    View Styles <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a
              href="https://thehairmessiahllc.as.me"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Your Appointment
            </a>
          </div>
        </section>
        
        {/* Detailed Service Sections */}
        {mainServices.map((service) => (
          <section 
            key={service.id} 
            id={service.id}
            className={`py-16 md:py-24 ${service.id % 2 === 0 ? 'bg-salon-light' : 'bg-white'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <span className="inline-block text-salon-pink font-medium mb-2">{service.title}</span>
                <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
                  {service.title} Styles
                </h2>
                <p className="text-salon-dark/80 max-w-2xl mx-auto">
                  {service.description}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.styles.map((style, index) => (
                  <div key={index} className="glass-card overflow-hidden transition-all duration-300 hover:shadow-xl">
                    <div className="h-56 overflow-hidden">
                      <img 
                        src={style.image} 
                        alt={style.name} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl font-medium mb-2">{style.name}</h3>
                      <p className="text-salon-dark/70 text-sm mb-4">{style.description}</p>
                      <a
                        href="https://thehairmessiahllc.as.me"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-salon-pink text-sm font-medium hover:underline"
                      >
                        Book Now <ArrowRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
        
        {/* CTA */}
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1599689019338-50deb475f380?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Beautiful hairstyle"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-white mb-6">
              Questions About Our Services?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Contact us for personalized consultations or to learn more about any of our services. We're here to help you find the perfect style for your unique needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://thehairmessiahllc.as.me"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book Appointment
              </a>
              <Link to="/contact" className="btn-secondary bg-white/20 text-white border-white/40 hover:bg-white/30">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Services;
