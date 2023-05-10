import { Link as Anchor } from "react-router-dom";
import Button from "../components/Button";
import arrow from "../assets/arrow-left.png";
import switchButton from "../assets/Switch.png"

export default function Signin() {
  return (
    <>
      <Anchor className="flex mt-5 ml-8" to="/">
        <img src={arrow} />
      </Anchor>
      <div className=" p-12 flex-col bg-white md:bg-fondoM">
        <h1 className=" font-sans2 font-bold text-3xl text-black mb-10">
          Welcome back!
        </h1>
        <div className="flex-col mb-10">
          <form action="">
          <label className="font-sans font-normal text-textos">
            Email adress
            <input type="text"
              className="flex font-sans2 text-sm  mb-3"
              placeholder="name@example.com"
            />
          </label>
          <label className="flex-col font-sans font-normal text-textos">
            Password
            <input type="text"
              className="border-solid flex font-sans2 text-sm  mb-3"
              placeholder="Enter your password"
            />
          </label>
          </form>
          <div className="flex justify-between mb-20 mr-10"><h2 className="font-sans2 font-normal text-textos">Remember me </h2>
          <img src={switchButton} /></div>
          
        </div>
        <div className="flex-col space-y-4 ">
          <Button text="Continue with google" />
          <Button text="signin" />
        </div>
      </div>
    </>
  );
}
