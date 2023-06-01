/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { Link as Anchor } from "react-router-dom";

export default function Button({ img, text, to, className, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-center cursor-pointer rounded-[10px] pt-4 pb-2 bg-botonR text-white w-[100%] h-full"
    >
      <Anchor to={to} className="flex items-center px-1">
        {img ? <img src={img} className={`mr-2 ${className}`} /> : null}
        {text}
      </Anchor>
    </div>
  );
}
