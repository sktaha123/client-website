import { Hero } from "./Hero.jsx";
import { Trust } from "./Trust.jsx";
import Philosophy from "./Philosophy.jsx";
import Alix from "./Alix.jsx";
import CV from "./CV.jsx";
import { Helmet } from "react-helmet-async";
import HomeContent from "./HomeContent.jsx";




function Home() {


  return (
    <>
      <Helmet>
        <title>BiznorX | Recruitment & Workforce Solutions in India & UAE</title>

        <meta
          name="description"
          content="BiznorX provides intelligent recruitment and workforce solutions across India and UAE, helping businesses hire smarter through data-driven execution."
        />

        <link
          rel="canonical"
          href="https://client-website-weld.vercel.app/"
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "BiznorX",
              "url": "https://client-website-weld.vercel.app/",
              "logo": "https://client-website-weld.vercel.app/logo.png",
              "description":
                "BiznorX is a recruitment and workforce solutions platform providing structured, intelligent hiring outcomes across India and the UAE.",
              "areaServed": [
                { "@type": "Country", "name": "India" },
                { "@type": "Country", "name": "United Arab Emirates" }
              ],
              "sameAs": [
                "https://www.linkedin.com/company/biznorx"
              ]
            })
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "BiznorX",
              "url": "https://client-website-weld.vercel.app/",
              "publisher": {
                "@type": "Organization",
                "name": "BiznorX"
              }
            })
          }}
        />
      </Helmet>


      <Hero />
      <HomeContent />
      <Trust />
      <Philosophy />
      <Alix />


    </>
  );
}

export default Home;
