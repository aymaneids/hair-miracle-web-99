
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GalleryImage from "../components/GalleryImage";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Simulate image loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const categories = [
    { id: "all", name: "All Styles" },
    { id: "braids", name: "Braids" },
    { id: "extensions", name: "Extensions" },
    { id: "nails", name: "Nails" },
  ];
  
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1622601802957-1852708af784?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Fulani Braids",
      category: "braids"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Box Braids",
      category: "braids"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1580618864180-f6d7d39b8ff6?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Hair Extensions",
      category: "extensions"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1560869713-7d0a29674437?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Straight Extensions",
      category: "extensions"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Manicure",
      category: "nails"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Nail Art",
      category: "nails"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1595944024804-5f64b8623d3e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Lemonade Braids",
      category: "braids"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1596858305288-58e3a7d41561?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Senegalese Twists",
      category: "braids"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1632344004476-3ceec8315d1c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Gel Nails",
      category: "nails"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1603928807437-33432292d0b3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Curly Extensions",
      category: "extensions"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "Braided Updo",
      category: "braids"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
      alt: "French Tips",
      category: "nails"
    },
  ];
  
  const filteredImages = selectedCategory === "all"
    ? galleryImages
    : galleryImages.filter(image => image.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-salon-dark/70 to-salon-dark/40 z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Beautiful hairstyle"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6 animate-fade-in">
              Our Gallery
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Browse our collection of stunning hair transformations and nail art
            </p>
          </div>
        </section>
        
        {/* Gallery */}
        <section className="content-section">
          <div className="max-w-7xl mx-auto">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-salon-pink text-white shadow-md'
                      : 'bg-salon-light text-salon-dark hover:bg-salon-pink/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map(image => (
                <GalleryImage
                  key={image.id}
                  src={image.src}
                  alt={image.alt}
                  category={image.alt}
                />
              ))}
            </div>
            
            {/* CTA */}
            <div className="text-center mt-16">
              <h3 className="text-2xl font-serif font-medium mb-6">
                Love what you see?
              </h3>
              <p className="text-salon-dark/80 max-w-2xl mx-auto mb-8">
                Book your appointment today and let us create a stunning look tailored just for you.
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
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Gallery;
