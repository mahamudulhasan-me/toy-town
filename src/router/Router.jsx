import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import AddToy from "../components/Pages/AddToy/AddToy";
import AllToys from "../components/Pages/AllToys/AllToys";
import MyToys from "../components/Pages/MyToys/MyToys";
import ToyDetails from "../components/Pages/ToyDetails/ToyDetails";
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
        path: "toy-details/:id",
        element: <ToyDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:4040/toy-details/${params?.id}`),
      },
      {
        path: "allToys",
        element: <AllToys />,
      },
      {
        path: "my-toys/:uid",
        element: <MyToys />,
        loader: ({ params }) =>
          fetch(`http://localhost:4040/my-toys/${params?.uid}`),
      },
    ],
  },
]);

export default router;
