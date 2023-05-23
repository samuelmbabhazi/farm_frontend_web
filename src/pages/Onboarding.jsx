import { useState } from "react";
import { useNavigate } from "react-router-dom";

import onboard1 from "../assets/onboardingImg/onboard1.svg";
import onboard2 from "../assets/onboardingImg/onboard2.svg";
import onboard3 from "../assets/onboardingImg/onboard3.svg";

const OnboardingScreen = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = [
    {
      img: onboard1,

      title: "Bienvenue chez GofarM",
      content:
        "Découvrez comment notre application peut vous aider à gérer efficacement votre ferme en suivant vos troupeaux de vaches.",
    },
    {
      img: onboard2,

      title: "Superviser votre troupeau",
      content:
        "Notre application vous permet d'ajouter facilement des vaches à votre troupeau en saisissant les informations de base telles que le nom, l'âge et la race.",
    },
    {
      img: onboard3,

      title: "Suivre la santé de vos vaches",
      content:
        "Notre application vous permet de suivre la santé de vos vaches en enregistrant les informations de vaccination, les traitements médicaux et les rendez-vous vétérinaires.",
    },
  ];

  const navigate = useNavigate();

  const handleNext = () => {
    if (currentPage === pages.length - 1) {
      navigate("/getstart");
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSkip = () => {
    navigate("/getstart");
  };

  return (
    <div className="flex flex-col justify-stretch  h-[100vh]">
      <img src={pages[currentPage].img} className="h-[50vh]" />
      <h1 className=" font-extrabold top-12 text-center text-2xl my-3 mx-6  text-[#0000000]">
        {pages[currentPage].title}
      </h1>
      <p className="mx-6 text-[#000] text-center font-light">
        {pages[currentPage].content}
      </p>
      <div className="flex mx-6 justify-between gap-64 items-center absolute bottom-3">
        {currentPage < pages.length - 1 && (
          <button
            onClick={handleSkip}
            className=" text-md font-medium underline text-[#00600d]"
          >
            Skip
          </button>
        )}
        {currentPage <= pages.length - 1 && (
          <button onClick={handleNext}>
            <svg
              version="1.1"
              id="Layer_1"
              fill="#00600d"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="40.88px"
              height="40.88px"
              viewBox="0 0 122.88 122.88"
              enable-background="new 0 0 122.88 122.88"
              xml:space="preserve"
            >
              <g>
                <path d="M61.439,0L61.439,0v0.016c-16.976,0-32.335,6.874-43.443,17.981S0.016,44.464,0.016,61.438H0v0.002l0,0h0.016 c0,16.978,6.874,32.336,17.981,43.444c11.107,11.106,26.467,17.98,43.441,17.98v0.016h0.002l0,0v-0.016 c16.977,0,32.336-6.874,43.443-17.98c11.107-11.108,17.981-26.467,17.981-43.441h0.016v-0.003l0,0h-0.016 c0-16.976-6.874-32.335-17.981-43.442S78.416,0.016,61.442,0.016V0H61.439L61.439,0z M51.181,42.479 c-1.909-1.964-1.864-5.1,0.098-7.01c1.961-1.909,5.1-1.866,7.009,0.098l21.838,22.519l-3.554,3.456l3.569-3.458 c1.91,1.971,1.862,5.116-0.108,7.027c-0.057,0.057-0.115,0.109-0.175,0.161L58.288,87.329c-1.909,1.963-5.048,2.007-7.009,0.097 c-1.962-1.907-2.007-5.045-0.098-7.009l18.473-18.889L51.181,42.479L51.181,42.479z" />
              </g>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default OnboardingScreen;
