
import TestimonialCard from '../TestimonialCard';

const TestimonialsSection = () => {
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

  return (
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
  );
};

export default TestimonialsSection;
