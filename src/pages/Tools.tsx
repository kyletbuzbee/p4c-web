import React from 'react';
import ClientUpscaler from '../components/ClientUpscaler';
import { useNavigate } from 'react-router-dom';
import {
  Zap,
  Image as ImageIcon,
  Brain,
  Shield,
  Users,
  Home as HomeIcon,
} from 'lucide-react';

const Tools: React.FC = () => {
  const navigate = useNavigate();

  const tools = [
    {
      id: 'image-upscaler',
      title: 'Free Image Upscaler',
      description:
        'Enhance your property photos with AI - 2x resolution, completely free!',
      icon: <Zap className="w-8 h-8 text-p4c-gold" />,
      component: <ClientUpscaler />,
      color: 'from-p4c-gold to-p4c-navy',
    },
    {
      id: 'ai-assistant',
      title: 'AI Housing Assistant',
      description:
        'Get personalized help with your housing needs from our AI concierge.',
      icon: <Brain className="w-8 h-8 text-p4c-navy" />,
      action: () => navigate('/'),
      color: 'from-p4c-navy to-p4c-beige',
    },
    {
      id: 'veteran-resources',
      title: 'Veteran Resources',
      description: 'Access specialized housing programs and support services.',
      icon: <Shield className="w-8 h-8 text-p4c-gold" />,
      action: () => navigate('/veterans'),
      color: 'from-p4c-gold to-p4c-navy',
    },
    {
      id: 'find-homes',
      title: 'Find Your Home',
      description: 'Browse available properties and start your application.',
      icon: <HomeIcon className="w-8 h-8 text-p4c-navy" />,
      action: () => navigate('/'),
      color: 'from-p4c-navy to-p4c-beige',
    },
  ];

  return (
    <div className="min-h-screen bg-p4c-beige">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-p4c-navy to-p4c-gold text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Free Tools & Resources
          </h1>
          <p className="text-xl md:text-2xl text-p4c-beige mb-8 max-w-3xl mx-auto">
            Empowering veterans and families with cutting-edge tools and
            personalized support to find their perfect home in East Texas.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigate('/apply')}
              className="bg-white text-p4c-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Application
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-p4c-navy transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                tool.id === 'image-upscaler' ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`p-6 bg-gradient-to-r ${tool.color}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      {tool.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{tool.title}</h3>
                      <p className="text-white/90">{tool.description}</p>
                    </div>
                  </div>
                  {tool.action && (
                    <button
                      onClick={tool.action}
                      className="bg-white text-p4c-navy px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Get Started
                    </button>
                  )}
                </div>
              </div>

              {tool.id === 'image-upscaler' && (
                <div className="p-6">{tool.component}</div>
              )}

              {tool.id !== 'image-upscaler' && (
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-p4c-gold" />
                      <span>Expert Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ImageIcon className="w-4 h-4 text-p4c-gold" />
                      <span>Quality Guaranteed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-p4c-gold" />
                      <span>Veteran Focused</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-p4c-gold/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Zap className="w-8 h-8 text-p4c-gold" />
            </div>
            <h3 className="text-xl font-semibold text-p4c-navy mb-2">
              Free Tools
            </h3>
            <p className="text-gray-600">
              No hidden fees, no subscriptions - everything is completely free
              for our veterans and families.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-p4c-navy/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Brain className="w-8 h-8 text-p4c-navy" />
            </div>
            <h3 className="text-xl font-semibold text-p4c-navy mb-2">
              AI-Powered
            </h3>
            <p className="text-gray-600">
              Leverage cutting-edge AI technology to enhance your housing
              experience.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-p4c-beige/80 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Shield className="w-8 h-8 text-p4c-navy" />
            </div>
            <h3 className="text-xl font-semibold text-p4c-navy mb-2">
              Veteran Support
            </h3>
            <p className="text-gray-600">
              Specialized resources and support tailored specifically for
              veterans and their families.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
