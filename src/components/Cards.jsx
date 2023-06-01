import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import img from "../assets/Review.png";
export default function Cards() {
  const [color, setColor] = useState("#454545");
  const like = () => {
    if (color === "#454545") {
      setColor("#E92C7C");
    } else {
      setColor("#454545");
    }
  };

  return (
    <div className="w-screen p-5 ">
      <div className="h-[30vh] w-full border border-red-700 rounded-2xl overflow-hidden  ">
        <img src={img} className="h-[60%] w-full object-cover object-center" />
        <div className="border h-[40%] flex justify-between py-2 px-4">
          <div>
            <p>nombre</p>
            <p className=" font-sans2">detalles</p>
          </div>
          <div className="flex flex-col justify-between  w-1/2 h-full">
            <div className="h-1/2">
              <Button text="view more " />
            </div>
            <div className=" self-end items-end flex w-1/2 justify-between">
              <FontAwesomeIcon
                icon={faHeart}
                style={{ color: `${color}` }}
                onClick={like}
              />
              <FontAwesomeIcon
                icon={faShare}
                style={{ color: `${color}` }}
                onClick={like}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
