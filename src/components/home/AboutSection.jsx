import { Network } from 'lucide-react';

export function AboutSection({ networkImage }) {
  return (
    <section id="about" className="pt-24 pb-12 bg-[#cfdbd5]/20 font-raleway">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-block px-4 py-1.5 bg-[#f5cb5c]/20 text-[#f5cb5c] text-xs uppercase tracking-wider rounded-full mb-6 font-raleway">
              About BiznorX
            </div>
            
            <h2 className="text-4xl md:text-5xl text-[#242423] mb-6 leading-tight font-raleway font-semibold">
              Your Strategic Partner in Workforce Excellence
            </h2>
            
            <p className="text-lg text-[#333533] mb-6 leading-relaxed font-helvetica tracking-tightest">
              Built on six decades of business legacy, BiznorX delivers enterprise-grade workforce 
              and business solutions that drive growth and operational excellence.
            </p>
            
            <p className="text-lg text-[#333533] mb-8 leading-relaxed font-helvetica tracking-tightest">
              We combine deep industry expertise with modern technology to create scalable, 
              compliant, and efficient workforce strategies for businesses across India and UAE.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#f5cb5c] rounded-full" />
                <span className="text-[#242423] font-helvetica">Trust-driven</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#f5cb5c] rounded-full" />
                <span className="text-[#242423] font-helvetica">Technology-enabled</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#f5cb5c] rounded-full" />
                <span className="text-[#242423] font-helvetica">Globally scalable</span>
              </div>
            </div>
            
            <a 
              href="#story" 
              className="inline-flex items-center text-[#f5cb5c] hover:text-[#e6b846] transition-colors group font-helvetica tracking-tightest"
            >
              
              
            </a>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/svgs/linkedincard.webp"
                alt="Business network and connections"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#f5cb5c]/20 to-transparent" />
            </div>
            
            {/* Floating Element */}
            <div className="absolute -bottom-6 -left-6 bg-[#e8eddf] p-6 rounded-xl shadow-xl border border-[#cfdbd5]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f5cb5c]/20 flex items-center justify-center">
                  <Network className="h-6 w-6 text-[#f5cb5c]" />
                </div>
                <div>
                  <div className="text-2xl text-[#242423] font-raleway font-semibold">2,500+</div>
                  <div className="text-sm text-[#333533] font-helvetica tracking-tightest">Enterprise Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
