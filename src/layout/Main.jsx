import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Header from "../components/Shared/Header/Header";
import Preloader from "../components/Shared/Preloader/Preloader";
import { AuthContext } from "../provider/AuthProvider";
const Main = () => {
  const { isLoading } = useContext(AuthContext);
  // const isLoading = true;
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Main;
