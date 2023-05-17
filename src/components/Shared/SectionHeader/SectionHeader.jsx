import React from "react";
import headCar from "../../../assets/images/car.gif";
const SectionHeader = () => {
  return (
    <div className="w-2/5 mx-auto -mt-16 relative ">
      <img src={headCar} alt="" />
      <p className="text-2xl -mt-36 text-right ml-[50%] ">Category</p>
    </div>
  );
};

export default SectionHeader;
