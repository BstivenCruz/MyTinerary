import arrowLeft from "../assets/arrow-left.svg";
import googleLogo from "../assets/Google - Original.svg";
import Button from "../components/Button";
export default function Signup() {
  return (
    <div>
      <div className="flex flex-col items-left font-semibold mt-3 gap-2 w-screen  px-3  ">
          <img className=" w-[6.4%] h-[6.4%] md:w-[10%] " src={arrowLeft} />
          <h1 className=" font-sans2 text-2xl text-black mt-3">Create new account</h1>
          <p className=" font-sans2  text-gray-500 mt-10">Full name</p>
          <p className=" font-sans2 text-sm text-gray-300 ">Enter your name</p>
          <p className=" font-sans2  text-gray-500 mt-5">Email address</p>
          <p className=" font-sans2 text-sm text-gray-300 ">name@example.com</p>
          <p className=" font-sans2  text-gray-500 mt-5">Create password</p>
          <p className=" font-sans2 text-sm text-gray-300 ">Enter your password</p>
          <p className=" font-sans2  text-gray-500 mt-5">Repeat password</p>
          <p className=" font-sans2 text-sm text-gray-300 ">Repeat your password</p>
      </div>
      <div className="w-screen  flex flex-col gap-5 items-center justify-center md:hidden mt-14">
          <Button text="Continue with google" img={googleLogo} className="w-[10%] mb-2"/>
          <Button text="Sing up" />
      </div>
    </div>
  )
}
