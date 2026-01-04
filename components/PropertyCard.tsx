
import React from 'react';
import { Property } from '../types';
import { Bed, Bath, Move, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 ring-1 ring-gray-900/5 flex flex-col h-full group transform hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.imageUrl}
          alt={property.title}
          loading="lazy"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {property.badges.map((badge, index) => (
                <span key={index} className="bg-p4c-navy text-white text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wide shadow-sm">
                    {badge}
                </span>
            ))}
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
             <div className="text-white font-bold text-lg">${property.price} <span className="text-sm font-normal opacity-90">/ month</span></div>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-serif font-bold text-p4c-navy mb-1">{property.title}</h3>
        <p className="text-gray-500 text-sm flex items-center mb-4">
            <MapPin className="w-3 h-3 mr-1 text-p4c-gold" />
            {property.address}
        </p>
        
        <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
            {property.description}
        </p>

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
                <span className="text-xs font-semibold text-p4c-navy">{property.sqft} sqft</span>
            </div>
        </div>
        
        <Link 
            to={`/properties/${property.id}`}
            className="block w-full text-center mt-6 border-2 border-p4c-navy text-p4c-navy hover:bg-p4c-navy hover:text-white font-bold py-2.5 rounded-lg transition-colors duration-200 text-sm uppercase tracking-wide"
        >
            View Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
