/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { Link as Anchor } from "react-router-dom";
export default function Button({text,to}) {
  return (
    <div className="flex justify-center cursor-pointer rounded-[10px] pt-4 pb-2 bg-botonR text-white w-[80%]">
      <Anchor to={to}>{text}</Anchor>
    </div>
  );
}
