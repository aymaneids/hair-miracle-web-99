
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Award, User, MessageSquare, Clock, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <User size={24} />,
      title: "Client-Focused",
      description: "We prioritize your needs and preferences, ensuring a personalized experience."
    },
    {
      icon: <Award size={24} />,
      title: "Excellence",
      description: "We strive for perfection in every style we create, never compromising on quality."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Communication",
      description: "We listen attentively to understand your vision and bring it to life."
    },
    {
      icon: <Clock size={24} />,
      title: "Timeliness",
      description: "We respect your time and strive to provide efficient service without rushing quality."
    },
    {
      icon: <Heart size={24} />,
      title: "Passion",
      description: "Our love for hair styling drives us to continuously improve and innovate."
    },
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
              About The Hair Messiah
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Our story, our mission, and our commitment to divine hair transformations
            </p>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="content-section">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-salon-pink font-medium mb-2">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
                A Passion for Beautiful Hair
              </h2>
              <p className="text-salon-dark/80 mb-6">
                The Hair Messiah, LLC was born from a lifelong passion for hair styling and a desire to help people look and feel their best. 
                Our founder, a licensed cosmetologist with extensive training and experience, established the salon to create a space where clients 
                could receive exceptional hair services in a welcoming, relaxing atmosphere.
              </p>
              <p className="text-salon-dark/80 mb-6">
                What started as a small operation has grown into a beloved salon in Forest Park, IL, 
                serving clients who appreciate our commitment to quality, creativity, and care.
              </p>
              <p className="text-salon-dark/80">
                We specialize in braiding and extensions, offering a wide range of styles to suit every client's 
                unique personality and needs. Our techniques not only create beautiful looks but also prioritize the health 
                and integrity of your natural hair.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Salon interior"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>
        
        {/* Mission & Values */}
        <section className="bg-salon-light py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-salon-pink font-medium mb-2">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
                Mission & Values
              </h2>
              <p className="text-salon-dark/80 max-w-2xl mx-auto">
                At The Hair Messiah, our mission is to transform not just your hair, but your confidence and self-expression 
                through exceptional styling services and a caring approach.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {values.map((value, index) => (
                <div key={index} className="glass-card p-6">
                  <div className="bg-salon-pink/20 text-salon-pink rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-serif text-xl font-medium mb-2">{value.title}</h3>
                  <p className="text-salon-dark/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Expertise */}
        <section className="content-section">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1522337094846-8a818192de1f?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Styling hair"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <span className="inline-block text-salon-pink font-medium mb-2">Our Expertise</span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
                Professional Skills & Training
              </h2>
              <p className="text-salon-dark/80 mb-6">
                The Hair Messiah is a licensed cosmetologist with specialized training in braiding techniques and 
                hair extensions. Our expertise covers a wide range of styles, from traditional to contemporary, 
                ensuring that every client receives a look that's both beautiful and suitable for their hair type and lifestyle.
              </p>
              <p className="text-salon-dark/80 mb-6">
                We are committed to ongoing education and staying current with the latest trends, techniques, and products 
                in the hair industry. This dedication allows us to offer innovative styles while maintaining the highest 
                standards of quality and professionalism.
              </p>
              <p className="text-salon-dark/80">
                Our approach combines technical skill with artistic vision, allowing us to create customized looks 
                that enhance your natural beauty and reflect your personal style.
              </p>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="bg-salon-pink/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
              Experience the Divine Difference
            </h2>
            <p className="text-salon-dark/80 max-w-2xl mx-auto mb-8">
              Ready to transform your look with The Hair Messiah? Book your appointment today and discover 
              the perfect style for you.
            </p>
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
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
