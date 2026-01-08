import { Quote } from "lucide-react";

export function PhilosophySection() {
  return (
    <section
      className="
        py-32
        bg-[#071510]
        
        relative
        overflow-hidden
      "
    >
      {/* Subtle Grid Texture */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #cfd6d2 1px, transparent 0)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Quote Icon */}
        <Quote className="h-16 w-16 text-[#1f5e46] mx-auto mb-10 opacity-70" />

        {/* Quote */}
        <blockquote
          className="
            text-3xl
            md:text-4xl
            lg:text-5xl
            text-[#f3f4f2]
            mb-10
            leading-tight
            font-raleway
            font-semibold
          "
        >
          “We believe exceptional businesses are built on exceptional people.
          Our role is to connect ambition with opportunity — responsibly,
          strategically, and at scale.”
        </blockquote>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-[#cfd6d2]/30" />
          <p
            className="
              text-[#cfd6d2]
              text-xs
              uppercase
              tracking-[0.25em]
              font-helvetica
            "
          >
            Our Philosophy
          </p>
          <div className="h-px w-12 bg-[#cfd6d2]/30" />
        </div>
      </div>

      {/* Ambient Green Glows */}
      <div className="absolute top-20 left-12 w-72 h-72 bg-[#1f5e46] rounded-full opacity-15 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0b2a1f] rounded-full opacity-20 blur-3xl" />
    </section>
  );
}
