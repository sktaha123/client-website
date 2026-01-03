import React from "react";

const Herosection = () => {
  return (
    <div className="w-full  h-[50vh] md:h-[65vh] lg:h-[80vh] rounded-b-3xl flex justify-center">
      <div className="relative  w-full max-w-[90rem] h-full rounded-b-3xl overflow-hidden">

        {/* Background Image */}
        <img
          src="/svgs/recruithero1.jpg"
          alt="hero picture"
          className="absolute inset-0 w-full h-full object-cover object-bottom scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/90" />

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
                text-gray-50
                text-2xl md:text-5xl lg:text-5xl
                font-bold
                leading-snug md:leading-12
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
    mt-4
    inline-flex items-center justify-center gap-2
    px-4 py-2
    rounded-full
    bg-gray-50 text-black
    text-sm md:text-base font-medium
    shadow-md
    transition-all duration-300 ease-out
    cursor-pointer
    group

    hover:bg-gray-300
    hover:shadow-lg

    active:scale-[0.98]
    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-white/70
    focus-visible:ring-offset-2
    
  "
>
  <span className="transition-colors  duration-300">
    Explore Our Services
  </span>

  <span
    className="
      bg-gray-300
      p-1 rounded-full
      transition-all duration-300 ease-out

      group-hover:bg-gray-50
      group-hover:translate-x-[5px]
    "
  >
    <img src="/svgs/go.svg" alt="" className="w-5 h-5" />
  </span>
</button>



          </div>
        </div>

      </div>
    </div>
  );
};

export default Herosection;
