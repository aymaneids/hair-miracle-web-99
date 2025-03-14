
import { useState } from 'react';

interface GalleryImageProps {
  src: string;
  alt: string;
  category: string;
}

const GalleryImage = ({ src, alt, category }: GalleryImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-lg group shadow-md transition-all duration-300 hover:shadow-xl">
      {!isLoaded && (
        <div className="absolute inset-0 bg-salon-light animate-pulse flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-salon-pink border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-72 object-cover transition-all duration-700 ease-in-out group-hover:scale-105 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-white text-sm font-serif">{category}</span>
      </div>
    </div>
  );
};

export default GalleryImage;
