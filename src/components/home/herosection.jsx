import React from "react";

const HeroSection = () => {
  return (
    <section
      className="
        min-h-screen
        flex
        items-center
        justify-center

        bg-gradient-to-b
        from-[#050807]
        via-[#071510]
        to-[#0b2a1f]

        px-4
        sm:px-6
        lg:px-8

        py-16
        sm:py-20
        lg:py-28
      "
    >
      <div
        className="
          w-full
          max-w-4xl
          md:max-w-5xl

          flex
          flex-col
          items-center

          text-center

          space-y-4
          sm:space-y-6
          md:space-y-8
        "
      >
        {/* Eyebrow */}
        <span
          className="
            font-raleway
            uppercase
            tracking-wide
            text-sm
            sm:text-base
            font-semibold
            text-[#1f5e46]
          "
        >
          Workforce & Business Solutions
        </span>

        {/* Heading */}
        <h1
          className="
            font-inter
            text-5xl
            sm:text-5xl
            md:text-6xl
            lg:text-[4.20rem]

            font-semibold
            text-[#f3f4f2]
            leading-tight
            
          "
        >
          A Modern Business Street Built on Trust and Innovation
        </h1>

        {/* Description */}
        <p
          className="
            font-helvetica
            tracking-tightest
            text-base
            sm:text-lg
            md:text-xl
            text-[#cfd6d2]
          "
        >
          Bridging decades of business wisdom with modern digital execution to
          help organizations scale with confidence.
        </p>

        {/* CTA */}
        <div className="pt-4">
          <button
            className="
              bg-[#1f5e46]
              hover:bg-[#2a7a5c]

              font-helvetica
              tracking-tightest
              text-base
              sm:text-lg
              font-semibold

              text-[#f3f4f2]
              px-6
              py-2.5
              sm:py-3
              rounded-xl

              transition-all
              duration-200
              hover:-translate-y-1
              hover:shadow-[0_12px_30px_rgba(31,94,70,0.45)]
            "
          >
            Submit CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
