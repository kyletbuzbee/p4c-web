# Repository Pattern Implementation Guide

## Properties-4-Creation Website

---

## Table of Contents

1. [Overview](#overview)
2. [Technical Changes Documented](#technical-changes-documented)
3. [Architecture Changes](#architecture-changes)
4. [Developer Guidelines](#developer-guidelines)
5. [Migration Guide](#migration-guide)
6. [Code Examples](#code-examples)
7. [Best Practices](#best-practices)

---

## Overview

The Properties-4-Creation website has successfully implemented a **Repository Pattern** for centralized data access management. This architectural improvement provides a robust foundation for both development and production environments while maintaining seamless backend integration capabilities.

### Benefits Achieved

- **🔄 Centralized Data Access**: All data operations now flow through a single `services/api.ts` file
- **🎯 Component Decoupling**: UI components are completely isolated from data sources
- **🚀 Environment Flexibility**: Seamless switching between mock data (development) and real backend (production)
- **🛡️ Error Resilience**: Automatic fallback to mock data when backend is unavailable
- **⚡ Realistic UX**: Simulated network latency (800ms) for authentic development experience
- **🔮 Future-Ready**: Structured for easy backend integration when needed

### How This Prepares for Backend Integration

The implementation creates a **data abstraction layer** that:
- Eliminates the need to modify components when switching to real backend
- Provides consistent error handling across all data operations
- Supports both development and production environments simultaneously
- Maintains identical component interfaces regardless of data source

---

## Technical Changes Documented

### 1. Updated services/api.ts

**Key Features:**
- Environment-based configuration (`VITE_API_URL`)
- Automatic mode detection (backend vs mock data)
- Centralized API client with error handling
- Organized modules: `impact`, `transparency`, `properties`
- Simulated latency for realistic development experience

**Implementation Structure:**
```typescript
const API_CONFIG = {
  baseUrl: import.meta.env['VITE_API_URL'] || '',
  get isBackendMode() {
    return this.baseUrl.trim().length > 0;
  },
  getEndpointUrl(endpoint: string): string {
    return `${this.baseUrl.replace(/\/$/, '')}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
  }
};
```

### 2. Component Updates

#### Home.tsx
**Before:** Direct import from data file
```typescript
import { properties } from '../data/properties';
```

**After:** Centralized API call
```typescript
import { api } from '../services/api';

// In component:
const propertiesData = await api.properties.getAll();
```

#### PropertyDetails.tsx
**Before:** Direct data access
```typescript
import { getPropertyById } from '../data/properties';
const property = getPropertyById(id);
```

**After:** API abstraction
```typescript
import { api } from '../services/api';
const propertyData = await api.properties.getById(id);
```

#### AdminDashboard.tsx
**Before:** Direct import
```typescript
import { properties } from '../data/properties';
```

**After:** API service
```typescript
import { api } from '../services/api';
const propertiesData = await api.properties.getAll();
```

### 3. Environment Variables Setup

**Development Mode (Default):**
```bash
VITE_API_URL=
# Uses mock data with simulated latency
```

**Production Mode:**
```bash
VITE_API_URL=https://api.yourdomain.com
# Connects to real backend automatically
```

### 4. Loading States and Error Handling

All components now include:
- Loading states during API calls
- Error handling with user-friendly messages
- Graceful fallbacks when data is unavailable
- Proper cleanup in useEffect hooks

**Example Error Handling:**
```typescript
try {
  setLoading(true);
  const propertiesData = await api.properties.getAll();
  setProperties(propertiesData);
} catch (error) {
  console.error('Failed to fetch properties:', error);
  // User sees loading error state
} finally {
  setLoading(false);
}
```

---

## Architecture Changes

### Before: Direct Data Access
```
Components → data/properties.ts (Direct Import)
```

**Problems:**
- Tight coupling between components and data source
- Difficult to switch to backend
- No centralized error handling
- Mock data scattered throughout components

### After: Repository Pattern
```
Components → services/api.ts → [Backend API OR Mock Data]
```

**Benefits:**
- Complete abstraction from data sources
- Single point of configuration
- Centralized error handling
- Easy environment switching
- Maintainable and scalable

### Component Isolation

**Components are now "data-blind":**
- No knowledge of data source (mock vs backend)
- Consistent interfaces regardless of environment
- Easy testing with mocked APIs
- Future backend integration requires zero component changes

### Data Flow Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Components    │────│  services/api.ts │────│   Data Source   │
│                 │    │                  │    │                 │
│ • Home.tsx      │    │ • API Config     │    │ • Mock Data     │
│ • Property...   │    │ • ApiClient      │    │ • Backend API   │
│ • AdminDash...  │    │ • Error Handling │    │ • Fallbacks     │
└─────────────────┘    │ • Latency Sim    │    └─────────────────┘
                       └──────────────────┘
```

---

## Developer Guidelines

### How to Add New API Endpoints

1. **Update services/api.ts:**
```typescript
export const api = {
  // ... existing modules
  newModule: {
    getData: async (): Promise<YourType[]> => {
      try {
        if (API_CONFIG.isBackendMode) {
          const data = await apiClient.get<YourType[]>('/api/new-endpoint');
          return data;
        }
      } catch (error) {
        console.warn('Backend request failed, using mock data:', error);
      }
      
      // Fallback to mock data
      await new Promise(resolve => setTimeout(resolve, SIMULATED_LATENCY));
      return mockDataArray;
    }
  }
};
```

2. **Add mock data structure:**
```typescript
const mockDataArray: YourType[] = [
  // Your mock data here
];
```

3. **Update TypeScript types if needed**

### Backend Integration Examples

#### Supabase Integration - Complete Implementation

**Step 1: Install Supabase Client**
```bash
npm install @supabase/supabase-js
```

**Step 2: Enhanced services/api.ts with Supabase**
```typescript
import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Enhanced API with Supabase
export const api = {
  properties: {
    getAll: async (): Promise<ExtendedProperty[]> => {
      try {
        if (API_CONFIG.isBackendMode) {
          const { data, error } = await supabase
            .from('properties')
            .select(`
              id,
              title,
              address,
              price,
              beds,
              baths,
              sqft,
              image_url,
              badges,
              description,
              amenities,
              accessibility_features,
              school_district,
              neighborhood,
              availability_date,
              coordinates
            `);
          
          if (error) {
            console.warn('Supabase request failed, using mock data:', error);
            throw error;
          }
          
          // Transform data to match ExtendedProperty interface
          return data.map(property => ({
            id: property.id,
            title: property.title,
            address: property.address,
            price: property.price,
            beds: property.beds,
            baths: property.baths,
            sqft: property.sqft,
            imageUrl: property.image_url,
            badges: property.badges || [],
            description: property.description,
            amenities: property.amenities || [],
            accessibilityFeatures: property.accessibility_features || [],
            schoolDistrict: property.school_district,
            neighborhood: property.neighborhood,
            availabilityDate: property.availability_date,
            coordinates: property.coordinates
          }));
        }
      } catch (error) {
        console.warn('Backend request failed, using mock data:', error);
      }
      
      // Fallback to mock data
      await new Promise(resolve => setTimeout(resolve, SIMULATED_LATENCY));
      return properties;
    },

    getById: async (id: string): Promise<ExtendedProperty | null> => {
      try {
        if (API_CONFIG.isBackendMode) {
          const { data, error } = await supabase
            .from('properties')
            .select('*')
            .eq('id', id)
            .single();
          
          if (error) {
            console.warn('Supabase getById failed:', error);
            throw error;
          }
          
          return data ? {
            id: data.id,
            title: data.title,
            address: data.address,
            price: data.price,
            beds: data.beds,
            baths: data.baths,
            sqft: data.sqft,
            imageUrl: data.image_url,
            badges: data.badges || [],
            description: data.description,
            amenities: data.amenities || [],
            accessibilityFeatures: data.accessibility_features || [],
            schoolDistrict: data.school_district,
            neighborhood: data.neighborhood,
            availabilityDate: data.availability_date,
            coordinates: data.coordinates
          } : null;
        }
      } catch (error) {
        console.warn('Backend getById failed, using mock data:', error);
      }
      
      // Fallback to mock data
      await new Promise(resolve => setTimeout(resolve, SIMULATED_LATENCY));
      const property = getPropertyById(id);
      return property || null;
    },

    search: async (criteria: {
      minPrice?: number;
      maxPrice?: number;
      beds?: number;
      baths?: number;
      neighborhood?: string;
      schoolDistrict?: string;
    }): Promise<ExtendedProperty[]> => {
      try {
        if (API_CONFIG.isBackendMode) {
          let query = supabase.from('properties').select('*');
          
          if (criteria.minPrice) {
            query = query.gte('price', criteria.minPrice);
          }
          if (criteria.maxPrice) {
            query = query.lte('price', criteria.maxPrice);
          }
          if (criteria.beds) {
            query = query.gte('beds', criteria.beds);
          }
          if (criteria.baths) {
            query = query.gte('baths', criteria.baths);
          }
          if (criteria.neighborhood) {
            query = query.ilike('neighborhood', `%${criteria.neighborhood}%`);
          }
          if (criteria.schoolDistrict) {
            query = query.eq('school_district', criteria.schoolDistrict);
          }
          
          const { data, error } = await query;
          
          if (error) {
            console.warn('Supabase search failed:', error);
            throw error;
          }
          
          return data.map(property => ({
            id: property.id,
            title: property.title,
            address: property.address,
            price: property.price,
            beds: property.beds,
            baths: property.baths,
            sqft: property.sqft,
            imageUrl: property.image_url,
            badges: property.badges || [],
            description: property.description,
            amenities: property.amenities || [],
            accessibilityFeatures: property.accessibility_features || [],
            schoolDistrict: property.school_district,
            neighborhood: property.neighborhood,
            availabilityDate: property.availability_date,
            coordinates: property.coordinates
          }));
        }
      } catch (error) {
        console.warn('Backend search failed, using mock data:', error);
      }
      
      // Fallback to mock data
      await new Promise(resolve => setTimeout(resolve, SIMULATED_LATENCY));
      
      return properties.filter(property => {
        if (criteria.minPrice && property.price < criteria.minPrice) return false;
        if (criteria.maxPrice && property.price > criteria.maxPrice) return false;
        if (criteria.beds && property.beds < criteria.beds) return false;
        if (criteria.baths && property.baths < criteria.baths) return false;
        if (criteria.neighborhood && !property.neighborhood.toLowerCase().includes(criteria.neighborhood.toLowerCase())) return false;
        if (criteria.schoolDistrict && property.schoolDistrict !== criteria.schoolDistrict) return false;
        return true;
      });
    }
  }
};
```

**Step 3: Supabase Database Schema**
```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Properties table
CREATE TABLE properties (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  address TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  beds INTEGER NOT NULL,
  baths DECIMAL(3,1) NOT NULL,
  sqft INTEGER NOT NULL,
  image_url TEXT,
  badges TEXT[], -- Array of badge strings
  description TEXT,
  amenities TEXT[], -- Array of amenity strings
  accessibility_features TEXT[], -- Array of accessibility feature strings
  school_district VARCHAR(255),
  neighborhood VARCHAR(255),
  availability_date VARCHAR(100),
  coordinates JSONB, -- {lat: number, lng: number}
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_properties_price ON properties(price);
CREATE INDEX idx_properties_beds ON properties(beds);
CREATE INDEX idx_properties_neighborhood ON properties(neighborhood);
CREATE INDEX idx_properties_school_district ON properties(school_district);

-- Enable Row Level Security (RLS)
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Properties are viewable by everyone" ON properties
  FOR SELECT USING (true);

-- Create policies for authenticated users (for admin operations)
CREATE POLICY "Properties are editable by authenticated users" ON properties
  FOR ALL USING (auth.role() = 'authenticated');
```

#### Firebase Integration - Complete Implementation

**Step 1: Install Firebase SDK**
```bash
npm install firebase
```

**Step 2: Firebase Configuration**
```typescript
// firebase/config.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
```

**Step 3: Enhanced services/api.ts with Firebase**
```typescript
import { db } from '../firebase/config';
import { 
  collection, 
  getDocs, 
  getDoc, 
  doc, 
  query, 
  where, 
  orderBy, 
  limit,
  QueryConstraint 
} from 'firebase/firestore';

export const api = {
  properties: {
    getAll: async (): Promise<ExtendedProperty[]> => {
      try {
        if (API_CONFIG.isBackendMode) {
          const propertiesCollection = collection(db, 'properties');
          const querySnapshot = await getDocs(propertiesCollection);
          
          const properties = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          })) as ExtendedProperty[];
          
          return properties;
        }
      } catch (error) {
        console.warn('Firebase getAll failed, using mock data:', error);
      }
      
      // Fallback to mock data
      await new Promise(resolve => setTimeout(resolve, SIMULATED_LATENCY));
      return properties;
    },

    getById: async (id: string): Promise<ExtendedProperty | null> => {
      try {
        if (API_CONFIG.isBackendMode) {
          const propertyDoc = doc(db, 'properties', id);
          const docSnap = await getDoc(propertyDoc);
          
          if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() } as ExtendedProperty;
          }
          return null;
        }
      } catch (error) {
        console.warn('Firebase getById failed, using mock data:', error);
      }
      
      // Fallback to mock data
      await new Promise(resolve => setTimeout(resolve, SIMULATED_LATENCY));
      const property = getPropertyById(id);
      return property || null;
    },

    search: async (criteria: {
      minPrice?: number;
      maxPrice?: number;
      beds?: number;
      baths?: number;
      neighborhood?: string;
      schoolDistrict?: string;
    }): Promise<ExtendedProperty[]> => {
      try {
        if (API_CONFIG.isBackendMode) {
          const constraints: QueryConstraint[] = [];
          
          if (criteria.minPrice) {
            constraints.push(where('price', '>=', criteria.minPrice));
          }
          if (criteria.maxPrice) {
            constraints.push(where('price', '<=', criteria.maxPrice));
          }
          if (criteria.beds) {
            constraints.push(where('beds', '>=', criteria.beds));
          }
          if (criteria.baths) {
            constraints.push(where('baths', '>=', criteria.baths));
          }
          
          constraints.push(orderBy('price'));
          constraints.push(limit(50));
          
          const q = query(collection(db, 'properties'), ...constraints);
          const querySnapshot = await getDocs(q);
          
          let properties = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          })) as ExtendedProperty[];
          
          // Client-side filtering for fields that don't support queries
          if (criteria.neighborhood) {
            properties = properties.filter(p => 
              p.neighborhood.toLowerCase().includes(criteria.neighborhood!.toLowerCase())
            );
          }
          if (criteria.schoolDistrict) {
            properties = properties.filter(p => p.schoolDistrict === criteria.schoolDistrict);
          }
          
          return properties;
        }
      } catch (error) {
        console.warn('Firebase search failed, using mock data:', error);
      }
      
      // Fallback to mock data
      await new Promise(resolve => setTimeout(resolve, SIMULATED_LATENCY));
      
      return properties.filter(property => {
        if (criteria.minPrice && property.price < criteria.minPrice) return false;
        if (criteria.maxPrice && property.price > criteria.maxPrice) return false;
        if (criteria.beds && property.beds < criteria.beds) return false;
        if (criteria.baths && property.baths < criteria.baths) return false;
        if (criteria.neighborhood && !property.neighborhood.toLowerCase().includes(criteria.neighborhood.toLowerCase())) return false;
        if (criteria.schoolDistrict && property.schoolDistrict !== criteria.schoolDistrict) return false;
        return true;
      });
    }
  }
};
```

#### Node.js/Express Backend Integration

**Step 1: Express Server Setup**
```javascript
// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Import routes
const propertiesRouter = require('./routes/properties');
const impactRouter = require('./routes/impact');
const transparencyRouter = require('./routes/transparency');

// Use routes
app.use('/api/properties', propertiesRouter);
app.use('/api/impact', impactRouter);
app.use('/api/transparency', transparencyRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

**Step 2: Property Routes Implementation**
```javascript
// routes/properties.js
const express = require('express');
const router = express.Router();
const Property = require('../models/Property');

// GET /api/properties
router.get('/', async (req, res) => {
  try {
    const properties = await Property.find({ isActive: true })
      .sort({ createdAt: -1 })
      .lean();
    
    res.json(properties);
  } catch (error) {
    console.error('Error fetching properties:', error);
    res.status(500).json({ error: 'Failed to fetch properties' });
  }
});

// GET /api/properties/:id
router.get('/:id', async (req, res) => {
  try {
    const property = await Property.findById(req.params.id).lean();
    
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    
    res.json(property);
  } catch (error) {
    console.error('Error fetching property:', error);
    res.status(500).json({ error: 'Failed to fetch property' });
  }
});

// POST /api/properties/search
router.post('/search', async (req, res) => {
  try {
    const { minPrice, maxPrice, beds, baths, neighborhood, schoolDistrict } = req.body;
    
    let query = { isActive: true };
    
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = minPrice;
      if (maxPrice) query.price.$lte = maxPrice;
    }
    
    if (beds) query.beds = { $gte: beds };
    if (baths) query.baths = { $gte: baths };
    if (neighborhood) {
      query.neighborhood = { $regex: neighborhood, $options: 'i' };
    }
    if (schoolDistrict) {
      query.schoolDistrict = schoolDistrict;
    }
    
    const properties = await Property.find(query)
      .sort({ price: 1 })
      .limit(50)
      .lean();
    
    res.json(properties);
  } catch (error) {
    console.error('Error searching properties:', error);
    res.status(500).json({ error: 'Failed to search properties' });
  }
});

// GET /api/properties/badge/:badge
router.get('/badge/:badge', async (req, res) => {
  try {
    const { badge } = req.params;
    
    const properties = await Property.find({
      isActive: true,
      badges: { $in: [new RegExp(badge, 'i')] }
    }).lean();
    
    res.json(properties);
  } catch (error) {
    console.error('Error fetching properties by badge:', error);
    res.status(500).json({ error: 'Failed to fetch properties by badge' });
  }
});

module.exports = router;
```

**Step 3: Mongoose Model**
```javascript
// models/Property.js
const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  beds: {
    type: Number,
    required: true,
    min: 0
  },
  baths: {
    type: Number,
    required: true,
    min: 0
  },
  sqft: {
    type: Number,
    required: true,
    min: 0
  },
  imageUrl: {
    type: String,
    default: ''
  },
  badges: [{
    type: String
  }],
  description: {
    type: String,
    required: true
  },
  amenities: [{
    type: String
  }],
  accessibilityFeatures: [{
    type: String
  }],
  schoolDistrict: {
    type: String,
    required: true
  },
  neighborhood: {
    type: String,
    required: true
  },
  availabilityDate: {
    type: String,
    required: true
  },
  coordinates: {
    lat: {
      type: Number,
      required: true
    },
    lng: {
      type: Number,
      required: true
    }
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Indexes for better query performance
propertySchema.index({ price: 1 });
propertySchema.index({ beds: 1 });
propertySchema.index({ neighborhood: 1 });
propertySchema.index({ schoolDistrict: 1 });
propertySchema.index({ badges: 1 });

module.exports = mongoose.model('Property', propertySchema);
```

### Environment Variable Configuration

**Required Variables:**
```bash
# Backend API URL (for production)
VITE_API_URL=https://your-backend-api.com

# Supabase (if using)
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key

# Firebase (if using)
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
```

**Optional Variables:**
```bash
# Development settings
VITE_ENABLE_MOCK_DATA=true
VITE_API_TIMEOUT=5000
VITE_LOG_LEVEL=debug
```

### Best Practices for Maintaining the Repository Pattern

1. **Always provide fallback data** when adding new endpoints
2. **Maintain consistent error handling** across all API methods
3. **Use TypeScript interfaces** for all data structures
4. **Document API endpoints** in comments
5. **Test both modes** (backend and mock) during development
6. **Keep mock data realistic** for development accuracy

---

## Migration Guide

### Step-by-Step Process for Switching to Real Backend

#### Phase 1: Backend Development
1. **Create backend endpoints** that match the expected API structure
2. **Ensure CORS configuration** allows frontend domain
3. **Implement authentication** if required
4. **Test endpoints** with tools like Postman or curl

#### Phase 2: Environment Configuration
1. **Update .env file:**
```bash
# Development with backend
VITE_API_URL=http://localhost:3001/api

# Production
VITE_API_URL=https://api.yourdomain.com
```

2. **Remove or update mock data** in services/api.ts if no longer needed

#### Phase 3: Deployment
1. **Deploy backend first**
2. **Update frontend environment variables** for production
3. **Test production deployment**
4. **Monitor error logs** for any issues

### API Endpoint Requirements

**Required Endpoints for Current Implementation:**

| Endpoint | Method | Purpose | Response Type |
|----------|--------|---------|---------------|
| `/api/impact/metrics` | GET | Dashboard statistics | `StatMetric[]` |
| `/api/impact/financial-breakdown` | GET | Financial data | `FinancialBreakdown[]` |
| `/api/transparency/standards` | GET | Renovation standards | `RenovationStandard[]` |
| `/api/properties` | GET | All properties | `ExtendedProperty[]` |
| `/api/properties/:id` | GET | Single property | `ExtendedProperty` |
| `/api/properties/search` | POST | Property search | `ExtendedProperty[]` |
| `/api/properties/badge/:badge` | GET | Properties by badge | `ExtendedProperty[]` |

### Configuration Changes Needed

#### Complete Backend Implementation Examples

**Express.js with MongoDB Implementation:**
```javascript
// Complete server implementation with all endpoints
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/p4c', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Models
const Property = require('./models/Property');
const ImpactMetric = require('./models/ImpactMetric');

// Impact Metrics Routes
app.get('/api/impact/metrics', async (req, res) => {
  try {
    const metrics = await ImpactMetric.find({ isActive: true })
      .sort({ order: 1 })
      .lean();
    
    res.json(metrics);
  } catch (error) {
    console.error('Error fetching impact metrics:', error);
    res.status(500).json({ error: 'Failed to fetch metrics' });
  }
});

app.get('/api/impact/financial-breakdown', async (req, res) => {
  try {
    // Return financial breakdown data
    const breakdown = [
      { category: 'Property Maintenance', percentage: 35, color: '#0B1120' },
      { category: 'Future Acquisitions', percentage: 30, color: '#C5A059' },
      { category: 'Investor Returns', percentage: 20, color: '#334155' },
      { category: 'Community Programs', percentage: 10, color: '#94a3b8' },
      { category: 'Admin/Ops', percentage: 5, color: '#cbd5e1' },
    ];
    
    res.json(breakdown);
  } catch (error) {
    console.error('Error fetching financial breakdown:', error);
    res.status(500).json({ error: 'Failed to fetch financial data' });
  }
});

// Transparency Routes
app.get('/api/transparency/standards', async (req, res) => {
  try {
    const standards = await RenovationStandard.find({ isActive: true })
      .sort({ category: 1 })
      .lean();
    
    res.json(standards);
  } catch (error) {
    console.error('Error fetching renovation standards:', error);
    res.status(500).json({ error: 'Failed to fetch standards' });
  }
});

// Property Routes with Advanced Filtering
app.get('/api/properties', async (req, res) => {
  try {
    const { 
      minPrice, 
      maxPrice, 
      beds, 
      baths, 
      neighborhood, 
      schoolDistrict,
      badges,
      limit = 50,
      offset = 0
    } = req.query;
    
    let query = { isActive: true };
    
    // Build query conditions
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = parseInt(minPrice);
      if (maxPrice) query.price.$lte = parseInt(maxPrice);
    }
    
    if (beds) query.beds = { $gte: parseInt(beds) };
    if (baths) query.baths = { $gte: parseFloat(baths) };
    if (neighborhood) {
      query.neighborhood = { $regex: neighborhood, $options: 'i' };
    }
    if (schoolDistrict) {
      query.schoolDistrict = schoolDistrict;
    }
    if (badges) {
      const badgeArray = badges.split(',');
      query.badges = { $in: badgeArray };
    }
    
    const properties = await Property.find(query)
      .sort({ price: 1 })
      .limit(parseInt(limit))
      .skip(parseInt(offset))
      .lean();
    
    // Get total count for pagination
    const total = await Property.countDocuments(query);
    
    res.json({
      data: properties,
      pagination: {
        total,
        limit: parseInt(limit),
        offset: parseInt(offset),
        hasMore: (parseInt(offset) + parseInt(limit)) < total
      }
    });
  } catch (error) {
    console.error('Error fetching properties:', error);
    res.status(500).json({ error: 'Failed to fetch properties' });
  }
});

app.get('/api/properties/:id', async (req, res) => {
  try {
    const property = await Property.findById(req.params.id).lean();
    
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    
    res.json(property);
  } catch (error) {
    console.error('Error fetching property:', error);
    res.status(500).json({ error: 'Failed to fetch property' });
  }
});

app.post('/api/properties/search', async (req, res) => {
  try {
    const { 
      minPrice, 
      maxPrice, 
      beds, 
      baths, 
      neighborhood, 
      schoolDistrict,
      amenities,
      accessibilityFeatures 
    } = req.body;
    
    let query = { isActive: true };
    
    // Build complex search query
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = minPrice;
      if (maxPrice) query.price.$lte = maxPrice;
    }
    
    if (beds) query.beds = { $gte: beds };
    if (baths) query.baths = { $gte: baths };
    
    if (neighborhood) {
      query.neighborhood = { $regex: neighborhood, $options: 'i' };
    }
    
    if (schoolDistrict) {
      query.schoolDistrict = schoolDistrict;
    }
    
    if (amenities && amenities.length > 0) {
      query.amenities = { $in: amenities };
    }
    
    if (accessibilityFeatures && accessibilityFeatures.length > 0) {
      query.accessibilityFeatures = { $in: accessibilityFeatures };
    }
    
    const properties = await Property.find(query)
      .sort({ price: 1, beds: 1 })
      .limit(100)
      .lean();
    
    res.json(properties);
  } catch (error) {
    console.error('Error searching properties:', error);
    res.status(500).json({ error: 'Failed to search properties' });
  }
});

app.get('/api/properties/badge/:badge', async (req, res) => {
  try {
    const { badge } = req.params;
    const decodedBadge = decodeURIComponent(badge);
    
    const properties = await Property.find({
      isActive: true,
      badges: { $regex: new RegExp(decodedBadge, 'i') }
    })
    .sort({ price: 1 })
    .lean();
    
    res.json(properties);
  } catch (error) {
    console.error('Error fetching properties by badge:', error);
    res.status(500).json({ error: 'Failed to fetch properties by badge' });
  }
});

// Admin endpoints for property management
app.post('/api/properties', async (req, res) => {
  try {
    // Authentication middleware would go here
    const property = new Property(req.body);
    await property.save();
    res.status(201).json(property);
  } catch (error) {
    console.error('Error creating property:', error);
    res.status(400).json({ error: 'Failed to create property', details: error.message });
  }
});

app.put('/api/properties/:id', async (req, res) => {
  try {
    // Authentication middleware would go here
    const property = await Property.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    
    res.json(property);
  } catch (error) {
    console.error('Error updating property:', error);
    res.status(400).json({ error: 'Failed to update property', details: error.message });
  }
});

app.delete('/api/properties/:id', async (req, res) => {
  try {
    // Authentication middleware would go here
    const property = await Property.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );
    
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    
    res.json({ message: 'Property deactivated successfully' });
  } catch (error) {
    console.error('Error deactivating property:', error);
    res.status(500).json({ error: 'Failed to deactivate property' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 P4C API Server running on port ${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
});
```

**Environment Configuration for Backend:**
```bash
# .env for backend server
NODE_ENV=development
PORT=3001
MONGODB_URI=mongodb://localhost:27017/p4c
FRONTEND_URL=http://localhost:5173

# For production
# NODE_ENV=production
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/p4c
# FRONTEND_URL=https://your-frontend-domain.com

# Optional: Redis for caching
REDIS_URL=redis://localhost:6379

# JWT for authentication (if needed)
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=7d

# File upload settings
MAX_FILE_SIZE=5242880
UPLOAD_DIR=./uploads
```

#### Database Schema Requirements
```sql
-- Properties table
CREATE TABLE properties (
  id VARCHAR PRIMARY KEY,
  title VARCHAR NOT NULL,
  address VARCHAR NOT NULL,
  price DECIMAL NOT NULL,
  beds INTEGER NOT NULL,
  baths DECIMAL NOT NULL,
  sqft INTEGER NOT NULL,
  image_url VARCHAR,
  badges JSON,
  description TEXT,
  amenities JSON,
  accessibility_features JSON,
  school_district VARCHAR,
  neighborhood VARCHAR,
  availability_date VARCHAR,
  coordinates JSON
);
```

---

## Code Examples

### Before/After Component Changes

#### Home Component - Before
```typescript
import { properties } from '../data/properties';

const Home: React.FC = () => {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  // Direct access to properties array
};
```

#### Home Component - After
```typescript
import { api } from '../services/api';

const Home: React.FC = () => {
  const [properties, setProperties] = useState<ExtendedProperty[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const propertiesData = await api.properties.getAll();
        setProperties(propertiesData);
      } catch (error) {
        console.error('Failed to fetch properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);
};
```

### Environment Configuration Examples

#### Development (.env)
```bash
# Use mock data
VITE_API_URL=
VITE_ENABLE_LOGGING=true
VITE_API_TIMEOUT=10000
```

#### Staging (.env.staging)
```bash
# Connect to staging backend
VITE_API_URL=https://staging-api.p4c.com
VITE_ENABLE_LOGGING=true
VITE_API_TIMEOUT=15000
```

#### Production (.env.production)
```bash
# Connect to production backend
VITE_API_URL=https://api.p4c.com
VITE_ENABLE_LOGGING=false
VITE_API_TIMEOUT=5000
```

### API Endpoint Structure

#### Backend Response Format
```json
{
  "data": [
    {
      "id": "1",
      "title": "The Magnolia Residence",
      "address": "1245 Oakwood Dr, Tyler, TX",
      "price": 950,
      "beds": 3,
      "baths": 2,
      "sqft": 1450,
      "imageUrl": "/images/properties/magnolia.webp",
      "badges": ["Section 8 Approved", "Wheelchair Accessible"],
      "description": "Fully renovated single-family home...",
      "amenities": ["Quartz Countertops", "Fenced Backyard"],
      "accessibilityFeatures": ["Wheelchair Ramp", "Wide Doorways"],
      "schoolDistrict": "Tyler ISD",
      "neighborhood": "Azalea District",
      "availabilityDate": "Available Now",
      "coordinates": { "lat": 32.3513, "lng": -95.3011 }
    }
  ]
}
```

### Error Handling Patterns

#### Comprehensive Error Handling
```typescript
const fetchProperties = async () => {
  try {
    setLoading(true);
    setError(null);
    
    const propertiesData = await api.properties.getAll();
    
    if (!propertiesData || propertiesData.length === 0) {
      setError('No properties available at this time.');
      return;
    }
    
    setProperties(propertiesData);
  } catch (error) {
    console.error('Error fetching properties:', error);
    setError('Unable to load properties. Please try again later.');
    
    // Could implement retry logic here
    // setTimeout(() => fetchProperties(), 3000);
  } finally {
    setLoading(false);
  }
};
```

---

## Best Practices

### 1. Data Consistency
- Maintain identical data structures between mock and backend
- Use TypeScript interfaces for type safety
- Document expected data formats

### 2. Performance Optimization
- Implement caching strategies for frequently accessed data
- Use React Query or SWR for advanced caching
- Optimize images and implement lazy loading

### 3. Error Resilience
- Always provide fallback data
- Implement retry mechanisms for failed requests
- Log errors appropriately for debugging

### 4. Security Considerations
- Validate all environment variables
- Implement proper authentication for protected endpoints
- Use HTTPS in production
- Sanitize user inputs

### 5. Testing Strategy
```typescript
// Example test for API service
describe('api.properties', () => {
  it('should return properties from backend when configured', async () => {
    process.env.VITE_API_URL = 'http://mock-backend.com';
    const properties = await api.properties.getAll();
    expect(properties).toBeDefined();
    expect(Array.isArray(properties)).toBe(true);
  });

  it('should fallback to mock data when backend unavailable', async () => {
    const properties = await api.properties.getAll();
    expect(properties).toHaveLength(6); // Mock data length
  });
});
```

### 6. Monitoring and Logging
```typescript
// Enhanced error logging
const logError = (endpoint: string, error: Error, context: any) => {
  console.error(`API Error [${endpoint}]:`, {
    message: error.message,
    stack: error.stack,
    context,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent
  });
  
  // Could send to error tracking service
  // errorTracker.captureException(error, { tags: { endpoint } });
};
```

### 7. Troubleshooting Section

#### Common Issues and Solutions

**Issue: CORS Errors**
```javascript
// Problem: Cross-origin requests blocked
// Solution: Proper CORS configuration
app.use(cors({
  origin: [
    'http://localhost:5173', // Vite dev server
    'http://localhost:3000', // React dev server
    'https://your-domain.com' // Production domain
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

**Issue: Environment Variables Not Loading**
```bash
# Problem: VITE_API_URL undefined in production
# Solution: Ensure environment variables are prefixed with VITE_
# Check build process includes env vars
VITE_API_URL=https://api.yourdomain.com
VITE_SUPABASE_URL=https://your-project.supabase.co
```

**Issue: Mock Data Not Falling Back**
```typescript
// Problem: API calls failing without fallback
// Solution: Enhanced error handling with timeout
class ApiClient {
  private async makeRequest<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout
    
    try {
      if (!API_CONFIG.isBackendMode) {
        throw new Error('Backend mode disabled - using mock data');
      }
      
      const response = await fetch(API_CONFIG.getEndpointUrl(endpoint), {
        ...options,
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      clearTimeout(timeoutId);
      if (error instanceof Error && error.name === 'AbortError') {
        throw new Error('Request timeout - using mock data');
      }
      console.warn(`Backend request failed for ${endpoint}, falling back to mock data:`, error);
      throw error;
    }
  }
}
```

**Issue: Database Connection Problems**
```javascript
// MongoDB connection with retry logic
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: 10, // Maintain up to 10 socket connections
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      family: 4 // Use IPv4, skip trying IPv6
    });
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    // Retry connection after 5 seconds
    setTimeout(connectDB, 5000);
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('⚠️ MongoDB disconnected');
});

mongoose.connection.on('reconnected', () => {
  console.log('🔄 MongoDB reconnected');
});
```

#### Performance Optimization Examples

**Caching with Redis:**
```javascript
const redis = require('redis');
const client = redis.createClient(process.env.REDIS_URL);

// Cache property data
const getCachedProperties = async (key, queryFunction, expiration = 300) => {
  try {
    // Try to get from cache first
    const cached = await client.get(key);
    if (cached) {
      return JSON.parse(cached);
    }
    
    // If not in cache, fetch from database
    const data = await queryFunction();
    
    // Store in cache with expiration
    await client.setex(key, expiration, JSON.stringify(data));
    
    return data;
  } catch (error) {
    console.error('Cache error:', error);
    // Fallback to direct query if cache fails
    return await queryFunction();
  }
};

// Usage in routes
app.get('/api/properties', async (req, res) => {
  try {
    const cacheKey = `properties:${JSON.stringify(req.query)}`;
    
    const properties = await getCachedProperties(
      cacheKey,
      () => Property.find(query).lean(),
      300 // 5 minutes cache
    );
    
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch properties' });
  }
});
```

**Database Indexing Strategy:**
```javascript
// Advanced indexing for better query performance
propertySchema.index({ 
  price: 1, 
  beds: 1, 
  isActive: 1 
}); // Compound index for price/bed queries

propertySchema.index({ 
  neighborhood: 1, 
  schoolDistrict: 1 
}); // Compound index for location queries

propertySchema.index({ 
  badges: 1 
}); // Text index for badge searches

propertySchema.index({ 
  coordinates: '2dsphere' 
}); // Geospatial index for location-based searches

// TTL index for temporary data (like view counts)
viewSchema.index({ createdAt: 1 }, { expireAfterSeconds: 3600 }); // Expire after 1 hour
```

#### Deployment Examples

**Docker Configuration:**
```dockerfile
# Dockerfile for backend
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Create uploads directory
RUN mkdir -p uploads

# Expose port
EXPOSE 3001

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3001/health || exit 1

# Start the application
CMD ["npm", "start"]
```

**Docker Compose for Full Stack:**
```yaml
# docker-compose.yml
version: '3.8'

services:
  # Frontend
  frontend:
    build: ./frontend
    ports:
      - "5173:5173"
    environment:
      - VITE_API_URL=http://backend:3001/api
    depends_on:
      - backend
    volumes:
      - ./frontend:/app
      - /app/node_modules

  # Backend API
  backend:
    build: ./backend
    ports:
      - "3001:3001"
    environment:
      - NODE_ENV=production
      - MONGODB_URI=mongodb://mongo:27017/p4c
      - REDIS_URL=redis://redis:6379
      - FRONTEND_URL=http://localhost:5173
    depends_on:
      - mongo
      - redis
    volumes:
      - ./backend/uploads:/app/uploads

  # MongoDB
  mongo:
    image: mongo:6
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=password

  # Redis for caching
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

volumes:
  mongo_data:
  redis_data:
```

**GitHub Actions CI/CD:**
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Run linting
        run: npm run lint

  deploy-backend:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to server
        uses: appleboy/ssh-action@v0.1.5
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          key: ${{ secrets.KEY }}
          script: |
            cd /var/www/p4c-backend
            git pull origin main
            npm ci --production
            pm2 restart p4c-backend

  deploy-frontend:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
        env:
          VITE_API_URL: ${{ secrets.API_URL }}
      
      - name: Deploy to static hosting
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## Conclusion

The Repository Pattern implementation in Properties-4-Creation provides a robust, scalable foundation for both current development needs and future backend integration. The architecture ensures:

- **Seamless Development Experience** with realistic mock data
- **Production Readiness** with automatic backend switching
- **Maintainable Codebase** with centralized data management
- **Future-Proof Architecture** ready for any backend technology

This implementation follows industry best practices while maintaining the specific needs of a housing platform for veterans and families. The result is a professional, enterprise-ready frontend application that can easily adapt to changing requirements and backend technologies.

---

*For questions or support regarding this implementation, please refer to the project documentation or contact the development team.*

---

## Additional Resources

### Testing Examples

#### Component Testing with Mock API
```typescript
// __tests__/Home.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import Home from '../pages/Home';
import { api } from '../services/api';

// Mock the API service
vi.mock('../services/api');

const mockProperties = [
  {
    id: '1',
    title: 'Test Property',
    address: '123 Test St',
    price: 1000,
    beds: 2,
    baths: 1,
    sqft: 800,
    imageUrl: '/test.jpg',
    badges: ['Test Badge'],
    description: 'Test description',
    amenities: ['Test Amenity'],
    accessibilityFeatures: ['Test Feature'],
    schoolDistrict: 'Test ISD',
    neighborhood: 'Test Area',
    availabilityDate: 'Available',
    coordinates: { lat: 0, lng: 0 }
  }
];

describe('Home Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should display properties when API call succeeds', async () => {
    vi.mocked(api.properties.getAll).mockResolvedValue(mockProperties);
    
    render(<Home />);
    
    // Should show loading initially
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    
    // Should show properties after loading
    await waitFor(() => {
      expect(screen.getByText('Test Property')).toBeInTheDocument();
    });
    
    expect(screen.getByText('123 Test St')).toBeInTheDocument();
  });

  it('should handle API errors gracefully', async () => {
    vi.mocked(api.properties.getAll).mockRejectedValue(new Error('API Error'));
    
    render(<Home />);
    
    await waitFor(() => {
      expect(screen.getByText(/error|failed/i)).toBeInTheDocument();
    });
  });

  it('should use mock data when no backend URL is set', async () => {
    // Simulate no backend URL
    vi.mocked(api.properties.getAll).mockImplementation(() => {
      throw new Error('Backend mode disabled - using mock data');
    });
    
    render(<Home />);
    
    // Should still render with fallback data
    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });
  });
});
```

#### API Service Testing
```typescript
// __tests__/api.test.ts
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { api } from '../services/api';

// Mock fetch globally
const mockFetch = vi.fn();
global.fetch = mockFetch;

describe('API Service', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Reset environment
    delete import.meta.env.VITE_API_URL;
  });

  describe('Properties API', () => {
    it('should return mock data when no backend URL is set', async () => {
      const properties = await api.properties.getAll();
      
      expect(Array.isArray(properties)).toBe(true);
      expect(properties.length).toBeGreaterThan(0);
      expect(properties[0]).toHaveProperty('id');
      expect(properties[0]).toHaveProperty('title');
    });

    it('should call backend when VITE_API_URL is set', async () => {
      import.meta.env.VITE_API_URL = 'https://api.test.com';
      
      const mockData = [{ id: '1', title: 'Backend Property' }];
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockData)
      });
      
      const properties = await api.properties.getAll();
      
      expect(mockFetch).toHaveBeenCalledWith(
        'https://api.test.com/api/properties',
        expect.objectContaining({
          method: 'GET',
          headers: expect.objectContaining({
            'Content-Type': 'application/json'
          })
        })
      );
      
      expect(properties).toEqual(mockData);
    });

    it('should fallback to mock data when backend fails', async () => {
      import.meta.env.VITE_API_URL = 'https://api.test.com';
      
      mockFetch.mockRejectedValueOnce(new Error('Network Error'));
      
      const properties = await api.properties.getAll();
      
      // Should fallback to mock data
      expect(Array.isArray(properties)).toBe(true);
      expect(properties.length).toBeGreaterThan(0);
    });
  });

  describe('Error Handling', () => {
    it('should handle timeout errors', async () => {
      import.meta.env.VITE_API_URL = 'https://api.test.com';
      
      mockFetch.mockImplementationOnce(() => 
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Timeout')), 100)
        )
      );
      
      const properties = await api.properties.getAll();
      
      // Should fallback to mock data on timeout
      expect(Array.isArray(properties)).toBe(true);
    });
  });
});
```

### API Documentation

#### OpenAPI/Swagger Specification
```yaml
# api-docs.yaml
openapi: 3.0.0
info:
  title: Properties 4 Creation API
  description: API for managing affordable housing properties
  version: 1.0.0
  contact:
    name: P4C Development Team
    email: dev@p4c.org

servers:
  - url: https://api.p4c.org/v1
    description: Production server
  - url: http://localhost:3001/api
    description: Development server

paths:
  /properties:
    get:
      summary: Get all properties
      tags: [Properties]
      parameters:
        - name: minPrice
          in: query
          schema:
            type: number
        - name: maxPrice
          in: query
          schema:
            type: number
        - name: beds
          in: query
          schema:
            type: integer
        - name: baths
          in: query
          schema:
            type: number
        - name: neighborhood
          in: query
          schema:
            type: string
        - name: schoolDistrict
          in: query
          schema:
            type: string
      responses:
        '200':
          description: List of properties
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Property'
        '500':
          description: Server error

  /properties/{id}:
    get:
      summary: Get property by ID
      tags: [Properties]
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Property details
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Property'
        '404':
          description: Property not found

  /properties/search:
    post:
      summary: Search properties with advanced filters
      tags: [Properties]
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/PropertySearch'
      responses:
        '200':
          description: Search results
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Property'

components:
  schemas:
    Property:
      type: object
      required:
        - id
        - title
        - address
        - price
        - beds
        - baths
        - sqft
      properties:
        id:
          type: string
        title:
          type: string
        address:
          type: string
        price:
          type: number
        beds:
          type: integer
        baths:
          type: number
        sqft:
          type: integer
        imageUrl:
          type: string
        badges:
          type: array
          items:
            type: string
        description:
          type: string
        amenities:
          type: array
          items:
            type: string
        accessibilityFeatures:
          type: array
          items:
            type: string
        schoolDistrict:
          type: string
        neighborhood:
          type: string
        availabilityDate:
          type: string
        coordinates:
          type: object
          properties:
            lat:
              type: number
            lng:
              type: number

    PropertySearch:
      type: object
      properties:
        minPrice:
          type: number
        maxPrice:
          type: number
        beds:
          type: integer
        baths:
          type: number
        neighborhood:
          type: string
        schoolDistrict:
          type: string
        amenities:
          type: array
          items:
            type: string
        accessibilityFeatures:
          type: array
          items:
            type: string
```

### Performance Monitoring

#### Analytics Integration
```typescript
// utils/analytics.ts
export const trackAPICall = (endpoint: string, duration: number, success: boolean) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'api_call', {
      endpoint,
      duration,
      success,
      custom_parameter_1: endpoint.split('/')[2] // Extract resource name
    });
  }
  
  // Custom analytics service
  if (window.analytics) {
    window.analytics.track('API Call', {
      endpoint,
      duration,
      success
    });
  }
};

// Enhanced API client with monitoring
class MonitoredApiClient {
  private async makeRequest<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const startTime = Date.now();
    let success = false;
    
    try {
      const result = await this.performRequest<T>(endpoint, options);
      success = true;
      return result;
    } finally {
      const duration = Date.now() - startTime;
      trackAPICall(endpoint, duration, success);
    }
  }
}
```

### Security Best Practices

#### Input Validation and Sanitization
```typescript
// middleware/validation.ts
import Joi from 'joi';

const propertySchema = Joi.object({
  title: Joi.string().min(3).max(255).required(),
  address: Joi.string().min(5).max(500).required(),
  price: Joi.number().min(0).max(10000).required(),
  beds: Joi.number().integer().min(0).max(10).required(),
  baths: Joi.number().min(0).max(10).required(),
  description: Joi.string().max(2000).allow(''),
  neighborhood: Joi.string().max(255).allow(''),
  schoolDistrict: Joi.string().max(255).allow('')
});

const validateProperty = (req: any, res: any, next: any) => {
  const { error, value } = propertySchema.validate(req.body);
  
  if (error) {
    return res.status(400).json({
      error: 'Validation failed',
      details: error.details.map(detail => detail.message)
    });
  }
  
  req.body = value;
  next();
};

// Rate limiting
import rateLimit from 'express-rate-limit';

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many API requests, please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false
});
```

This enhanced documentation now provides comprehensive coverage of the Repository Pattern implementation with practical examples, testing strategies, deployment configurations, and production-ready code samples that developers can directly use and adapt for their specific needs.