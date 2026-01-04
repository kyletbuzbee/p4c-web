
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Quote, Star } from 'lucide-react';
import { IMAGES } from '../constants/images';

const testimonials = [
    {
        id: 1,
        name: "James & Sarah M.",
        type: "Family",
        text: "After losing our home in the pandemic, we struggled to find a landlord who would accept our assistance. P4C didn't just accept us; they welcomed us. The home is beautiful, safe, and our kids finally have a backyard again.",
        location: "Tyler, TX"
    },
    {
        id: 2,
        name: "Sgt. Michael R. (Ret.)",
        type: "Veteran",
        text: "The transition from active duty to civilian life was harder than I expected. Finding stable housing through the HUD-VASH program with P4C gave me the foundation I needed to go back to school.",
        location: "Longview, TX"
    },
    {
        id: 3,
        name: "Elena G.",
        type: "Single Mother",
        text: "I was worried about safety for my daughter. The security lighting and smart locks P4C installed made me feel secure immediately. Maintenance requests are handled in hours, not weeks.",
        location: "Kilgore, TX"
    },
    {
        id: 4,
        name: "David W.",
        type: "Veteran",
        text: "Most landlords see a voucher. P4C saw a veteran. They helped me with the paperwork and even connected me with a local job opportunity in construction.",
        location: "Tyler, TX"
    },
    {
        id: 5,
        name: "The Williams Family",
        type: "Family",
        text: "We've lived in 'affordable' housing before that was falling apart. P4C's standards are different. Granite countertops, new floors—it feels like a home we own.",
        location: "Lindale, TX"
    },
    {
        id: 6,
        name: "Robert T.",
        type: "Senior Veteran",
        text: "They installed grab bars in the shower before I even moved in. It's the little things that show they actually care about the people living here.",
        location: "Mineola, TX"
    }
];

const SuccessStories: React.FC = () => {
  return (
    <div className="bg-p4c-beige min-h-screen">
      <Helmet>
        <title>Success Stories | Properties 4 Creations</title>
        <meta name="description" content="Read real stories from families and veterans housed by Properties 4 Creations. See our impact in East Texas." />
      </Helmet>

      <div className="bg-p4c-navy text-white py-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Voices of Our Community</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Behind every key we hand over is a story of resilience, hope, and a fresh start.
          </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-20">
          
          {/* Stats Row */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-b-4 border-p4c-gold ring-1 ring-gray-900/5">
              <div>
                  <div className="text-4xl font-bold text-p4c-navy mb-2">150+</div>
                  <div className="text-gray-500 uppercase tracking-widest text-sm font-semibold">Families Housed</div>
              </div>
              <div>
                  <div className="text-4xl font-bold text-p4c-navy mb-2">45+</div>
                  <div className="text-gray-500 uppercase tracking-widest text-sm font-semibold">Veterans Served</div>
              </div>
              <div>
                  <div className="text-4xl font-bold text-p4c-navy mb-2">98%</div>
                  <div className="text-gray-500 uppercase tracking-widest text-sm font-semibold">Tenant Satisfaction</div>
              </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((story) => (
                  <div key={story.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 ring-1 ring-gray-900/5 group">
                      <div className="mb-6 text-p4c-gold">
                          <Quote className="w-10 h-10 opacity-50 group-hover:scale-110 transition-transform" />
                      </div>
                      <p className="text-gray-700 italic mb-6 flex-grow leading-relaxed">
                          "{story.text}"
                      </p>
                      <div className="border-t border-gray-100 pt-4">
                          <div className="flex items-center gap-1 text-yellow-400 mb-2">
                              {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                          </div>
                          <h4 className="font-bold text-p4c-navy">{story.name}</h4>
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                              <span className="bg-p4c-beige px-2 py-1 rounded text-p4c-navy font-semibold">{story.type}</span>
                              <span>{story.location}</span>
                          </div>
                      </div>
                  </div>
              ))}
          </div>

          {/* Video Placeholder */}
          <div className="mt-20 bg-gray-900 rounded-2xl overflow-hidden relative h-[400px] flex items-center justify-center group cursor-pointer shadow-2xl ring-1 ring-white/10">
              <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: `url('${IMAGES.BANNERS.HOME}')` }}></div>
              <div className="relative z-10 text-center px-4">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-white group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-white mb-2">See The Impact</h2>
                  <p className="text-gray-300">Video stories coming soon</p>
              </div>
          </div>

      </div>
    </div>
  );
};

export default SuccessStories;
