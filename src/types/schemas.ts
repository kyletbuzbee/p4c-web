import { z } from 'zod';

/**
 * Zod Schemas for Runtime Validation
 * These mirror the TypeScript interfaces in types.ts for runtime type safety
 */

// Property Schemas
export const PropertySchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1, 'Title is required'),
  address: z.string().min(1, 'Address is required'),
  price: z.union([z.string(), z.number()]),
  beds: z.number().int().min(0),
  baths: z.number().int().min(0),
  sqft: z.number().int().min(0),
  imageUrl: z.string().url(),
  badges: z.array(z.string()).default([]),
  description: z.string().min(1, 'Description is required'),
});

export const ExtendedPropertySchema = PropertySchema.extend({
  city: z.string().min(1),
  neighborhood: z.string().min(1),
  schoolDistrict: z.string().min(1),
  availabilityDate: z.string().datetime(),
  amenities: z.array(z.string()).default([]),
  accessibilityFeatures: z.array(z.string()).default([]),
  images: z.array(z.string().url()).default([]),
  status: z.enum(['available', 'occupied', 'maintenance']),
  bedrooms: z.number().int().min(0).optional(),
  bathrooms: z.number().int().min(0).optional(),
  yearBuilt: z.number().int().min(1800).max(new Date().getFullYear()).optional(),
  location: z
    .object({
      lat: z.number().min(-90).max(90),
      lng: z.number().min(-180).max(180),
    })
    .optional(),
});

// User Schemas
export const UserProfileSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email('Invalid email address'),
  role: z.enum(['admin', 'tenant', 'guest']),
  name: z.string().optional(),
  permissions: z.array(z.string()).default([]),
});

// Filter Schemas
export const PropertyFilterSchema = z.object({
  minPrice: z.number().min(0).optional(),
  maxPrice: z.number().min(0).optional(),
  minBeds: z.number().int().min(0).max(10).optional(),
  maxBeds: z.number().int().min(0).max(10).optional(),
  minBaths: z.number().int().min(0).max(10).optional(),
  maxBaths: z.number().int().min(0).max(10).optional(),
  status: z.enum(['available', 'occupied', 'maintenance', 'all']).optional(),
  city: z.string().optional(),
  neighborhood: z.string().optional(),
});

// Application Form Schema
export const ApplicationSchema = z.object({
  // Personal Information
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z
    .string()
    .regex(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, 'Invalid phone number'),
  
  // Current Address
  currentAddress: z.string().min(1, 'Current address is required'),
  currentCity: z.string().min(1, 'City is required'),
  currentState: z.string().length(2, 'State must be 2 characters'),
  currentZip: z.string().regex(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code'),
  
  // Employment
  employer: z.string().optional(),
  employerPhone: z.string().optional(),
  monthlyIncome: z.number().min(0, 'Income must be positive').optional(),
  
  // Housing History
  moveInDate: z.string().datetime(),
  reasonForMoving: z.string().optional(),
  
  // Agreement
  termsAgreed: z.boolean().refine((val) => val === true, 'You must agree to the terms'),
});

// Contact Form Schema
export const ContactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z
    .string()
    .regex(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, 'Invalid phone number')
    .optional(),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

// Type exports
export type PropertyInput = z.infer<typeof PropertySchema>;
export type ExtendedPropertyInput = z.infer<typeof ExtendedPropertySchema>;
export type UserProfileInput = z.infer<typeof UserProfileSchema>;
export type PropertyFilterInput = z.infer<typeof PropertyFilterSchema>;
export type ApplicationInput = z.infer<typeof ApplicationSchema>;
export type ContactFormInput = z.infer<typeof ContactFormSchema>;
