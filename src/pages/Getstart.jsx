import logo from "../assets/onboardingImg/logo.png";
import get from "../assets/onboardingImg/get.svg";

function Getstart() {
  return (
    <div className="flex flex-col gap-20  items-center h-[100vh]">
      <div>
        <img src={get} className="w-[100vw]" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className=" text-5xl font-bold">
          GoFar<span className="textgradient">M</span>
        </h1>
        <p className=" font-light ">Une ferme prospère !</p>
      </div>
      <div className=" absolute bottom-6">
        <button className="background  rounded-md p-3 px-12 flex justify-center">
          <span className="text-white text-lg">Commencer</span>
        </button>
      </div>
    </div>
  );
}

export default Getstart;
