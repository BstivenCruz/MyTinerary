import { createBrowserRouter } from "react-router-dom";
import Layouts from "./src/layouts/layouts";
import Welcome from "./src/pages/welcome";
import Signin from "./src/pages/signin";
import Signup from "./src/pages/signup";
import Cities from "./src/pages/cities";
import Detail from "./src/pages/detail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/cities",
        element: <Cities />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
    ],
  },
]);
export default router;
