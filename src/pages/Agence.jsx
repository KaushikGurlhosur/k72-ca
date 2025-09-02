import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Agence = () => {
  const imageDivRef = useRef(null);
  const imageRef = useRef();

  const imageArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",

    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
  ];

  useGSAP(() => {
    ScrollTrigger.matchMedia({
      "(max-width: 767px)": () => {
        gsap.to(imageDivRef.current, {
          scrollTrigger: {
            trigger: imageDivRef.current,
            start: "top 20%",
            end: "top, -150%",
            scrub: true,
            pin: true,
            onUpdate: (elem) => {
              //   //   console.log(Math.round(elem.progress * imageArray.length));
              const imageIndex = Math.round(
                elem.progress * (imageArray.length - 1)
              );
              //   console.log(imageRef.current.src);
              imageRef.current.src = imageArray[imageIndex];
              //   console.log(elem.progress);
            },
          },
          yPercent: 100,
          ease: "power1.inOut",
        });
      },

      // Desktop
      "(min-width: 768px)": () => {
        gsap.to(imageDivRef.current, {
          yPercent: 150,
          scrollTrigger: {
            trigger: imageDivRef.current,
            start: "top 36%",
            end: "top -30%",
            scrub: true,

            pin: true,
            onUpdate: (elem) => {
              //   console.log(Math.round(elem.progress * imageArray.length));
              const imageIndex = Math.round(
                elem.progress * (imageArray.length - 1)
              );
              //   console.log(imageRef.current.src);
              imageRef.current.src = imageArray[imageIndex];
            },
          },

          ease: "power1.inOut",
        });
      },
    });
  }, []);
  return (
    <div>
      <div className="section-1">
        <div
          className="h-[20vw] w-[15vw] rounded-2xl overflow-hidden absolute top-52 left-[30vw] md:top-64 lg:top-96 xl:top-2/5 md:left-[30vw]"
          ref={imageDivRef}>
          <img
            ref={imageRef}
            className="h-full w-full object-cover"
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="section-2 h-screen">
        <div className="font-[questrial] relative">
          <div className="mt-[30vh] md:mt-[35vh] lg:mt-[55vh]">
            <h1 className="text-black text-[15vw] md:text-[20vw] uppercase leading-none md:leading-none text-center font-bold font-[questrial]">
              SEVEN7Y TWO
            </h1>
          </div>
          <div className="flex justify-center md:justify-end  md:pr-10 mt-20">
            <p className="text-black font-[questrial] font-bold text-3xl md:text-4xl  w-[60%] indent-40 tracking-widest leading-snug">
              We’re inquisitive and open-minded, and we make sure creativity
              crowds out ego from every corner. A brand is a living thing, with
              values, a personality and a story. If we ignore that, we can
              achieve short-term success, but not influence that goes the
              distance. We bring that perspective to every brand story we help
              tell.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agence;
