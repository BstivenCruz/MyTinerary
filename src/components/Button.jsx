/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { Link as Anchor } from "react-router-dom";


export default function Button({ img, text, to,  className }) {
  return (
    <div className="flex items-center justify-center cursor-pointer rounded-[10px] pt-4 pb-2 bg-botonR text-white w-[80%]">
      <Anchor to={to} className="flex items-center">
        <img src={img}  className={`mr-2 ${className}`} /> 
        {text}
      </Anchor>
    </div>
  );
}