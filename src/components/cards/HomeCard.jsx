import { BiPhone, BiEnvelope, BiMap } from "react-icons/bi";

import cows from "../../assets/card/cows.svg";

function Card2Row({
  title,
  text,
  icon,
  iconContainerClassName = "",
  hasBottomBorder,
}) {
  return (
    <div
      className={`flex ${
        hasBottomBorder ? "pb-3 border-b border-[#E3E3E3]" : ""
      }`}
    >
      <div
        className={`flex h-10 w-10 min-w-[2.5rem] min-h-[2.5rem] items-center justify-center rounded-lg shadow-md ${iconContainerClassName}`}
      >
        {icon}
      </div>
      <div className="text-left ml-2.5">
        <p className="text-xs text-gray-600">{title}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}
function Card2() {
  return (
    <div className="flex justify-between m-3 items-center">
      <div className="flex w-[47%] bg-[#f3faff] flex-col justify-center items-center shadow-sm gap-3 p-7 rounded-2xl ">
        <img src={cows} />
        <h3 className=" text-xl">Cows</h3>
      </div>
      <div className="flex w-[47%] bg-[#fcf4ff] flex-col justify-center items-center shadow-sm gap-3 p-7 rounded-2xl ">
        <img src={cows} />
        <h3 className=" text-xl">Cows</h3>
      </div>
    </div>
  );
}

export default Card2;
