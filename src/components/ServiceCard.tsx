
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  imageSrc?: string;
}

const ServiceCard = ({ title, description, icon, link, imageSrc }: ServiceCardProps) => {
  return (
    <div className="glass-card group overflow-hidden transition-all duration-300 hover:shadow-xl">
      {imageSrc && (
        <div className="h-48 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-2 rounded-full bg-salon-light text-salon-pink mr-3">
            {icon}
          </div>
          <h3 className="font-serif text-xl font-medium">{title}</h3>
        </div>
        <p className="text-salon-dark/70 mb-4 text-sm">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-salon-pink text-sm font-medium hover:underline group-hover:translate-x-1 transition-transform"
        >
          Learn More <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
