import { Link } from "react-router-dom";

const BottomText = () => {
  return (
    <div className="font-[questrial] flex  justify-center gap-2 uppercase items-center mb-3">
      <Link
        to="/projects"
        className="text-3xl sm:text-6xl md:text-8xl font-bold border-5 border-white rounded-full px-5 py-1 hover:border-[#D3FD50] hover:text-[#D3FD50] duration-1000 ease-in-out">
        Projects
      </Link>
      <Link
        to="/agence"
        className="text-3xl sm:text-6xl md:text-8xl font-bold border-5 border-white rounded-full px-5 py-1 hover:border-[#D3FD50] hover:text-[#D3FD50] duration-1000 ease-in-out">
        Agency
      </Link>
    </div>
  );
};

export default BottomText;
