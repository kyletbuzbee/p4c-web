import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import { ToastProvider } from './context/ToastContext';
import { AuthProvider } from './context/AuthContext';
import { DarkModeProvider } from './context/DarkModeContext';
import AIChatbot from './components/AIChatbot';
import CookieConsent from './components/CookieConsent';
import AccessibilityTools from './components/AccessibilityTools';
import { Loader2 } from 'lucide-react';

// Lazy Load All Pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Employment = React.lazy(() => import('./pages/Employment'));
const Application = React.lazy(() => import('./pages/Application'));
const Veterans = React.lazy(() => import('./pages/Veterans'));
const VeteranServices = React.lazy(() => import('./pages/VeteranServices'));
const Contact = React.lazy(() => import('./pages/Contact'));
const PropertyDetails = React.lazy(() => import('./pages/PropertyDetails'));
const Transparency = React.lazy(() => import('./pages/Transparency'));
const OurImpact = React.lazy(() => import('./pages/OurImpact'));
const TenantLogin = React.lazy(() => import('./pages/TenantLogin'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const AccessibilityStatement = React.lazy(
  () => import('./pages/AccessibilityStatement')
);
const EqualHousing = React.lazy(() => import('./pages/EqualHousing'));
const SuccessStories = React.lazy(() => import('./pages/SuccessStories'));
const AdminDashboard = React.lazy(() => import('./pages/AdminDashboard'));
const FAQ = React.lazy(() => import('./pages/FAQ'));

// Loading Fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-p4c-beige">
    <Loader2 className="w-12 h-12 text-p4c-gold animate-spin" />
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <ToastProvider>
          <DarkModeProvider>
            <AuthProvider>
              <div className="font-sans antialiased text-p4c-navy bg-p4c-beige min-h-screen flex flex-col">
                <a href="#main-content" className="skip-link">
                  Skip to main content
                </a>
                <ScrollToTop />

                <Routes>
                  {/* Public Routes with Standard Layout */}
                  <Route
                    path="*"
                    element={
                      <>
                        <Navbar />
                        <main id="main-content" className="flex-grow">
                          <Suspense fallback={<PageLoader />}>
                            <Routes>
                              {/* Find a Home (Transactional) */}
                              <Route path="/" element={<Home />} />
                              <Route
                                path="/properties/:id"
                                element={<PropertyDetails />}
                              />
                              <Route path="/apply" element={<Application />} />
                              <Route
                                path="/equal-housing"
                                element={<EqualHousing />}
                              />

                              {/* Mission (Trust & Credibility) */}
                              <Route path="/about" element={<About />} />
                              <Route path="/impact" element={<OurImpact />} />
                              <Route
                                path="/transparency"
                                element={<Transparency />}
                              />
                              <Route
                                path="/stories"
                                element={<SuccessStories />}
                              />
                              <Route
                                path="/employment"
                                element={<Employment />}
                              />

                              {/* Residents (Service Hub) */}
                              <Route path="/veterans" element={<Veterans />} />
                              <Route
                                path="/veteran-services"
                                element={<VeteranServices />}
                              />
                              <Route path="/portal" element={<TenantLogin />} />
                              <Route path="/faq" element={<FAQ />} />
                              <Route
                                path="/accessibility"
                                element={<AccessibilityStatement />}
                              />

                              {/* Support (Connection) */}
                              <Route path="/contact" element={<Contact />} />
                              <Route
                                path="/admin"
                                element={<AdminDashboard />}
                              />
                              <Route path="/privacy" element={<Privacy />} />
                              <Route path="/terms" element={<Terms />} />
                            </Routes>
                          </Suspense>
                        </main>
                        <AIChatbot />
                        <AccessibilityTools />
                        <Footer />
                        <CookieConsent />
                      </>
                    }
                  />
                </Routes>
              </div>
            </AuthProvider>
          </DarkModeProvider>
        </ToastProvider>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
