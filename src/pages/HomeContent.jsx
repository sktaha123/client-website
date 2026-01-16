function HomeContent() {
    return (
        <section className="bg-biz-cream font-dm relative">
           <div
  className="
    w-full
    
    md:px-8
   
    md:pt-8
    md:pb-24
    md:min-h-[70vh]
    flex
    items-start
    justify-center
  "
>

                {/* Framed container */}
                <div
                    className="
            w-full
            bg-white/80
            backdrop-blur-[2px]
            md:rounded-[var(--radius-biz)]
        
            
            md:shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)]
            px-8
            py-14
            md:px-16
            md:py-20
          "
                >
                    {/* Intro */}
                    <div className="max-w-3xl mb-16">
                        <p className="text-lg md:text-xl leading-relaxed text-biz-charcoal-muted">
                            <span className="text-biz-charcoal font-medium">
                                <span className="text-biz-charcoal-ink lg:text-2xl font-bold">biznor</span><span className="text-biz-bronze lg:text-2xl font-bold">X</span> is a recruitment and workforce solutions platform
                            </span>{" "}
                            designed to help organizations make confident hiring decisions.
                            By combining{" "}
                            <span className="text-biz-bronze font-medium">
                                structured evaluation, business intelligence, and human judgment
                            </span>
                            , biznorx ensures that every recruitment outcome aligns with both
                            immediate role requirements and long-term organizational goals.
                            Operating across{" "}
                            <span className="font-medium text-biz-charcoal">
                                India and the UAE
                            </span>
                            , biznorx supports companies at every stage of growth.
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">

                        {/* Item */}
                        <div>
                            <span className="professional-label mb-4 block">
                                Core Focus
                            </span>
                            <h2 className="text-2xl font-bold mb-4 tracking-tight">
                                What biznorx Does
                            </h2>
                            <p className="text-biz-charcoal-muted leading-relaxed">
                                biznorx focuses on{" "}
                                <span className="font-medium text-biz-charcoal">
                                    structured recruitment execution
                                </span>{" "}
                                rather than volume-based hiring. Each engagement begins with
                                understanding role intent, organizational structure, and
                                business direction.
                            </p>
                        </div>

                        {/* Item */}
                        <div>
                            <span className="professional-label mb-4 block">
                                Solutions
                            </span>
                            <h2 className="text-2xl font-bold mb-4 tracking-tight">
                                Recruitment & Workforce Solutions
                            </h2>
                            <p className="text-biz-charcoal-muted leading-relaxed">
                                Our recruitment solutions are built around{" "}
                                <span className="font-medium text-biz-charcoal">
                                    clarity and accountability
                                </span>
                                . biznorx assists organizations with talent acquisition,
                                workforce planning, and hiring optimization using consistent
                                evaluation frameworks.
                            </p>
                        </div>

                        {/* Item */}
                        <div>
                            <span className="professional-label mb-4 block">
                                Experience
                            </span>
                            <h2 className="text-2xl font-bold mb-4 tracking-tight">
                                Industries We Serve
                            </h2>
                            <p className="text-biz-charcoal-muted leading-relaxed">
                                biznorx works across technology, manufacturing, logistics,
                                finance, healthcare, and professional services, adapting
                                strategies based on{" "}
                                <span className="italic">
                                    sector-specific workforce complexity
                                </span>
                                .
                            </p>
                        </div>

                        {/* Item */}
                        <div>
                            <span className="professional-label mb-4 block">
                                Differentiation
                            </span>
                            <h2 className="text-2xl font-bold mb-4 tracking-tight">
                                Why Choose biznorx
                            </h2>
                            <p className="text-biz-charcoal-muted leading-relaxed">
                                biznorx prioritizes{" "}
                                <span className="font-medium text-biz-charcoal">
                                    execution integrity
                                </span>
                                . Every recommendation is supported by verified data and clear
                                reasoning. Speed is never chosen over alignment.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeContent;
