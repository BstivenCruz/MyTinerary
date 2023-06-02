import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import Cards from "../components/Cards";

export default function Detail() {
  const { id } = useParams();
  const cities = useSelector((state) => state.reducerCity?.cities?.cities);
  const placess = useSelector((state) => state.reducerCity?.place?.place);
  const city = cities.filter((each) => each._id === id);
  const place = placess.filter((each) => each.cityId === city[0]._id);

  console.log(place);

  const [more, setMore] = useState(false);
  const set = () => {
    if (!more) {
      setMore(true);
    } else {
      setMore(false);
    }
  };

  return (
    <>
      <div>
        <img src={city[0].photo} />
        <h2>Nombre : {city[0].name}</h2>
        <h2>Pais : {city[0].pais}</h2>
        <p>Poblacion : {city[0].population} </p>
        <div>
          <Button text="view itinerarios" onClick={set} />
        </div>
        <div>
          {more ? (
            <div>
              {place.map((pl) => (
                <Cards key={pl.name} city={pl} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
