
import { useState } from 'react';

interface GalleryImageProps {
  src: string;
  alt: string;
  category: string;
}

const GalleryImage = ({ src, alt, category }: GalleryImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-lg group">
      {!isLoaded && (
        <div className="absolute inset-0 bg-salon-light animate-pulse"></div>
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-72 object-cover transition-all duration-700 ease-in-out group-hover:scale-105 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setIsLoaded(true)}
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-white text-sm font-serif">{category}</span>
      </div>
    </div>
  );
};

export default GalleryImage;
