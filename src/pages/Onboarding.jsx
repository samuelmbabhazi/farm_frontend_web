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
    <div className="flex w-[90vw]  flex-col justify-stretch  h-[100vh]">
      <img src={pages[currentPage].img} className="h-[50vh]" />
      <h1 className=" font-extrabold  top-12 text-center text-2xl my-3 mx-6  ">
        {pages[currentPage].title}
      </h1>
      <p className="mx-6   text-center font-light">
        {pages[currentPage].content}
      </p>
      <div className="flex mx-6 justify-between gap-64 items-center absolute bottom-3">
        {currentPage < pages.length - 1 && currentPage > 0 && (
          <button onClick={handleSkip} className=" text-md font-bold">
            Prev
          </button>
        )}
        {currentPage <= pages.length - 1 && (
          <button className="text-md font-bold " onClick={handleNext}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default OnboardingScreen;
