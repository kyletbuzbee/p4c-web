import { useState, useRef, useEffect, useCallback, memo } from 'react';
import type { Property } from '../types';
import { Bed, Bath, Move, MapPin, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

interface PropertyCardProps {
  property: Property;
  priority?: boolean; // For above-the-fold content
}

// Lazy loaded image component with intersection observer
const LazyImage = memo(({ 
  src, 
  alt, 
  className, 
  priority = false 
}: { 
  src: string; 
  alt: string; 
  className: string;
  priority?: boolean;
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);
  
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    skip: priority, // Don't skip if it's priority content
    threshold: 0.1
  });

  // Combine refs
  const setRefs = useCallback((node: HTMLImageElement | null) => {
    if (node) {
      imgRef.current = node;
    }
    inViewRef(node);
  }, [inViewRef]);

  useEffect(() => {
    if (priority || inView) {
      const img = imgRef.current;
      if (img && !img.src) {
        img.src = src;
      }
    }
  }, [inView, src, priority]);

  const handleLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setImageError(true);
    setImageLoaded(true);
  }, []);

  if (imageError) {
    return (
      <div className={`${className} bg-gray-200 flex items-center justify-center`}>
        <div className="text-center text-gray-500">
          <ImageIcon className="w-12 h-12 mx-auto mb-2" />
          <p className="text-sm">Image not available</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${className} relative overflow-hidden`}>
      {/* Loading placeholder */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-400">
            <ImageIcon className="w-8 h-8" />
          </div>
        </div>
      )}
      
      <img
        ref={setRefs}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        // Add responsive image hints
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  );
});

LazyImage.displayName = 'LazyImage';

// Optimized PropertyCard with memoization
const PropertyCard = memo<PropertyCardProps>(({ property, priority = false }) => {
  const [, setIsHovered] = useState(false);

  // Preload critical images for better UX
  useEffect((): (() => void) | void => {
    if (priority) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = property.imageUrl;
      document.head.appendChild(link);
      
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [property.imageUrl, priority]);

  // Optimize badge rendering
  const renderBadges = useCallback(() => {
    if (!property.badges || property.badges.length === 0) return null;
    
    return (
      <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
        {property.badges.map((badge, index) => (
          <span 
            key={`${badge}-${index}`} 
            className="bg-p4c-navy text-white text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wide shadow-sm"
          >
            {badge}
          </span>
        ))}
      </div>
    );
  }, [property.badges]);

  // Optimize price display
  const formatPrice = useCallback((price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  }, []);

  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 ring-1 ring-gray-900/5 flex flex-col h-full group transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <LazyImage
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-full transform transition-transform duration-700 group-hover:scale-105"
          priority={priority}
        />
        
        {renderBadges()}
        
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="text-white font-bold text-lg">
            {formatPrice(property.price)} <span className="text-sm font-normal opacity-90">/ month</span>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-serif font-bold text-p4c-navy mb-1 line-clamp-2">
          {property.title}
        </h3>
        
        <p className="text-gray-500 text-sm flex items-center mb-4">
          <MapPin className="w-3 h-3 mr-1 text-p4c-gold flex-shrink-0" />
          <span className="truncate">{property.address}</span>
        </p>
        
        <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
          {property.description}
        </p>

        {/* Property Stats */}
        <div className="mt-auto pt-4 border-t border-gray-100 grid grid-cols-3 gap-2 text-center">
          <div className="flex flex-col items-center justify-center p-2 bg-gray-50 rounded-lg">
            <Bed className="w-4 h-4 text-p4c-slate mb-1" />
            <span className="text-xs font-semibold text-p4c-navy">{property.beds} Bed</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 bg-gray-50 rounded-lg">
            <Bath className="w-4 h-4 text-p4c-slate mb-1" />
            <span className="text-xs font-semibold text-p4c-navy">{property.baths} Bath</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 bg-gray-50 rounded-lg">
            <Move className="w-4 h-4 text-p4c-slate mb-1" />
            <span className="text-xs font-semibold text-p4c-navy">
              {property.sqft.toLocaleString()} sqft
            </span>
          </div>
        </div>
        
        {/* Action Button */}
        <Link 
          to={`/properties/${property.id}`}
          className="block w-full text-center mt-6 border-2 border-p4c-navy text-p4c-navy hover:bg-p4c-navy hover:text-white font-bold py-2.5 rounded-lg transition-colors duration-200 text-sm uppercase tracking-wide"
          aria-label={`View details for ${property.title}`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
});

PropertyCard.displayName = 'PropertyCard';

export default PropertyCard;
