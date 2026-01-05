import React from 'react';
import { Helmet } from 'react-helmet-async';
import { IMAGES } from '../constants/images';
import { Flag, Briefcase, Users, Home, Shield, Phone } from 'lucide-react';

const VeteranServices: React.FC = () => {
  return (
    <div className="bg-p4c-beige min-h-screen">
      <Helmet>
        <title>Veteran Services | Properties 4 Creations</title>
        <meta name="description" content="Comprehensive housing and support services for veterans in East Texas. HUD-VASH, employment, and community integration." />
      </Helmet>

      {/* Hero Banner */}
      <div className="relative h-[400px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img
            src={IMAGES.BANNERS.HERO_RESOURCES}
            alt="American flag flying on a front porch"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full hero-overlay-primary"></div>
          <div className="absolute top-0 left-0 w-full h-full hero-overlay-secondary"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <div className="flex justify-center mb-4">
            <div className="bg-p4c-gold p-3 rounded-full shadow-lg">
                <Flag className="w-8 h-8 text-p4c-navy" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 hero-text-contrast">
            Serving Those Who Served
          </h1>
          <p className="text-xl text-gray-200 hero-text-enhanced">
             We don't just provide housing; we provide a home base for your next chapter.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Core Services Grid */}
        <div className="mb-20">
            <h2 className="text-3xl font-serif font-bold text-p4c-navy text-center mb-12">Our Veteran Commitments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { icon: Home, title: "Priority Housing", text: "Veterans receive priority placement for all available units. We hold units for up to 7 days for VASH voucher processing." },
                    { icon: Shield, title: "Deposit Assistance", text: "We partner with local non-profits like CampV to help cover security deposits and move-in costs." },
                    { icon: Users, title: "Community Connection", text: "Regular meetups and a network of veteran residents to foster camaraderie and combat isolation." },
                    { icon: Briefcase, title: "Employment Support", text: "Direct hiring pipeline for Properties 4 Creation renovation projects and referrals to veteran-friendly local employers." },
                    { icon: Users, title: "Benefits Navigation", text: "Our staff is trained to help you navigate VA paperwork and connect with County Service Officers." },
                    { icon: Phone, title: "24/7 Support Line", text: "Dedicated maintenance and support line for veteran residents to ensure your needs are met promptly." },
                ].map((service, i) => (
                    <div key={i} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-p4c-gold">
                        <service.icon className="w-10 h-10 text-p4c-navy mb-4" />
                        <h3 className="text-xl font-bold text-p4c-navy mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.text}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Specialized Housing Programs */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-20 border border-gray-100">
            <div className="bg-p4c-navy p-8 text-white">
                <h2 className="text-3xl font-serif font-bold">Specialized Housing Programs</h2>
                <p className="text-gray-300 mt-2">We accept and understand the following vouchers.</p>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-p4c-navy mb-2 flex items-center gap-2">
                        <span className="bg-p4c-gold w-2 h-8 rounded-full"></span> HUD-VASH
                    </h3>
                    <p className="text-gray-600 mb-4">
                        We work directly with VA case managers to expedite inspections and lease-ups for the HUD-VASH program, ensuring homeless veterans move off the streets immediately.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-p4c-navy mb-2 flex items-center gap-2">
                        <span className="bg-p4c-gold w-2 h-8 rounded-full"></span> Section 8 (HCV)
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Standard Housing Choice Vouchers are welcomed with no discrimination. Our properties pass HQS inspections on the first attempt 98% of the time.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-p4c-navy mb-2 flex items-center gap-2">
                        <span className="bg-p4c-gold w-2 h-8 rounded-full"></span> Rapid Rehousing
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Short-term rental assistance programs are accepted. We offer flexible lease terms to align with program duration.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-p4c-navy mb-2 flex items-center gap-2">
                        <span className="bg-p4c-gold w-2 h-8 rounded-full"></span> Disability Accessibility
                    </h3>
                    <p className="text-gray-600 mb-4">
                        We provide reasonable accommodations including ramps, grab bars, and visual alarms at no cost to disabled veteran tenants.
                    </p>
                </div>
            </div>
        </div>

        {/* Resources Directory */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
                <h2 className="text-2xl font-serif font-bold text-p4c-navy mb-6">Local Veteran Resources Directory</h2>
                <div className="space-y-4">
                    {[
                        { name: "CampV Tyler", desc: "Holistic veteran support campus.", phone: "(903) 566-1010" },
                        { name: "Texas Veterans Commission", desc: "Claims representation and employment services.", phone: "(512) 463-6564" },
                        { name: "Smith County VSO", desc: "Local assistance with VA claims.", phone: "(903) 590-2930" },
                        { name: "VA Clinic - Tyler", desc: "Primary care and mental health services.", phone: "(903) 590-3050" },
                    ].map((res, i) => (
                        <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:border-p4c-gold transition-colors">
                            <div>
                                <h4 className="font-bold text-p4c-navy text-lg">{res.name}</h4>
                                <p className="text-gray-600 text-sm">{res.desc}</p>
                            </div>
                            <div className="mt-4 sm:mt-0">
                                <a href={`tel:${res.phone.replace(/\D/g,'')}`} className="text-p4c-gold font-bold hover:underline flex items-center gap-2">
                                    <Phone className="w-4 h-4" /> {res.phone}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="bg-p4c-navy text-white p-8 rounded-2xl h-fit">
                <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
                <p className="text-gray-300 mb-6 text-sm">
                    If you are a veteran in crisis or at risk of homelessness, please contact the Veterans Crisis Line immediately.
                </p>
                <a href="tel:988" className="block w-full bg-p4c-gold text-p4c-navy text-center py-3 rounded-lg font-bold hover:bg-white transition-colors mb-4">
                    Call 988 (Press 1)
                </a>
                <p className="text-center text-xs text-gray-400">Confidential • 24/7 • Free</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default VeteranServices;
