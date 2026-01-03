import React from "react";

const Herosection = () => {
  return (
    <div className="w-full  h-[70vh] md:h-[65vh] lg:h-[80vh] rounded-b-4xl flex justify-center">
      <div className="relative  w-full max-w-[90rem] h-full rounded-b-4xl overflow-hidden">

        {/* Background Image */}
        <img
          src="/svgs/recruithero.jpg"
          alt="hero picture"
          className="absolute inset-0 w-full h-full object-cover object-bottom scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/20 to-black/90" />

        {/* Content Layer */}
        <div className="relative top-1/20 z-10 w-full h-full flex items-center justify-center px-4 md:px-12">

          {/* Content wrapper */}
          <div className="absolute top-1/2 -translate-y-1/2 md:mt-4 flex flex-col items-center gap-5 md:gap-6 w-[90%] md:w-[70%] lg:w-[60%] text-center font-poppins">

            {/* Eyebrow */}
            <span className="text-xs md:text-sm uppercase tracking-widest text-gray-300">
              Workforce & Business Solutions
            </span>

            {/* Main Heading */}
            <h1
              className="
                text-white
                text-2xl md:text-4xl lg:text-5xl
                font-semibold
                leading-snug md:leading-tight
                drop-shadow-[0_6px_20px_rgba(0,0,0,0.6)]
              "
            >
              A New-Age Business Street Built on Legacy, Trust, and Innovation
            </h1>

            {/* Subtext */}
            <p className="text-xs font-montserrat md:text-sm uppercase tracking-widest text-gray-100">
              Bridging decades of business wisdom with modern digital execution
              to help organizations scale with confidence.
            </p>

            {/* CTA */}
            <button
              className="
                mt-3
                bg-white text-black
                px-8 py-3
                rounded-full
                text-sm md:text-base font-medium
                hover:bg-gray-100
                hover:scale-[1.03]
                transition-all duration-300
                shadow-lg
              "
            >
              Explore Our Services 
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Herosection;
