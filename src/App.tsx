import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Loader2 } from 'lucide-react';

// Layout & UI Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import SkipLink from './components/SkipLink';
import ProtectedRoute from './components/ProtectedRoute';
import CookieConsent from './components/CookieConsent';
import AccessibilityTools from './components/AccessibilityTools';
import { UpdateNotification } from './components/UpdateNotification'; // + ADDED: PWA Support
import FloatingChatbot from './components/FloatingChatbot';

// Context Providers
import { ToastProvider } from './context/ToastContext';
import { AuthProvider } from './context/AuthContext';
import { DarkModeProvider } from './context/DarkModeContext';
import { ImageFormatProvider } from './context/ImageFormatContext';

// Lazy Load Pages
const Home = React.lazy(() => import('./pages/Home'));
const Community = React.lazy(() => import('./pages/Community')); // + ADDED: 53% Mission
const Properties = React.lazy(() => import('./pages/Properties')); // + ADDED: 35% Mission (List View)
const PropertyDetails = React.lazy(() => import('./pages/PropertyDetails'));
const Application = React.lazy(() => import('./pages/Application'));
const FamilyResources = React.lazy(() => import('./pages/FamilyResources'));
const Veterans = React.lazy(() => import('./pages/Veterans'));
const VeteranServices = React.lazy(() => import('./pages/VeteranServices'));
const HomeownerSolutions = React.lazy(
  () => import('./pages/HomeownerSolutions')
);
const OurImpact = React.lazy(() => import('./pages/OurImpact'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Employment = React.lazy(() => import('./pages/Employment'));
const TenantLogin = React.lazy(() => import('./pages/TenantLogin'));
const AdminDashboard = React.lazy(() => import('./pages/AdminDashboard'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Faq = React.lazy(() => import('./pages/FAQ'));
const AccessibilityStatement = React.lazy(
  () => import('./pages/AccessibilityStatement')
);
const EqualHousing = React.lazy(() => import('./pages/EqualHousing'));
const SuccessStories = React.lazy(() => import('./pages/SuccessStories'));
const Transparency = React.lazy(() => import('./pages/Transparency'));
const TestPropertyForm = React.lazy(() => import('./pages/TestPropertyForm'));

// Loading Fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-p4c-beige">
    <Loader2 className="w-12 h-12 text-p4c-gold animate-spin" />
    <span className="sr-only">Loading content...</span>
  </div>
);

// Standard Layout Component
const StandardLayout = () => (
  <>
    <Navbar />
    {/* + ADDED: PWA Notification Bar */}
    <UpdateNotification />

    <main id="main-content" className="flex-grow">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* --- 53% COMMUNITY (Revitalization) --- */}
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/impact" element={<OurImpact />} />
          <Route path="/stories" element={<SuccessStories />} />
          <Route path="/transparency" element={<Transparency />} />
          {/* --- 35% FAMILIES (Housing) --- */}
          <Route path="/properties" element={<Properties />} />{' '}
          {/* List View */}
          <Route path="/properties/:id" element={<PropertyDetails />} />{' '}
          {/* Detail View */}
          <Route path="/apply" element={<Application />} />
          <Route path="/family-resources" element={<FamilyResources />} />
          <Route path="/equal-housing" element={<EqualHousing />} />
          {/* --- 6% VETERANS --- */}
          <Route path="/veterans" element={<Veterans />} />
          <Route path="/veteran-services" element={<VeteranServices />} />
          {/* --- 6% INVESTORS --- */}
          <Route path="/homeowner-solutions" element={<HomeownerSolutions />} />
          {/* --- UTILITY / SUPPORT --- */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/employment" element={<Employment />} />
          <Route path="/portal" element={<TenantLogin />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/accessibility" element={<AccessibilityStatement />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* --- TEST ROUTES --- */}
          <Route path="/test-property-form" element={<TestPropertyForm />} />
          {/* --- PROTECTED ROUTES --- */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute requiredRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </main>
    <AccessibilityTools />
    <Footer />
    <CookieConsent />
    <FloatingChatbot />
  </>
);

function App() {
  // Ensure we scroll to top on route change
  return (
    <HelmetProvider>
      <ToastProvider>
        <ErrorBoundary>
          <DarkModeProvider>
            <ImageFormatProvider>
              <AuthProvider>
                <div className="font-sans antialiased text-p4c-navy bg-p4c-beige min-h-screen flex flex-col">
                  <SkipLink />
                  <ScrollToTop />
                  <Routes>
                    <Route path="*" element={<StandardLayout />} />
                  </Routes>
                </div>
              </AuthProvider>
            </ImageFormatProvider>
          </DarkModeProvider>
        </ErrorBoundary>
      </ToastProvider>
    </HelmetProvider>
  );
}

export default App;
