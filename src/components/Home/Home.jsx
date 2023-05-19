import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import CategoryProducts from "./CategoryProducts/CategoryProducts";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <CategoryProducts />
    </div>
  );
};

export default Home;
