
import { Link } from 'react-router-dom';

const GallerySection = () => {
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
  );
};

export default GallerySection;
