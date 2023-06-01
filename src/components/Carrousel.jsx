/* eslint-disable react/prop-types */
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Carrousel({ img }) {
  return (
    <div className="flex relative w-full h-[50vh] items-center px-3 justify-between z-0">
      <FontAwesomeIcon
        icon={faCircleArrowLeft}
        style={{ color: "#E92C7C" }}
        className=" z-10"
        onClick={() => console.log("izquierda")}
      />
      <img
        src={img}
        className="absolute left-0 object-cover w-screen h-[50vh]"
      />
      <FontAwesomeIcon
        icon={faCircleArrowRight}
        style={{ color: "#E92C7C" }}
        className=" z-10"
        onClick={() => console.log("derecha")}
      />
    </div>
  );
}
