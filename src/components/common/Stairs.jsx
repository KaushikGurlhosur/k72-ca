import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const Stairs = ({ children }) => {
  const stairParentRef = useRef();
  const pageRef = useRef();

  const currentPath = useLocation().pathname;

  useGSAP(() => {
    const tl = gsap.timeline();

    // Reset all stairs before animation starts
    gsap.set(".stair", { clearProps: "all" }); // clears previous inline styles

    tl.to(stairParentRef.current, {
      display: "block",
    });
    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });

    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });

    tl.to(stairParentRef.current, {
      display: "none",
    });

    gsap.from(pageRef.current, {
      opacity: 0,
      delay: 1.3,
      ease: "power1.inOut",
      scale: 1.5,
    });
  }, [currentPath]);

  return (
    <div>
      <div ref={stairParentRef} className="h-screen w-full fixed z-20 top-0">
        <div className="h-full w-full flex">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>

      <div ref={pageRef}>{children}</div>
    </div>
  );
};

export default Stairs;
