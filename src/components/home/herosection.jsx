import React from "react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] md:min-h-[90vh] md:mx-5 overflow-hidden rounded-4xl md:top-8">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/svgs/heroimage.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 rounded-4xl" />

      {/* Content Wrapper */}
      <div className="relative z-30 mx-auto min-h-[70vh] md:min-h-[90vh] w-full max-w-6xl px-6">

        {/* MAIN FLEX CONTAINER */}
        <div
          className="
            flex min-h-[70vh] md:min-h-[90vh]
            flex-col
            items-center
            justify-center
            text-white
            md:flex-row
            md:items-stretch
            md:justify-between
            md:gap-6
          "
        >

          {/* LEFT CONTENT */}
          <div
            className="
              flex flex-col
              items-center
              md:items-start
              md:flex-1
              md:justify-end
              lg:pb-20
              md:pb-20
              md:pl-10
            "
          >
            <span className="text-center font-dm text-[#F9E8BD] md:text-left text-3xl md:text-[2.5rem] font-semibold">
              Innovate, Integrity,<br className="hidden md:block" />
              And Building Your Future
            </span>
          </div>

          {/* RIGHT CONTENT */}
          <div
            className="
              mt-6
              flex flex-col
              items-center
              md:mt-0
              md:items-start
              md:flex-1
              md:justify-end
              lg:pb-15
              lg:pl-40
              md:pb-15
              md:pl-10
              gap-6
            "
          >
            <span className="text-center font-dm md:text-left text-sm md:text-xl text-[#F9E8BD] max-w-md">
              Bridging decades of business wisdom with
              <br className="hidden md:block" />
              modern digital execution to help organizations
              scale with confidence
            </span>

            <a
              href="#homepage"
              className="
                inline-block
                rounded-xl
                font-dm
                bg-[#F9E8BD]
                hover:bg-[#edd5ab]
                md:px-5 md:py-2.5
                px-4 py-2
                text-black
                font-semibold
                transition-all duration-200
                md:text-md
                shadow-2xl
              "
            >
              Upload Your CV
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
