import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HeartHandshake, Phone, Home, Flag } from 'lucide-react';
import { IMAGES } from '../constants/images';

const Veterans: React.FC = () => (
  <>
    <Helmet>
      <title>Veteran Housing Support | HUD-VASH Program | Properties 4 Creation</title>
      <meta
        name="description"
        content="Veteran housing support with HUD-VASH program assistance, priority application processing, deposit assistance, and accessibility modifications for East Texas veterans."
      />
      <meta name="keywords" content="veteran housing, HUD-VASH program, veteran rental assistance, veteran housing East Texas, VA housing support, veteran priority housing" />
    </Helmet>
  <div className="bg-p4c-beige min-h-screen">
    {/* Hero Banner */}
    <div className="relative h-[300px] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src={IMAGES.BANNERS.HERO_HOME}
          alt="Clean, restored P4C property in Tyler, Texas"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-p4c-navy/80 mix-blend-multiply" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex justify-center mb-4">
          <div className="bg-p4c-gold p-3 rounded-full">
            <Flag className="w-8 h-8 text-p4c-navy" />
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
          Veteran Housing Support
        </h1>
        <p className="text-lg text-gray-200">
          Priority housing and support services for veterans in East Texas.
        </p>
      </div>
    </div>

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-serif font-bold text-p4c-navy mb-4">
              HUD-VASH Program Support
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We work directly with HUD-VASH to provide permanent housing for veterans,
              streamlining inspections and lease-up processes.
            </p>
          </section>

          <section className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-p4c-gold">
            <h3 className="text-xl font-serif font-bold text-p4c-navy mb-4 flex items-center gap-2">
              <HeartHandshake className="text-p4c-gold" />
              Veteran Housing Benefits
            </h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="font-bold text-p4c-gold">"</div>
                <div>
                  <h4 className="font-bold text-p4c-navy text-sm">
                    Priority Application Processing
                  </h4>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="font-bold text-p4c-gold">"</div>
                <div>
                  <h4 className="font-bold text-p4c-navy text-sm">
                    Deposit Assistance Available
                  </h4>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="font-bold text-p4c-gold">"</div>
                <div>
                  <h4 className="font-bold text-p4c-navy text-sm">
                    Accessibility Modifications
                  </h4>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar / Resources */}
        <div className="space-y-6">
          <div className="bg-p4c-navy text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Crisis Support
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="block text-gray-400 text-xs uppercase tracking-wider">
                  Veterans Crisis Line
                </span>
                <span className="font-bold text-p4c-gold">988 (Press 1)</span>
              </div>
              <div>
                <span className="block text-gray-400 text-xs uppercase tracking-wider">
                  P4C Veteran Liaison
                </span>
                <span className="font-bold">(903) 555-0199</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-p4c-navy mb-4 flex items-center gap-2">
              <Home className="w-4 h-4 text-p4c-gold" />
              Key Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.campv.org/tyler"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  CampV Tyler
                </a>
              </li>
              <li>
                <a
                  href="https://www.tvc.texas.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Texas Veterans Commission
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
);

export default Veterans;