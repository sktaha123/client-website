import { Network } from "lucide-react";

export function AboutSection({ networkImage }) {
  return (
    <section
      id="about"
      className="pt-24 pb-12 bg-[#071510] font-raleway"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <div>
            <div
              className="
                inline-block
                px-4 py-1.5
                bg-[#1f5e46]/15
                text-[#cfd6d2]
                text-xs
                uppercase
                tracking-wider
                rounded-full
                mb-6
                font-raleway
              "
            >
              About BiznorX
            </div>

            <h2
              className="
                text-4xl md:text-5xl
                text-[#f3f4f2]
                mb-6
                leading-tight
                font-raleway
                font-semibold
              "
            >
              Your Strategic Partner in Workforce Excellence
            </h2>

            <p
              className="
                text-lg
                text-[#cfd6d2]
                mb-6
                leading-relaxed
                font-helvetica
                tracking-tightest
              "
            >
              Built on six decades of business legacy, BiznorX delivers
              enterprise-grade workforce and business solutions that strengthen
              operational resilience and long-term growth.
            </p>

            <p
              className="
                text-lg
                text-[#cfd6d2]
                mb-8
                leading-relaxed
                font-helvetica
                tracking-tightest
              "
            >
              We combine deep industry expertise with disciplined processes and
              modern technology to design scalable, compliant workforce
              strategies across India and the UAE.
            </p>

            {/* Key Attributes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {[
                "Trust-driven",
                "Technology-enabled",
                "Globally scalable",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#1f5e46] rounded-full" />
                  <span className="text-[#f3f4f2] font-helvetica">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#cfd6d2]/10">
              <img
                src="/svgs/linkedincard.webp"
                alt="Business network and connections"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1f5e46]/25 to-transparent" />
            </div>

            {/* Floating Metric */}
            <div
              className="
                absolute
                -bottom-6
                -left-6
                bg-[#0b2a1f]
                p-6
                rounded-xl
                shadow-[0_20px_40px_rgba(0,0,0,0.45)]
                border border-[#cfd6d2]/10
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    w-12 h-12
                    rounded-full
                    bg-[#1f5e46]/20
                    flex items-center justify-center
                  "
                >
                  <Network className="h-6 w-6 text-[#f3f4f2]" />
                </div>

                <div>
                  <div className="text-2xl text-[#f3f4f2] font-raleway font-semibold">
                    2,500+
                  </div>
                  <div className="text-sm text-[#cfd6d2] font-helvetica tracking-tightest">
                    Enterprise Clients
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
