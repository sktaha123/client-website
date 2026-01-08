import { MapPin, Mail, Phone, Linkedin, Twitter } from "lucide-react";

const serviceLinks = [
  "Permanent Staffing",
  "Contract Staffing",
  "Payroll Management",
  "Executive Search",
  "Compliance Advisory",
  "Global Mobility",
];

const companyLinks = [
  "About Us",
  "Leadership Team",
  "Case Studies",
  "Careers",
  "Blog",
  "Contact",
];

export function Footer() {
  return (
    <footer className="bg-[#071510] text-[#cfd6d2] pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14 mb-14">

          {/* Brand */}
          <div>
            <div className="text-2xl text-[#f3f4f2] tracking-wider mb-4 font-raleway font-semibold">
              BiznorX
            </div>
            <p className="text-sm leading-relaxed mb-6 font-helvetica tracking-tightest">
              Enterprise-grade workforce and business solutions built on 60+ years
              of legacy, serving organizations across India and UAE with trust,
              discipline, and precision.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  w-10 h-10 rounded-full
                  border border-[#cfd6d2]/20
                  flex items-center justify-center
                  transition-all duration-300
                  hover:border-[#1f5e46]
                  hover:bg-[#1f5e46]/15
                "
              >
                <Linkedin className="h-4 w-4 text-[#cfd6d2]" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="
                  w-10 h-10 rounded-full
                  border border-[#cfd6d2]/20
                  flex items-center justify-center
                  transition-all duration-300
                  hover:border-[#1f5e46]
                  hover:bg-[#1f5e46]/15
                "
              >
                <Twitter className="h-4 w-4 text-[#cfd6d2]" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#f3f4f2] text-lg mb-4 font-raleway font-semibold">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="
                      text-sm font-helvetica tracking-tightest
                      inline-flex items-center
                      transition-all duration-200
                      hover:text-[#f3f4f2]
                    "
                  >
                    <span className="hover:translate-x-1 transition-transform">
                      {link}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[#f3f4f2] text-lg mb-4 font-raleway font-semibold">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="
                      text-sm font-helvetica tracking-tightest
                      inline-flex items-center
                      transition-all duration-200
                      hover:text-[#f3f4f2]
                    "
                  >
                    <span className="hover:translate-x-1 transition-transform">
                      {link}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#f3f4f2] text-lg mb-4 font-raleway font-semibold">
              Get in Touch
            </h3>

            <div className="space-y-4 text-sm font-helvetica tracking-tightest">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-[#1f5e46]" />
                <div>
                  <p className="text-[#f3f4f2] mb-1">India Office</p>
                  <p>Mumbai, Maharashtra</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-[#1f5e46]" />
                <div>
                  <p className="text-[#f3f4f2] mb-1">UAE Office</p>
                  <p>Dubai, United Arab Emirates</p>
                </div>
              </div>

              <a
                href="mailto:contact@biznorx.com"
                className="
                  flex items-center gap-3
                  transition-all duration-200
                  hover:text-[#f3f4f2]
                "
              >
                <Mail className="h-4 w-4 text-[#1f5e46]" />
                <span className="hover:translate-x-1 transition-transform">
                  contact@biznorx.com
                </span>
              </a>

              <a
                href="tel:+911234567890"
                className="
                  flex items-center gap-3
                  transition-all duration-200
                  hover:text-[#f3f4f2]
                "
              >
                <Phone className="h-4 w-4 text-[#1f5e46]" />
                <span className="hover:translate-x-1 transition-transform">
                  +91 123 456 7890
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#cfd6d2]/15">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-helvetica tracking-tightest">
            <p>© 2026 BiznorX. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#f3f4f2] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#f3f4f2] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#f3f4f2] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
