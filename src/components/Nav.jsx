import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link as Achor } from "react-router-dom";
import Button from "./Button";

export default function Nav() {
  return (
    <>
      <div className="flex items-center  justify-between h-[8vh] px-3 mt-3  ">
        <h1 className=" flex mt-2 text-2xl font-sans text-black">
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
          <div className="w-1/2 flex justify-between  mt-2">
            <Achor to="/">Home</Achor>
            <Achor to="/">Cities</Achor>
            
          </div>
          <div className=" w-1/3 ">
            <Button  to='/signup' text="Login" />
          </div>
          <div className=" w-1/3 mt-3">
            <Achor  to='/signin' text="Login">SignIn</Achor>
          </div>
        </div>
      </div>
    </>
  );
}
