import Video from "./Video";

const HeroText = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 font-[questrial] uppercase mt-2 ">
      <div className=" text-4xl sm:text-7xl md:text-9xl font-bold leading-[7vw] shrink-[2]">
        The spark for
      </div>
      <div className="flex items-center text-4xl sm:text-7xl md:text-9xl font-bold leading-[7vw]">
        all
        <span className="inline-flex items-center justify-center h-[2rem] sm:h-[3.5rem] md:h-[6rem] mx-1 rounded-full overflow-hidden w-[4rem] sm:w-[8.5rem] md:w-[13rem] object-scale-down">
          <Video />
        </span>
        creative
      </div>
      <div className="text-4xl sm:text-7xl md:text-9xl font-bold leading-[7vw]">
        things
      </div>
    </div>
  );
};

export default HeroText;
