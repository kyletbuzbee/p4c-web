
import React from 'react';
import { Award, ShieldCheck, Heart, TrendingUp, Users, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../constants/images';

const About: React.FC = () => {
  return (
    <div className="bg-p4c-beige min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[500px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img 
            src={IMAGES.BANNERS.ABOUT}
            alt="Architectural plans and safety hat" 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-p4c-navy/90 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-p4c-gold/20 backdrop-blur-sm border border-p4c-gold/30 rounded-full px-4 py-1 mb-6">
            <span className="text-p4c-gold text-xs font-bold uppercase tracking-widest">Est. 2024 • East Texas</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Restoring Homes. <br />
            <span className="text-p4c-gold">Restoring Dignity.</span>
          </h1>
          <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto">
            We are a veteran-owned company on a mission to redefine affordable housing standards through quality craftsmanship and compassionate management.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Our Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-p4c-navy mb-6">Our Mission</h2>
                <div className="w-20 h-1 bg-p4c-gold mb-8"></div>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    Properties 4 Creations (P4C) was founded with a simple but radical idea: <strong>Affordable housing shouldn't mean lower standards.</strong>
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                    As veterans, we understand the importance of a safe, stable base. When we looked at the affordable housing market in East Texas, we saw distressed properties and neglected neighborhoods. Where others saw risk, we saw potential for revitalization.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    Today, we buy distressed properties, renovate them to "homeowner standards," and rent them affordably to the people who need them most—families utilizing Section 8 vouchers and veterans in the HUD-VASH program.
                </p>
            </div>
            <div className="relative group">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-p4c-gold/20 rounded-tl-3xl -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <img 
                    src={IMAGES.TEAM.OWNER}
                    alt="P4C Team Owner" 
                    loading="lazy"
                    className="rounded-2xl shadow-2xl w-full object-cover h-[500px]" 
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-p4c-navy/10 rounded-br-3xl -z-10 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
                
                 {/* Stat Card Overlay */}
                 <div className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block border-l-4 border-p4c-gold ring-1 ring-gray-900/5">
                    <p className="text-p4c-navy font-bold text-lg italic">"We don't build houses. We build foundations for future success."</p>
                 </div>
            </div>
        </div>

        {/* The P4C Standard Section */}
        <div className="mb-32">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-p4c-navy mb-4">The P4C Standard</h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">We invest upfront in premium materials to ensure our tenants live in dignity and comfort.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 ring-1 ring-gray-900/5">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    
                    {/* Material Quality */}
                    <div className="p-10 hover:bg-gray-50 transition-colors duration-300">
                        <div className="bg-p4c-navy w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-p4c-gold shadow-lg shadow-p4c-navy/20">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold text-xl text-p4c-navy mb-4">Premium Materials</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-p4c-gold flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600 text-sm"><strong>Quartz Countertops</strong> over laminate for hygiene and longevity.</span>
                            </li>
                             <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-p4c-gold flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600 text-sm"><strong>LVP Flooring</strong> that is waterproof and scratch-resistant.</span>
                            </li>
                             <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-p4c-gold flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600 text-sm"><strong>Energy Star Appliances</strong> to lower utility costs.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Tenant Care */}
                    <div className="p-10 hover:bg-gray-50 transition-colors duration-300">
                        <div className="bg-p4c-navy w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-p4c-gold shadow-lg shadow-p4c-navy/20">
                            <Heart className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold text-xl text-p4c-navy mb-4">Dignity First Care</h3>
                        <ul className="space-y-3">
                             <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-p4c-gold flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600 text-sm"><strong>24/7 Maintenance</strong> response because things break, but trust shouldn't.</span>
                            </li>
                             <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-p4c-gold flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600 text-sm"><strong>Concierge Onboarding</strong> helps navigate voucher paperwork effortlessly.</span>
                            </li>
                             <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-p4c-gold flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600 text-sm"><strong>Community Events</strong> to foster connection among neighbors.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Community Impact */}
                    <div className="p-10 hover:bg-gray-50 transition-colors duration-300">
                         <div className="bg-p4c-navy w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-p4c-gold shadow-lg shadow-p4c-navy/20">
                            <TrendingUp className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold text-xl text-p4c-navy mb-4">Community Lift</h3>
                        <ul className="space-y-3">
                             <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-p4c-gold flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600 text-sm"><strong>Revitalizing Streets</strong> by fixing the "worst house on the block."</span>
                            </li>
                             <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-p4c-gold flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600 text-sm"><strong>Local Hiring</strong> focuses on employing East Texas veterans.</span>
                            </li>
                             <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-p4c-gold flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600 text-sm"><strong>Sustainable Building</strong> practices to reduce environmental impact.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* Leadership & Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-p4c-navy text-white p-10 rounded-2xl flex flex-col justify-center relative overflow-hidden group shadow-xl ring-1 ring-white/10">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors"></div>
                
                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-p4c-gold p-3 rounded-lg">
                             <Award className="w-8 h-8 text-p4c-navy" />
                        </div>
                        <h3 className="text-2xl font-serif font-bold">Veteran Led & Operated</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                        Our leadership team is comprised of military veterans. We bring the values of service, integrity, and mission-accomplishment to property management. 
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        We don't cut corners, and we don't leave anyone behind. That's the pledge we made in service, and it's the pledge we keep in business.
                    </p>
                </div>
            </div>

            <div className="bg-gradient-to-br from-p4c-gold to-yellow-600 text-p4c-navy p-10 rounded-2xl flex flex-col justify-center relative overflow-hidden group shadow-xl ring-1 ring-black/5">
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-white/30 transition-colors"></div>

                <div className="relative z-10">
                     <div className="flex items-center gap-4 mb-6">
                        <div className="bg-p4c-navy p-3 rounded-lg">
                             <Users className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-serif font-bold">Join the Mission</h3>
                    </div>
                    <p className="p4c-navy/90 leading-relaxed font-medium mb-8 text-lg">
                        Are you an investor looking for recession-resistant assets with a social impact? We offer opportunities to partner on single-family BRRRR projects in the East Texas market.
                    </p>
                    <button className="bg-p4c-navy text-white px-8 py-3 rounded-lg font-bold hover:bg-p4c-navy/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center gap-2">
                        Request Investor Packet <TrendingUp className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default About;
