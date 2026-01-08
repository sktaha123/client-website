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
        from-[#cfdbd5]/10
        via-[#e8eddf]
        to-[#cfdbd5]

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
          max-w-3xl

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
            text-[#f5cb5c]
          "
        >
          Workforce & Business Solutions
        </span>

        {/* Heading */}
        <h1
          className="
            font-raleway
            text-4xl
            sm:text-4xl
            md:text-5xl
            font-semibold
            text-[#242423]
            leading-tight
            md:leading-snug
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
            text-[#333533]
          "
        >
          Bridging decades of business wisdom with modern digital execution to
          help organizations scale with confidence.
        </p>

        {/* CTA */}
        <div className="pt-4">
          <button
            className="
              bg-[#f5cb5c]
              hover:bg-[#e6b846]

              font-helvetica
              tracking-tightest
              text-base
              sm:text-lg
              font-semibold
              text-[#242423]

              text-white
              px-6
              py-2.5
              sm:py-3
              rounded-xl

              transition-all
              duration-200
              hover:-translate-y-1
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
