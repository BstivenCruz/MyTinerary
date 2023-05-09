import Nav from "../components/nav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
export default function Layouts() {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
