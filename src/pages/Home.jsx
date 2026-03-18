import Hero from "../components/home/Hero.jsx";
import HomeContent from "../components/home/HomeContent.jsx";
import Trust from "../components/home/Trust.jsx";
import Philosophy from "../components/home/Philosophy.jsx";
import Alix from "../components/home/Alix.jsx";

function Home() {
  return (
    <>
    <div className="mt-[-80px] md:mt-[-80px]">
      <Hero />
      <HomeContent />
      <Trust />
      <Philosophy />
      <Alix />
    </div>
    </>
  );
}

export default Home;