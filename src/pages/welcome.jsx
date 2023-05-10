import home from "../assets/home.svg";
import Button from "../components/Button";

export default function Welcome() {
  return (
    <div className="flex flex-col items-center font-semibold mt-3 gap-2 w-screen py-5 md:flex-row md:justify-center md:items-center">
      <h1 className=" md:hidden font-sans2 text-4xl text-black">Welcome!</h1>
      <h4 className="  md:hidden font-snas2 font-normal text-textos">
        Sing in or creat a new account
      </h4>
      <div className=" hidden md:flex md:flex-col md:justify-between gap-5 md:w-[40%]">
        <h2 className="font-sans2 text-4xl  font-semibold mb-10">
          Find the perfect destination
        </h2>
        <p className="mb-5 font-sans2  text-xl text-textos1 font-medium">
          Our app will help you find the perfect path for your next trip. With
          an easy-to-use interface and a host of itinerary options, planning
          your next trip has never been easier.
        </p>
        <div className="w-1/3">
          <Button text="View More" />
        </div>
      </div>
      <img className=" md:w-[40%] h-[80%]" src={home} />
      <div className="w-screen sm:w-1/2 flex flex-col gap-3 items-center justify-center md:hidden">
        <Button text="View More" />
        <Button text="No account yet? Sing up" />
      </div>
    </div>
  );
}
