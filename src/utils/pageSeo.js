const SITE_URL = "https://biznorx.com";
const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export const pageSeo = {
  home: {
    title: "BiznorX | Recruitment & Workforce Solutions in India & UAE",
    description:
      "BiznorX provides recruitment, workforce, and business intelligence solutions across India and UAE. Smarter hiring powered by intelligent execution.",
    pathname: "/",
    breadcrumbs: [{ name: "Home", path: "/" }],
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "BiznorX | Recruitment & Workforce Solutions in India & UAE",
      description:
        "BiznorX provides recruitment, workforce, and business intelligence solutions across India and UAE. Smarter hiring powered by intelligent execution.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": ORGANIZATION_ID },
    },
  },
  about: {
    title: "About BiznorX | Legacy, Integrity & Workforce Excellence",
    description:
      "Learn how BiznorX blends decades of business legacy, integrity, and modern execution to support workforce and recruitment outcomes across India and the UAE.",
    pathname: "/about",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      url: `${SITE_URL}/about`,
      name: "About BiznorX",
      description:
        "Learn how BiznorX blends decades of business legacy, integrity, and modern execution to support workforce and recruitment outcomes across India and the UAE.",
      about: { "@id": ORGANIZATION_ID },
    },
  },
  services: {
    title: "Recruitment & Workforce Services | BiznorX",
    description:
      "Explore BiznorX services including executive recruitment, bulk hiring, EOR, global placement, training, consulting, and software services.",
    pathname: "/services",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      url: `${SITE_URL}/services`,
      name: "Recruitment & Workforce Services",
      description:
        "Explore BiznorX services including executive recruitment, bulk hiring, EOR, global placement, training, consulting, and software services.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "BiznorX Services",
        itemListElement: [
          "Executive Recruitment",
          "Bulk Recruitment",
          "EOR Services",
          "Blue Collar Hiring",
          "Global Placement",
          "Training Academy",
          "Technical Consulting",
          "Software Services",
        ].map((name) => ({
          "@type": "Service",
          name,
          provider: { "@id": ORGANIZATION_ID },
        })),
      },
    },
  },
  industries: {
    title: "Industries We Serve | BiznorX",
    description:
      "Discover the industries BiznorX supports with recruitment and workforce solutions, from manufacturing and healthcare to technology, aviation, and construction.",
    pathname: "/industries",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Industries", path: "/industries" },
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      url: `${SITE_URL}/industries`,
      name: "Industries We Serve",
      description:
        "Discover the industries BiznorX supports with recruitment and workforce solutions, from manufacturing and healthcare to technology, aviation, and construction.",
      about: { "@id": ORGANIZATION_ID },
    },
  },
  process: {
    title: "Our Recruitment Process | BiznorX",
    description:
      "See how BiznorX approaches strategic analysis, precision sourcing, cross-border integration, and continuous optimisation for workforce delivery.",
    pathname: "/process",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Process", path: "/process" },
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      url: `${SITE_URL}/process`,
      name: "Our Recruitment Process",
      description:
        "See how BiznorX approaches strategic analysis, precision sourcing, cross-border integration, and continuous optimisation for workforce delivery.",
      about: { "@id": ORGANIZATION_ID },
    },
  },
  whyChooseUs: {
    title: "Why Choose BiznorX | Trusted Workforce Partner",
    description:
      "Find out why businesses trust BiznorX for compliant, scalable, tech-enabled, and cross-border workforce solutions built on decades of experience.",
    pathname: "/whychooseus",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Why Choose Us", path: "/whychooseus" },
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      url: `${SITE_URL}/whychooseus`,
      name: "Why Choose BiznorX",
      description:
        "Find out why businesses trust BiznorX for compliant, scalable, tech-enabled, and cross-border workforce solutions built on decades of experience.",
      about: { "@id": ORGANIZATION_ID },
    },
  },
  contact: {
    title: "Contact BiznorX | India & UAE Offices",
    description:
      "Contact BiznorX for recruitment, workforce, and digital growth support across India and the UAE through our offices, email, and WhatsApp.",
    pathname: "/contact",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      url: `${SITE_URL}/contact`,
      name: "Contact BiznorX",
      description:
        "Contact BiznorX for recruitment, workforce, and digital growth support across India and the UAE through our offices, email, and WhatsApp.",
      mainEntity: {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            telephone: "+91 9004072449",
            areaServed: "IN",
          },
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            telephone: "+971 522585437",
            areaServed: "AE",
          },
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: "business@biznorx.com",
          },
        ],
      },
    },
  },
  digital: {
    title: "Digital Growth & Web Services | BiznorX",
    description:
      "Explore BiznorX digital services including websites, branding, marketing, and performance-led digital growth strategies for ambitious businesses.",
    pathname: "/digital",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Digital", path: "/digital" },
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      url: `${SITE_URL}/digital`,
      name: "Digital Growth & Web Services",
      description:
        "Explore BiznorX digital services including websites, branding, marketing, and performance-led digital growth strategies for ambitious businesses.",
      about: { "@id": ORGANIZATION_ID },
    },
  },
  cv: {
    title: "Upload CV | Careers at BiznorX",
    description:
      "Submit your CV to BiznorX and join our talent network across industries including manufacturing, healthcare, technology, logistics, and construction.",
    pathname: "/cv",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Upload CV", path: "/cv" },
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      url: `${SITE_URL}/cv`,
      name: "Upload CV",
      description:
        "Submit your CV to BiznorX and join our talent network across industries including manufacturing, healthcare, technology, logistics, and construction.",
      about: { "@id": ORGANIZATION_ID },
    },
  },
};
