import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import CategoryProducts from "./CategoryProducts/CategoryProducts";
import PhotoGallery from "./PhotoGallery/PhotoGallery";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <CategoryProducts />
      <PhotoGallery />
    </div>
  );
};

export default Home;
