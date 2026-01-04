
import { Property } from '../types';
import { IMAGES } from '../constants/images';

export interface ExtendedProperty extends Property {
  amenities: string[];
  accessibilityFeatures: string[];
  schoolDistrict: string;
  neighborhood: string;
  availabilityDate: string;
  coordinates: { lat: number; lng: number };
}

export const properties: ExtendedProperty[] = [
  {
    id: '1',
    title: 'The Magnolia Residence',
    address: '1245 Oakwood Dr, Tyler, TX',
    price: 950,
    beds: 3,
    baths: 2,
    sqft: 1450,
    imageUrl: IMAGES.PROPERTIES.TYLER_RANCH, 
    badges: ['Section 8 Approved', 'Wheelchair Accessible'],
    description: 'Fully renovated single-family home featuring quartz countertops, new HVAC, and a spacious fenced backyard perfect for families. Located within walking distance of Douglas Elementary School.',
    amenities: ['Quartz Countertops', 'Fenced Backyard', 'Central HVAC', 'Dishwasher', 'Washer/Dryer Hookups'],
    accessibilityFeatures: ['Wheelchair Ramp', 'Wide Doorways (36")', 'Grab Bars in Bathroom'],
    schoolDistrict: 'Tyler ISD',
    neighborhood: 'Azalea District',
    availabilityDate: 'Available Now',
    coordinates: { lat: 32.3513, lng: -95.3011 }
  },
  {
    id: '2',
    title: 'Veterans Harbor',
    address: '880 Pine Street, Longview, TX',
    price: 875,
    beds: 2,
    baths: 1.5,
    sqft: 1100,
    imageUrl: IMAGES.PROPERTIES.MINEOLA_STUDIO,
    badges: ['HUD-VASH Preferred', 'Near VA Clinic'],
    description: 'Cozy bungalow tailored for veterans. Includes walk-in shower, energy-efficient appliances, and dedicated parking. Quiet neighborhood with community garden nearby.',
    amenities: ['Energy Star Appliances', 'Dedicated Parking', 'Community Garden Access', 'Security System'],
    accessibilityFeatures: ['Step-free Entrance', 'Roll-in Shower', 'Lever Handles'],
    schoolDistrict: 'Longview ISD',
    neighborhood: 'Pine Tree',
    availabilityDate: 'October 15, 2023',
    coordinates: { lat: 32.5007, lng: -94.7405 }
  },
  {
    id: '3',
    title: 'Creekview Estate',
    address: '300 Cedar Lane, Marshall, TX',
    price: 1100,
    beds: 4,
    baths: 2,
    sqft: 1800,
    imageUrl: IMAGES.PROPERTIES.MARSHALL_FARMHOUSE,
    badges: ['Fenced Yard', 'New Roof'],
    description: 'Spacious family home with open floor plan. Brand new luxury vinyl plank flooring throughout and modernized kitchen. Features a covered patio and detached garage.',
    amenities: ['LVP Flooring', 'Covered Patio', 'Detached Garage', 'Walk-in Closets'],
    accessibilityFeatures: ['Flat Thresholds'],
    schoolDistrict: 'Marshall ISD',
    neighborhood: 'Historic District',
    availabilityDate: 'November 1, 2023',
    coordinates: { lat: 32.5449, lng: -94.3674 }
  },
  {
    id: '4',
    title: 'Liberty Row',
    address: '405 Freedom Blvd, Tyler, TX',
    price: 1050,
    beds: 3,
    baths: 2,
    sqft: 1600,
    imageUrl: IMAGES.PROPERTIES.LONGVIEW_VICTORIAN,
    badges: ['New Construction', 'Energy Star'],
    description: 'A complete restoration project turned modern sanctuary. Open concept living area, LED lighting throughout, and a brand new thermal insulation package to keep utility bills low.',
    amenities: ['LED Lighting', 'Smart Thermostat', 'Thermal Insulation', 'Open Concept'],
    accessibilityFeatures: ['Accessible Parking'],
    schoolDistrict: 'Tyler ISD',
    neighborhood: 'Downtown Tyler',
    availabilityDate: 'Available Now',
    coordinates: { lat: 32.3513, lng: -95.3011 }
  },
  {
    id: '5',
    title: 'The Patriot Duplex',
    address: '220 Victory Lane, Kilgore, TX',
    price: 825,
    beds: 2,
    baths: 1,
    sqft: 950,
    imageUrl: IMAGES.PROPERTIES.KEMP_TOWNHOME,
    badges: ['Rapid Rehousing', 'Pet Friendly'],
    description: 'Affordable duplex unit recently updated with fresh paint and new appliances. Large shared yard and close to public transit routes.',
    amenities: ['Fresh Paint', 'Shared Yard', 'Pet Friendly', 'Transit Access'],
    accessibilityFeatures: ['Ground Floor Unit'],
    schoolDistrict: 'Kilgore ISD',
    neighborhood: 'Sycamore Grove',
    availabilityDate: 'Waitlist Open',
    coordinates: { lat: 32.3852, lng: -94.8767 }
  },
  {
    id: '6',
    title: 'Freedom Heights',
    address: '1500 Independence Dr, Lindale, TX',
    price: 1250,
    beds: 3,
    baths: 2.5,
    sqft: 1750,
    imageUrl: IMAGES.PROPERTIES.RODRIGUEZ_FAMILY,
    badges: ['Family Size', 'Top Rated Schools'],
    description: 'Beautiful brick home in the highly sought-after Lindale school district. Features a double vanity, large soaking tub, and a fireplace for cozy evenings.',
    amenities: ['Fireplace', 'Double Vanity', 'Soaking Tub', 'Brick Exterior'],
    accessibilityFeatures: ['Paved Walkways'],
    schoolDistrict: 'Lindale ISD',
    neighborhood: 'Eagle Creek',
    availabilityDate: 'December 1, 2023',
    coordinates: { lat: 32.5165, lng: -95.4093 }
  }
];

export const getPropertyById = (id: string | undefined): ExtendedProperty | undefined => {
  return properties.find(p => p.id === id);
};
