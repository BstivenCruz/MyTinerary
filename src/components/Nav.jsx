import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link as Achor } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div className=" flex z-40 items-center  top-0 w-screen justify-between h-[8vh] px-3   ">
        <h1 className=" flex mt-2 text-3xl font-sans text-black">
          My Tinerary
        </h1>
        <div className="md:hidden">
          <FontAwesomeIcon
            icon={faBars}
            size="2xl"
            style={{ color: "#E92C7C" }}
          />
        </div>
        <div className="hidden md:flex w-1/3 gap-4 justify-between items-center">
          <div className="w-1/2 flex justify-between  mt-2 ">
            <Achor>Home</Achor>
            <Achor to='/cities' >Cities</Achor>
          </div>
        </div>
      </div>
    </>
  );
}
