
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  quote: string;
  rating: number;
  imageSrc?: string;
}

const TestimonialCard = ({ name, quote, rating, imageSrc }: TestimonialCardProps) => {
  return (
    <div className="glass-card p-6 h-full">
      <div className="flex space-x-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${i < rating ? 'text-salon-gold fill-salon-gold' : 'text-gray-300'}`}
          />
        ))}
      </div>
      <p className="italic text-salon-dark/80 mb-4">"{quote}"</p>
      <div className="flex items-center mt-auto">
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={name} 
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-salon-pink/20 flex items-center justify-center mr-3">
            <span className="text-salon-pink font-medium">{name.charAt(0)}</span>
          </div>
        )}
        <span className="font-medium text-sm">{name}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
