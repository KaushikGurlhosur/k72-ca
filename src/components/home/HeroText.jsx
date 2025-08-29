import Video from "./Video";

const HeroText = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 font-[questrial] capitalize ">
      <div className=" text-4xl sm:text-7xl md:text-9xl font-medium">
        The spark for
      </div>
      <div className="flex items-center text-4xl sm:text-7xl md:text-9xl font-medium">
        all
        <span className="inline-flex items-center justify-center h-[2rem] sm:h-[3.5rem] md:h-[6rem] mx-6 mt-3 rounded-full overflow-hidden sm:w-[9rem] md:w-[13rem] lg:w-[16rem]">
          <Video />
        </span>
        things
      </div>
      <div className="text-4xl sm:text-7xl md:text-9xl font-medium">
        creative
      </div>
    </div>
  );
};

export default HeroText;
