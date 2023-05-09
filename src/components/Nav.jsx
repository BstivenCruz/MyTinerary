import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <div className="flex items-center justify-between h-[8vh] px-3">
      <h1 className=" flex mt-2 text-2xl font-sans text-black">My Tinerary</h1>
      <FontAwesomeIcon icon={faBars} size="2xl" style={{ color: "#E92C7C" }} />
    </div>
  );
}
