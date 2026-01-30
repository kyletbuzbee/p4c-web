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
      icon: <Zap className="size-8 text-p4c-gold" />,
      component: <ClientUpscaler />,
      color: 'from-p4c-gold to-p4c-navy',
    },
    {
      id: 'ai-assistant',
      title: 'AI Housing Assistant',
      description:
        'Get personalized help with your housing needs from our AI concierge.',
      icon: <Brain className="size-8 text-p4c-navy" />,
      action: () => navigate('/'),
      color: 'from-p4c-navy to-p4c-beige',
    },
    {
      id: 'veteran-resources',
      title: 'Veteran Resources',
      description: 'Access specialized housing programs and support services.',
      icon: <Shield className="size-8 text-p4c-gold" />,
      action: () => navigate('/veterans'),
      color: 'from-p4c-gold to-p4c-navy',
    },
    {
      id: 'find-homes',
      title: 'Find Your Home',
      description: 'Browse available properties and start your application.',
      icon: <HomeIcon className="size-8 text-p4c-navy" />,
      action: () => navigate('/'),
      color: 'from-p4c-navy to-p4c-beige',
    },
  ];

  return (
    <div className="min-h-screen bg-p4c-beige">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-p4c-navy to-p4c-gold py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            Free Tools & Resources
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-p4c-beige md:text-2xl">
            Empowering veterans and families with cutting-edge tools and
            personalized support to find their perfect home in East Texas.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigate('/apply')}
              className="rounded-lg bg-white px-8 py-3 font-semibold text-p4c-navy transition-colors hover:bg-gray-100"
            >
              Start Application
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-p4c-navy"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className={`overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl${
                tool.id === 'image-upscaler' ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`bg-gradient-to-r p-6 ${tool.color}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-white/20 p-3">
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
                      className="rounded-lg bg-white px-4 py-2 font-semibold text-p4c-navy transition-colors hover:bg-gray-100"
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
                  <div className="grid grid-cols-1 gap-4 text-sm text-gray-600 md:grid-cols-3">
                    <div className="flex items-center gap-2">
                      <Users className="size-4 text-p4c-gold" />
                      <span>Expert Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ImageIcon className="size-4 text-p4c-gold" />
                      <span>Quality Guaranteed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="size-4 text-p4c-gold" />
                      <span>Veteran Focused</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="bg-p4c-gold/20 mx-auto mb-4 flex size-16 items-center justify-center rounded-full p-4">
              <Zap className="size-8 text-p4c-gold" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-p4c-navy">
              Free Tools
            </h3>
            <p className="text-gray-600">
              No hidden fees, no subscriptions - everything is completely free
              for our veterans and families.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-p4c-navy/20 mx-auto mb-4 flex size-16 items-center justify-center rounded-full p-4">
              <Brain className="size-8 text-p4c-navy" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-p4c-navy">
              AI-Powered
            </h3>
            <p className="text-gray-600">
              Leverage cutting-edge AI technology to enhance your housing
              experience.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-p4c-beige/80 mx-auto mb-4 flex size-16 items-center justify-center rounded-full p-4">
              <Shield className="size-8 text-p4c-navy" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-p4c-navy">
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
