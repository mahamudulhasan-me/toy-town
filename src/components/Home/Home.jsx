import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import CategoryProducts from "./CategoryProducts/CategoryProducts";
import PhotoGallery from "./PhotoGallery/PhotoGallery";
import Sponsor from "./Sponsor/Sponsor";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <CategoryProducts />
      <PhotoGallery />
      <Sponsor />
    </div>
  );
};

export default Home;
