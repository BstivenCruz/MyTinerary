import "./style.css";
import arrowLeft from "../assets/arrow-left.svg";
import googleLogo from "../assets/Google - Original.svg";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import usersActions from "../redux/actions/usersActions";
const { signup } = usersActions;
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef, useState } from "react";
import img from "../assets/Login.svg";
import { Link } from "react-router-dom";

const strengthLabels = ["weak", "medium", "strong"];

export default function Signup() {
  const dispatch = useDispatch();
  const photo = useRef("");
  const age = useRef("");
  const email = useRef("");
  const password = useRef("");
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
      name: "bbbb",
      lastName: "lastname.current?.value",
      photo: photo.current.value,
      age: age.current?.value,
      email: email?.current?.value,
      password: password.current?.value,
    };
    await dispatch(signup(data));
  };

  return (
    <>
      <div className=" items-center  md:flex flex-row-reverse h-[100vh] ">
        <img
          src={img}
          className="hidden bg-gradient-to-b from-botonR to-fondoM  h-full object-cover md:flex w-1/2"
        />
        <div className="flex flex-col items-center font-semibold mt-3 gap-3 w-screen md:w-1/2  px-3">
          <img
            className=" self-start ml-10 w-[6.4%] h-[6.4%] md:w-[40px] "
            src={arrowLeft}
          />
          <h1 className=" font-sans2 text-2xl text-black mt-3">
            Create new account
          </h1>
          <form
            encType="multipart/form-data"
            className="border border-botonR rounded-2xl py-6 px-0 flex flex-col items-center w-[90%] sm:w-1/2"
          >
            <input
              type="text"
              ref={photo}
              placeholder="Enter your photo"
              name="photo"
              className="control font-sans2 border-b border-b-botonR"
              accept="image/png"
            />

            <input
              className="control font-sans2 border-b border-b-botonR"
              placeholder=" Enter age"
              type="number"
              ref={age}
            />

            <input
              placeholder="name@example.com"
              className="control font-sans2 border-b border-b-botonR"
              type="email"
              ref={email}
            />

            <input
              placeholder=" Enter your password"
              type="password"
              className="control font-sans2 border-b border-b-botonR"
              ref={password}
              onChange={handleChange}
            />
            <div className={`bars ${strength}`}>
              <div></div>
            </div>
            <div className="strength">
              {strength && <>{strength} password</>}
            </div>
          </form>
          <div className="w-[80%] sm:w-1/2  items-center flex flex-col gap-3  justify-center  ">
            <Button onClick={enviar} text="Create" />
            <Button
              text="Continue with google"
              img={googleLogo}
              className="w-[10%] mb-2"
            />
            <p>
              iniciar session <Link to='/signin' className=" text-botonR">Aqui</Link>
            </p>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
}
