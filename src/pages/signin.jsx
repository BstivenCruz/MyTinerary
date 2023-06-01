import "./style.css";
import img from "../assets/Login.svg";
import arrowLeft from "../assets/arrow-left.svg";
import googleLogo from "../assets/Google - Original.svg";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import usersActions from "../redux/actions/usersActions";
const { signin } = usersActions;

export default function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useRef("");
  const password = useRef("");

  const enviar = async () => {
    const data = {
      email: email?.current?.value,
      password: password.current?.value,
    };
    if (usersActions.logged) {
      console.log("first");
    } else {
      await dispatch(signin(data));
    }
    /* if (res.payload.payload.success !== false) {
      navigate("/");
    } */
  };
  return (
    <div className=" items-center  md:flex  h-[100vh] ">
      <img
        className="absolute left-5  self-start  w-[6.4%] h-[6.4%] md:w-[40px] "
        src={arrowLeft}
        onClick={() => {
          navigate("/");
        }}
      />
      <img
        src={img}
        className="hidden bg-gradient-to-b from-botonR to-fondoM  h-full object-cover md:flex w-1/2"
      />
      <div className="flex flex-col items-center font-semibold gap-3 w-screen md:w-1/2 ">
        <h1 className=" font-sans2 text-2xl text-black mt-10">Welcome Back</h1>
        <form className="gap-4 flex flex-col items-center w-[80%] py-5 sm:w-1/2">
          <fieldset className="border border-botonR w-full rounded-[10px] px-2">
            <legend className="ml-2 text-botonR">Email </legend>
            <input
              placeholder="name@example.com"
              className="control pb-2 outline-none w-full font-sans2"
              type="email"
              ref={email}
            />
          </fieldset>
          <fieldset className="border border-botonR w-full rounded-[10px] px-2">
            <legend className="ml-2 text-botonR">Password </legend>
            <input
              placeholder=" Enter your password"
              type="password"
              className="control pb-2 outline-none w-full font-sans2"
              ref={password}
            />
          </fieldset>
        </form>
        <div className="w-[80%] sm:w-1/2  items-center flex flex-col gap-3  justify-center  ">
          <Button onClick={enviar} text="Inisiar session" />
          <Button
            text="Continue with google"
            img={googleLogo}
            className="w-[10%] mb-2"
          />
          <p>
            Crear cuenta
            <Link to="/signup" className="ml-1 text-botonR">
              Aqui
            </Link>
          </p>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
