import { useState, useRef, useEffect, useCallback, memo } from 'react';
import type { Property } from '../types/types';
import { Bed, Bath, Move, MapPin, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

interface PropertyCardProps {
  property: Property;
  priority?: boolean; // For above-the-fold content
  viewType?: 'list' | 'grid';
}

// Lazy loaded image component with intersection observer
const LazyImage = memo(
  ({
    src,
    alt,
    className,
    priority = false,
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
      threshold: 0.1,
    });

    // Combine refs
    const setRefs = useCallback(
      (node: HTMLImageElement | null) => {
        if (node) {
          imgRef.current = node;
        }
        inViewRef(node);
      },
      [inViewRef]
    );

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
        <div
          className={`${className} flex items-center justify-center bg-gray-200`}
        >
          <div className="text-center text-gray-500">
            <ImageIcon className="mx-auto mb-2 size-12" />
            <p className="text-sm">Image not available</p>
          </div>
        </div>
      );
    }

    return (
      <div className={`${className} relative overflow-hidden`}>
        {/* Loading placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 flex animate-pulse items-center justify-center bg-gray-200">
            <div className="text-gray-400">
              <ImageIcon className="size-8" />
            </div>
          </div>
        )}

        <img
          ref={setRefs}
          alt={alt}
          width="400"
          height="256"
          className={`size-full object-cover transition-opacity duration-300 ${
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
  }
);

LazyImage.displayName = 'LazyImage';

// Optimized PropertyCard with memoization
const PropertyCard = memo<PropertyCardProps>(
  ({ property, priority = false }) => {
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
        <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2">
          {property.badges.map((badge, index) => (
            <span
              key={`${badge}-${index}`}
              className="rounded-md bg-p4c-navy px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-sm ring-1 ring-white/20"
            >
              {badge}
            </span>
          ))}
        </div>
      );
    }, [property.badges]);

    // Optimize price display
    const formatPrice = useCallback((price: string | number) => {
      const numericPrice =
        typeof price === 'number'
          ? price
          : parseFloat(price.replace(/[^0-9.]/g, ''));
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(numericPrice);
    }, []);

    return (
      <div
        className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Section - Aspect ratio container for CLS stability */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
          <LazyImage
            src={property.imageUrl}
            alt={property.title}
            className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
            priority={priority}
          />

          {renderBadges()}

          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="text-lg font-bold text-white">
              {formatPrice(property.price)}{' '}
              <span className="text-sm font-normal opacity-90">/ month</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-1 line-clamp-2 font-serif text-xl font-bold text-p4c-navy">
            {property.title}
          </h3>

          <p className="mb-4 flex items-center text-sm text-gray-500">
            <MapPin className="mr-1 size-3 shrink-0 text-p4c-gold" />
            <span className="truncate">{property.address}</span>
          </p>

          <p className="mb-6 line-clamp-3 grow text-sm leading-relaxed text-gray-600">
            {property.description}
          </p>

          {/* Property Stats */}
          <div className="mt-auto grid grid-cols-3 gap-3 border-t border-gray-100 pt-4 text-center">
            <div className="flex flex-col items-center justify-center rounded-lg bg-gray-50 p-3">
              <Bed className="mb-1.5 size-5 text-p4c-slate" />
              <span className="text-xs font-semibold text-p4c-navy">
                {property.beds} Bed
              </span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg bg-gray-50 p-3">
              <Bath className="mb-1.5 size-5 text-p4c-slate" />
              <span className="text-xs font-semibold text-p4c-navy">
                {property.baths} Bath
              </span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg bg-gray-50 p-3">
              <Move className="mb-1.5 size-5 text-p4c-slate" />
              <span className="text-xs font-semibold text-p4c-navy">
                {typeof property.sqft === 'number'
                  ? property.sqft.toLocaleString()
                  : property.sqft}{' '}
                sqft
              </span>
            </div>
          </div>

          {/* Action Button */}
          <Link
            to={`/properties/${property.id}`}
            className="mt-6 block w-full rounded-lg border-2 border-p4c-navy py-2.5 text-center text-sm font-bold uppercase tracking-wide text-p4c-navy transition-colors duration-200 hover:bg-p4c-navy hover:text-white"
            aria-label={`View details for ${property.title}`}
          >
            View Details
          </Link>
        </div>
      </div>
    );
  }
);

PropertyCard.displayName = 'PropertyCard';

export default PropertyCard;
