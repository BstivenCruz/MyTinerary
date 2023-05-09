import home from "../assets/home.svg";
import Button from "../components/Button";

export default function Welcome() {
  return (
    <div className="flex flex-col items-center font-semibold gap-2 w-screen py-5">
      <h1 className=" font-sans2 text-4xl text-black">Welcome!</h1>
      <h4 className="font-snas2 font-normal text-textos">
        Sing in or creat a new account
      </h4>
      <img className="" src={home} />
      <Button text='View More' />
      <Button  text= 'No account yet? Sing up'/>
    </div>
  );
}
