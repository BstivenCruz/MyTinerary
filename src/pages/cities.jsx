import Carrousel from "../components/carrousel";
import Cards from "../components/Cards";
import img from "../assets/Review.png";
import {  faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Cities() {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <Carrousel img={img} />
        <h1 className=" font-sans2 text-4xl mt-5 capitalize font-semibold">
          cities
        </h1>
        <p className=" font-light  text-textos">
          Collection of the most beatiufull places
        </p>
        <label className="border border-botonR gap-2 flex items-center p-2 rounded-[10px]">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input className=" outline-none font-sans2" placeholder="Search your city" />
        </label> 
        <Cards />
      </div>
    </>
  );
}
