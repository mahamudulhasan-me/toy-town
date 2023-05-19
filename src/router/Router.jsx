import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import AddToy from "../components/Pages/AddToy/AddToy";
import AllToys from "../components/Pages/AllToys/AllToys";
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
      {
        path: "/add-a-toy",
        element: <AddToy />,
      },
      {
        path: "allToys",
        element: <AllToys />,
      },
    ],
  },
]);

export default router;
