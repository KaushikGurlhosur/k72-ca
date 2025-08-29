import Video from "../components/home/Video";
import HeroText from "../components/home/HeroText";
import BottomText from "../components/home/BottomText";

const Home = () => {
  return (
    <div className="relative">
      <div className="h-screen w-screen absolute z-0">
        <Video />
      </div>
      <div className="h-screen w-screen flex flex-col  justify-between relative overflow-hidden z-10">
        <HeroText />
        <BottomText />
      </div>
    </div>
  );
};

export default Home;
