import { Check } from 'lucide-react';
import { useInView } from "@/hooks/useInView";

const benefits = [
    'Six decades of proven business legacy and market expertise',
    'Comprehensive compliance across all regulatory frameworks',
    'Dual-market presence with deep understanding of India and UAE',
    'Technology-driven processes for efficiency and transparency',
    'Dedicated account management and 24/7 support availability',
    'Industry-specific solutions across 15+ verticals',
    'End-to-end workforce lifecycle management',
    'Strategic partnerships with leading enterprises globally',
];

export function WhyChooseSection() {
    const { ref, isVisible } = useInView();

    return (
        <section className="py-24 bg-[#cfdbd5]/20">
            <div
                ref={ref}
                className={`
        transition-all duration-750 ease-out
        ${isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"}
      `}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Headline */}
                        <div>
                            <div className="inline-block px-4 py-1.5 bg-[#f5cb5c]/20 text-[#f5cb5c] text-xs uppercase tracking-wider rounded-full mb-6 font-raleway">
                                Why Choose BiznorX
                            </div>
                            <h2 className="text-4xl md:text-5xl text-[#242423] mb-6 leading-tight font-raleway font-semibold">
                                The Strategic Advantage You Need
                            </h2>
                            <p className="text-lg text-[#333533] leading-relaxed font-helvetica tracking-tightest">
                                We don't just provide workforce solutions—we become your strategic partner
                                in building resilient, scalable, and future-ready organizations. Our commitment
                                to excellence has made us the trusted choice for enterprise leaders across sectors.
                            </p>
                        </div>

                        {/* Right: Benefits List */}

                        <div className="grid gap-4">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-4 bg-[#e8eddf]/50 rounded-lg border border-[#cfdbd5] hover:border-[#f5cb5c]/50 hover:shadow-md transition-all group"
                                >
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#f5cb5c]/20 flex items-center justify-center mt-0.5 group-hover:bg-[#f5cb5c]/40 transition-colors">
                                        <Check className="h-4 w-4 text-[#f5cb5c]" />
                                    </div>
                                    <p className="text-[#242423] leading-relaxed font-helvetica tracking-tightest">
                                        {benefit}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
