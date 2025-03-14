
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Phone, Mail, MapPin, Clock, Send, Instagram } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you for your message! We'll be in touch soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-salon-dark/70 to-salon-dark/40 z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1516914589923-f105f1535f88?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Salon atmosphere"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              We'd love to hear from you. Reach out for appointments, questions, or feedback.
            </p>
          </div>
        </section>
        
        {/* Contact Information & Form */}
        <section className="content-section">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-medium mb-6">
                Get in Touch
              </h2>
              <p className="text-salon-dark/80 mb-8">
                Have questions about our services or want to schedule a consultation? Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-salon-dark mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-salon-pink/20 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-pink/30 transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-salon-dark mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-salon-pink/20 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-pink/30 transition-all"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-salon-dark mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-salon-pink/20 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-pink/30 transition-all"
                    placeholder="Your phone number (optional)"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-salon-dark mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-salon-pink/20 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-pink/30 transition-all"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="inline-flex items-center">
                      <Send size={18} className="mr-2" />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif font-medium mb-6">
                Contact Information
              </h2>
              <p className="text-salon-dark/80 mb-8">
                You can also reach us directly using the contact information below.
              </p>
              
              <div className="glass-card p-6 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-salon-pink/10 p-3 rounded-full mr-4">
                      <MapPin size={24} className="text-salon-pink" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Location</h3>
                      <p className="text-salon-dark/70">Forest Park, IL 60130</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-salon-pink/10 p-3 rounded-full mr-4">
                      <Phone size={24} className="text-salon-pink" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <a 
                        href="tel:+1234567890" 
                        className="text-salon-dark/70 hover:text-salon-pink transition-colors"
                      >
                        (123) 456-7890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-salon-pink/10 p-3 rounded-full mr-4">
                      <Mail size={24} className="text-salon-pink" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <a 
                        href="mailto:contact@thehairmessiah.com" 
                        className="text-salon-dark/70 hover:text-salon-pink transition-colors"
                      >
                        contact@thehairmessiah.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-salon-pink/10 p-3 rounded-full mr-4">
                      <Instagram size={24} className="text-salon-pink" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Instagram</h3>
                      <a 
                        href="https://instagram.com/iamthehairmessiah" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-salon-dark/70 hover:text-salon-pink transition-colors"
                      >
                        @iamthehairmessiah
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-salon-pink/10 p-3 rounded-full mr-4">
                      <Clock size={24} className="text-salon-pink" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Business Hours</h3>
                      <div className="text-salon-dark/70">
                        <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                        <p>Saturday: 9:00 AM - 5:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Google Map */}
              <div className="glass-card p-6 h-80">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23787.900517204007!2d-87.82889385!3d41.87282155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e348f5d436943%3A0x5736e5120fca2e1!2sForest%20Park%2C%20IL%2060130!5e0!3m2!1sen!2sus!4v1709553849766!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Hair Messiah location"
                  className="rounded-md"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="bg-salon-pink/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
              Ready to Book Your Appointment?
            </h2>
            <p className="text-salon-dark/80 max-w-2xl mx-auto mb-8">
              Skip the wait and book your appointment online today!
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

export default Contact;
