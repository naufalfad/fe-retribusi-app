import HeroImg from "../../assets/Home.png";

function Illustration() {
  return (
    <div className="relative z-0 flex justify-center lg:justify-end items-end">
      <img
        src={HeroImg}
        alt="Ilustrasi retribusi sampah"
        className="
          pointer-events-none select-none
          w-[720px] sm:w-[850px] lg:w-[950px] xl:w-[1000px] h-auto
          drop-shadow-lg dark:drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]
          -translate-y-8 lg:-translate-y-10 xl:-translate-y-14
          -mr-0 lg:-mr-[60px]
          transition-all duration-500 ease-in-out
        "
      />
    </div>
  );
}

export default Illustration;
