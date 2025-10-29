import Navbar from "../components/Home/Navbar";
import HeroText from "../components/Home/HeroText";
import HomeButton from "../components/Home/HomeButton";
import Illustration from "../components/Home/Illustration";
import Information from "../components/Information/Information";

function Home() {
  return (
    <>
      {/* Navbar muncul lagi dan tidak ketimpa konten */}
      <Navbar
        className="bg-background dark:bg-background-dark
                   sticky top-0 z-50 shadow-sm"
      />

      <main className="bg-background dark:bg-background-dark">
        <section
          id="beranda"
          className="mx-auto px-[70px] pt-12 lg:pt-20 pb-0 grid lg:grid-cols-2 gap-10 items-start"
        >
          <div className="pb-10">
            <HeroText />
            <HomeButton />
          </div>
          <Illustration />
        </section>
        <Information />
      </main>
    </>
  );
}

export default Home;
