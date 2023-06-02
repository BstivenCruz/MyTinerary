/* eslint-disable react/prop-types */
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Cards({ city, onclick }) {
  const [color, setColor] = useState("#454545");
  const like = () => {
    if (color === "#454545") {
      setColor("#E92C7C");
    } else {
      setColor("#454545");
    }
  };
  return (
    <div className="  md:w-1/3 p-3 ">
      <div className="h-[35vh] shadow-md shadow-botonR w-full  rounded-2xl overflow-hidden  ">
        <img
          src={city.photo}
          className="h-[60%] w-full object-cover object-center"
        />
        <div className="border h-[40%] flex justify-between py-2 px-4">
          <div>
            <p>{city.name}</p>
            <p className=" font-sans2 capitalize">Pais : {city.pais} </p>
            <p className=" font-sans2 w-full">Population:{city.population} </p>
          </div>
          <div className="flex flex-col justify-between  w-1/2 h-full">
            <div className="h-1/2">
              <Button text="view more " onClick={() => onclick(city._id)} />
            </div>
            <div className=" self-end items-end flex w-1/2 justify-between">
              <FontAwesomeIcon
                icon={faHeart}
                style={{ color: `${color}` }}
                onClick={like}
              />
              <FontAwesomeIcon icon={faShare} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
