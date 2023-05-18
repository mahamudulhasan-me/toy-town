import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import SignIn from "../components/User/SignIn";
import Main from "../layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
