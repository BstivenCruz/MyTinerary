import { Link as Anchor } from "react-router-dom";
import Button from "../components/Button";
import arrow from "../assets/arrow-left.png";
import switchButton from "../assets/Switch.png";
import fondo from "../assets/fondo.png";
import googleLogo from "../assets/Google - Original.svg";


export default function Signin() {
  return (
    <>
      <Anchor className="flex w-fit ml-6" to="/">
        <img src={arrow} />
      </Anchor>
      <div className="mt-5 lg:p-10 md:flex md:p-8 md:bg-fondoM">
        <div className="hidden md:flex items-center justify-center bg-[url('./assets/fondo.png')] bg-cover w-1/2 md:rounded-l-lg md:rounded-br-[20%]">
          <h2 className="text-white text-4xl xl:text-5xl">My Tinerary</h2>
        </div>
        <div className="md:w-1/2 md:p-8 md:bg-white md:rounded-r-lg">

        <div className=" items-center p-8 flex-col flex bg-white  md:border md: border-black md:p-8 md:rounded-lg">
          <h1 className="font-sans2 font-bold text-3xl  text-black mb-10 md:text-2xl lg:text-4xl xl:mt-4">
            Welcome back!
          </h1>
          <div className="flex-col flex mb-10 md:items-center mr-20 lg:self-end">
            <form className="lg:w-[200%] lg:mb-10 xl:mt-6" action="">
              <label className="font-sans font-normal text-textos xl:text-2xl">
                Email adress
                <input
                  type="text"
                  className="flex font-sans2 text-sm  mb-8 xl:text-2xl"
                  placeholder="name@example.com"
                />
              </label>
              <label className="flex-col font-sans font-normal text-textos xl:text-2xl">
                Password
                <input
                  type="text"
                  className="border-solid flex font-sans2 text-sm  mb-8 xl:text-2xl"
                  placeholder="Enter your password"
                />
              </label>
            </form>
            <div className="flex mb-20 md:justify-center lg:flex-col xl:mr-10">
              <h2 className="font-sans2 font-normal text-textos mr-6 lg:text-center xl:text-2xl ">
                Remember me
              </h2>
              <img className="lg:w-1/5 lg:self-center lg:mt-8" src={switchButton} />
            </div>
          </div>
          <div className="flex-col space-y-4 flex items-center w-full  md:w-[120%]">
            <Button
              text="Continue with Google"
              img={googleLogo}
              className="w-[10%] mb-2"
            />
            <Button text="Signin" />
          </div>
        </div>

        </div>
        
      </div>
    </>
  );
}
