import React from 'react';
import { HeartHandshake, Phone, Home, Flag } from 'lucide-react';
import { IMAGES } from '../constants/images';

const Veterans: React.FC = () => (
  <div className="bg-p4c-beige min-h-screen">
    {/* Hero Banner */}
    <div className="relative h-[400px] w-full overflow-hidden flex items-center justify-center">
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
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
          Serving Those Who Served
        </h1>
        <p className="text-xl text-gray-200">
          Housing is a human right, but for veterans, it&apos;s a promise we
          keep.
        </p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-12">
          <section>
            <h2 className="text-3xl font-serif font-bold text-p4c-navy mb-4">
              The HUD-VASH Program
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Properties 4 Creation works directly with the HUD-VASH program to
              provide permanent housing for homeless veterans. This program
              combines Housing Choice Voucher (HCV) rental assistance for
              homeless Veterans with case management and clinical services
              provided by the Department of Veterans Affairs (VA).
            </p>
            <p className="text-gray-700 leading-relaxed">
              We streamline the inspection and lease-up process to get you out
              of temporary shelter and into your own home faster.
            </p>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-p4c-gold">
            <h3 className="text-2xl font-serif font-bold text-p4c-navy mb-4 flex items-center gap-2">
              <HeartHandshake className="text-p4c-gold" />
              Our Veteran Promise
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="font-bold text-p4c-gold text-xl">01</div>
                <div>
                  <h4 className="font-bold text-p4c-navy">
                    Application Priority
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Veterans move to the front of the line for all available
                    units.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold text-p4c-gold text-xl">02</div>
                <div>
                  <h4 className="font-bold text-p4c-navy">
                    Deposit Assistance
                  </h4>
                  <p className="text-gray-600 text-sm">
                    We work with local non-profits to help cover security
                    deposits.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="font-bold text-p4c-gold text-xl">03</div>
                <div>
                  <h4 className="font-bold text-p4c-navy">
                    Accessibility Modifications
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Need a ramp or grab bars? We install them at no cost to you.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar / Resources */}
        <div className="space-y-6">
          <div className="bg-p4c-navy text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Emergency Contacts
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="border-b border-gray-700 pb-2">
                <span className="block text-gray-400 text-xs uppercase tracking-wider">
                  Veterans Crisis Line
                </span>
                <span className="font-bold text-lg text-p4c-gold">
                  988 (Press 1)
                </span>
              </li>
              <li className="border-b border-gray-700 pb-2">
                <span className="block text-gray-400 text-xs uppercase tracking-wider">
                  National Call Center for Homeless Veterans
                </span>
                <span className="font-bold text-lg">1-877-4AID-VET</span>
              </li>
              <li>
                <span className="block text-gray-400 text-xs uppercase tracking-wider">
                  Properties 4 Creation Veteran Liaison
                </span>
                <span className="font-bold text-lg">(903) 555-0199</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-p4c-navy mb-4 flex items-center gap-2">
              <Home className="w-5 h-5 text-p4c-gold" />
              Local Resources
            </h3>
            <ul className="space-y-3 text-sm text-blue-600 underline">
              <li>
                <a
                  href="https://www.campv.org/tyler"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CampV Tyler
                </a>
              </li>
              <li>
                <a
                  href="https://www.tvc.texas.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Texas Veterans Commission
                </a>
              </li>
              <li>
                <a
                  href="https://www.easttexasfoodbank.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  East Texas Food Bank
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Veterans;