import Carrousel from "../components/carrousel";
import Cards from "../components/Cards";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Cities() {
  const navigate = useNavigate();
  const { cities } = useSelector((store) => store?.reducerCity?.cities);
  const [photo, setPhoto] = useState(24);
  useEffect(() => {
    const interval = setInterval(() => {
      setPhoto((photo) => photo + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (photo > cities.length - 1) {
    setPhoto(0);
  } else if (photo < 0) {
    setPhoto(cities.length - 1);
  }

  const handlerClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <div className="flex flex-col  items-center gap-4">
        <Carrousel
          img={cities[photo]?.photo}
          setPhoto={setPhoto}
          photo={photo}
        />
        <h1 className=" font-sans2 text-4xl mt-5 capitalize font-semibold">
          cities
        </h1>
        <p className=" font-light  text-textos">
          Collection of the most beatiufull places
        </p>
        <label className="border border-botonR gap-2 flex items-center p-2 rounded-[10px]">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            className=" outline-none font-sans2"
            placeholder="Search your city"
          />
        </label>
        <div className=" w-full sm:flex sm:flex-row p-5 flex-wrap">
          {cities.map((city) => (
            <Cards key={city.name} city={city} onclick={handlerClick} />
          ))}
        </div>
      </div>
    </>
  );
}
