import { motion } from "framer-motion";

const revealVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
      delay: index * 0.1,
    },
  }),
};

function HomeContent() {
  return (
    <section className="bg-biz-cream font-dm relative">
      <div
        className="
          w-full
          md:max-w-[90rem]
          mx-auto
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
            bg-white/70
            md:rounded-[var(--radius-biz)]
            md:shadow-[0_30px_20px_-40px_rgba(0,0,0,0.25)]
            px-8
            py-14
            md:px-16
            md:py-20
          "
        >
          {/* Intro */}
          <motion.div
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            className="max-w-3xl mb-16"
          >
            <p className="text-lg md:text-xl leading-relaxed text-biz-charcoal-muted">
              <span className="text-biz-charcoal font-medium">
                <span className="text-biz-charcoal-ink lg:text-2xl font-bold">
                  biznor
                </span>
                <span className="text-biz-bronze lg:text-2xl font-bold">X</span>{" "}
                is a recruitment and workforce solutions platform
              </span>{" "}
              designed to help organizations make confident hiring decisions. By
              combining{" "}
              <span className="text-biz-bronze font-medium">
                structured evaluation, business intelligence, and human judgment
              </span>
              , biznor
              <span className="text-biz-bronze lg:text-xl font-bold">x</span>{" "}
              ensures that every recruitment outcome aligns with both immediate
              role requirements and long-term organizational goals. Operating
              across{" "}
              <span className="font-medium text-biz-charcoal">
                India and the UAE
              </span>
              , biznorx supports companies at every stage of growth.
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
            {[
              {
                label: "Core Focus",
                title: (
                  <>
                    What biznor
                    <span className="text-biz-bronze lg:text-2xl font-bold">
                      x
                    </span>{" "}
                    Does
                  </>
                ),
                content: (
                  <>
                    biznor
                    <span className="text-biz-bronze lg:text-1xl font-bold">
                      x
                    </span>{" "}
                    focuses on{" "}
                    <span className="font-medium text-biz-charcoal">
                      structured recruitment execution
                    </span>{" "}
                    rather than volume-based hiring. Each engagement begins with
                    understanding role intent, organizational structure, and
                    business direction.
                  </>
                ),
              },
              {
                label: "Solutions",
                title: "Recruitment & Workforce Solutions",
                content: (
                  <>
                    Our recruitment solutions are built around{" "}
                    <span className="font-medium text-biz-charcoal">
                      clarity and accountability
                    </span>
                    . biznor
                    <span className="text-biz-bronze lg:text-1xl font-bold">
                      x
                    </span>{" "}
                    assists organizations with talent acquisition, workforce
                    planning, and hiring optimization using consistent evaluation
                    frameworks.
                  </>
                ),
              },
              {
                label: "Experience",
                title: "Industries We Serve",
                content: (
                  <>
                    biznor
                    <span className="text-biz-bronze lg:text-1xl font-bold">
                      x
                    </span>{" "}
                    works across technology, manufacturing, logistics, finance,
                    healthcare, and professional services, adapting strategies
                    based on{" "}
                    <span className="italic">
                      sector-specific workforce complexity
                    </span>
                    .
                  </>
                ),
              },
              {
                label: "Differentiation",
                title: (
                  <>
                    Why Choose biznor
                    <span className="text-biz-bronze lg:text-2xl font-bold">
                      x
                    </span>
                  </>
                ),
                content: (
                  <>
                    biznor
                    <span className="text-biz-bronze lg:text-1xl font-bold">
                      x
                    </span>{" "}
                    prioritizes{" "}
                    <span className="font-medium text-biz-charcoal">
                      execution integrity
                    </span>
                    . Every recommendation is supported by verified data and
                    clear reasoning. Speed is never chosen over alignment.
                  </>
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={revealVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <span className="professional-label mb-4 block">
                  {item.label}
                </span>
                <h2 className="text-2xl font-bold mb-4 tracking-tight">
                  {item.title}
                </h2>
                <p className="text-biz-charcoal-muted leading-relaxed">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeContent;
