import "./style.css";
import "react-toastify/dist/ReactToastify.css";
import img from "../assets/Login.svg";
import arrowLeft from "../assets/arrow-left.svg";
import googleLogo from "../assets/Google - Original.svg";
import Button from "../components/Button";
import { ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import usersActions from "../redux/actions/usersActions";
const { signup } = usersActions;

const strengthLabels = ["weak", "medium", "strong"];

export default function Signup() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const email = useRef("");
  const password = useRef("");
  const photo = useRef("");
  const [strength, setStrength] = useState("");

  const getStrength = (password) => {
    let strengthIndicator = -1,
      upper = false,
      lower = false,
      numbers = false;

    for (let index = 0; index < password.length; index++) {
      const char = password.charCodeAt(index);
      if (!upper && char >= 65 && char <= 90) {
        upper = true;
        strengthIndicator++;
      }
      if (!numbers && char >= 48 && char <= 57) {
        numbers = true;
        strengthIndicator++;
      }
      if (!lower && char >= 97 && char <= 122) {
        lower = true;
        strengthIndicator++;
      }
    }
    setStrength(strengthLabels[strengthIndicator]);
  };

  const handleChange = (event) => {
    getStrength(event.target.value);
  };
  const enviar = async () => {
    const data = {
      email: email?.current?.value,
      password: password.current?.value,
      photo: photo.current.value,
    };
    await dispatch(signup(data));
  };

  return (
    <>
      <div className=" items-center  md:flex flex-row-reverse h-fit ">
        <img
          className=" absolute left-5 self-start  w-[6.4%] h-[6.4%] md:w-[40px] "
          src={arrowLeft}
          onClick={()=>{navigate('/')}}
        />
        <img
          src={img}
          className="hidden bg-gradient-to-b from-botonR to-fondoM  h-full object-cover md:flex w-1/2"
        />
        <div className="flex flex-col items-center font-semibold gap-3 w-screen md:w-1/2 ">
          <h1 className=" font-sans2 text-2xl text-black mt-10">
            Create new account
          </h1>
          <form className="gap-4 flex flex-col items-center w-[80%] py-5 sm:w-1/2">
            <fieldset className="border border-botonR w-full rounded-[10px] px-2">
              <legend className="ml-2 text-botonR">Email </legend>
              <input
                placeholder="name@example.com"
                className="control pb-2 outline-none font-sans2"
                type="email"
                ref={email}
              />
            </fieldset>
            <fieldset className="border border-botonR w-full rounded-[10px] px-2">
              <legend className="ml-2 text-botonR">Photo </legend>
              <input
                type="text"
                ref={photo}
                placeholder="link your photo"
                name="photo"
                className="control pb-2 outline-none font-sans2"
                accept="image/png"
              />
            </fieldset>
            <fieldset className="border border-botonR w-full rounded-[10px] px-2">
              <legend className="ml-2 text-botonR">Password </legend>
              <input
                placeholder=" Enter your password"
                type="password"
                className="control pb-2 outline-none font-sans2"
                ref={password}
                onChange={handleChange}
              />
            </fieldset>
          </form>
          <div className={` bars ${strength}`}>
            <div></div>
          </div>
          <div className="strength">{strength && <>{strength} password</>}</div>
          <div className="w-[80%] sm:w-1/2  items-center flex flex-col gap-3  justify-center  ">
            <Button onClick={enviar} text="Create" />
            <Button
              text="Continue with google"
              img={googleLogo}
              className="w-[10%] mb-2"
            />
            <p>
              iniciar session{" "}
              <Link to="/signin" className="ml-1 text-botonR">
                Aqui
              </Link>
            </p>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
}
