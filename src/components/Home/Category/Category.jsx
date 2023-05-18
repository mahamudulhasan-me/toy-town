import React from "react";
import cat1 from "../../../assets/images/cat1.png";
import cat2 from "../../../assets/images/cat2.png";
import cat3 from "../../../assets/images/cat3.png";
import cat4 from "../../../assets/images/cat4.png";
import category1 from "../../../assets/images/products/pa2.jpg";
import category2 from "../../../assets/images/products/pc2.jpg";
import category4 from "../../../assets/images/products/pe.jpg";
import category5 from "../../../assets/images/products/pg.jpg";
import category3 from "../../../assets/images/products/ph.jpg";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
const Category = () => {
  return (
    <div className="px-[5%]  my-28">
      <SectionHeader />

      <div className="grid grid-cols-5 gap-10">
        <div className="relative group cursor-pointer">
          <div className="p-2 ring-1 ring-gray-300 rounded-full w-3/4 mx-auto bg-white ">
            <img
              src={category1}
              alt=""
              className="rounded-full group-hover:scale-110 duration-300 transition-all ease-in-out"
            />
          </div>
          <div className="ring-2 ring-gray-300 w-full h-4/5 -z-10 rounded-t-[80%] bg-[#F5F5F5] absolute top-20"></div>
          <h4 className="absolute -bottom-10 left-10 text-xl group-hover:text-pri text-center">
            Speedeez
          </h4>
        </div>
        <div className="relative group cursor-pointer">
          <div className="p-2 ring-1 ring-gray-300 rounded-full w-3/4 mx-auto bg-white ">
            <img
              src={category2}
              alt=""
              className="rounded-full group-hover:scale-110 duration-300 transition-all ease-in-out"
            />
          </div>
          <div className="ring-2 ring-gray-300 w-full h-4/5 -z-10 rounded-t-[80%] bg-[#F5F5F5]  absolute top-20"></div>
          <h4 className="absolute -bottom-10 left-10 text-xl group-hover:text-pri text-center">
            Speedeez
          </h4>
        </div>
        <div className="relative group cursor-pointer">
          <div className="p-2 ring-1 ring-gray-300 rounded-full w-3/4 mx-auto bg-white ">
            <img
              src={category3}
              alt=""
              className="rounded-full group-hover:scale-110 duration-300 transition-all ease-in-out"
            />
          </div>
          <div className="ring-2 ring-gray-300 w-full h-4/5 -z-10 rounded-t-[80%] bg-[#F5F5F5]  absolute top-20"></div>
          <h4 className="absolute -bottom-10 left-10 text-xl group-hover:text-pri text-center">
            Speedeez
          </h4>
        </div>
        <div className="relative group cursor-pointer">
          <div className="p-2 ring-1 ring-gray-300 rounded-full w-3/4 mx-auto bg-white ">
            <img
              src={category4}
              alt=""
              className="rounded-full group-hover:scale-110 duration-300 transition-all ease-in-out"
            />
          </div>
          <div className="ring-2 ring-gray-300 w-full h-4/5 -z-10 rounded-t-[80%] bg-[#F5F5F5]  absolute top-20"></div>
          <h4 className="absolute -bottom-10 left-10 text-xl group-hover:text-pri text-center">
            Speedeez
          </h4>
        </div>
        <div className="relative group cursor-pointer">
          <div className="p-2 ring-1 ring-gray-300 rounded-full w-3/4 mx-auto bg-white ">
            <img
              src={category5}
              alt=""
              className="rounded-full group-hover:scale-110 duration-300 transition-all ease-in-out"
            />
          </div>
          <div className="ring-2 ring-gray-300 w-full h-4/5 -z-10 rounded-t-[80%] bg-[#F5F5F5]  absolute top-20"></div>
          <h4 className="absolute -bottom-10 left-10 text-xl group-hover:text-pri text-center">
            Speedeez
          </h4>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-24 gap-6 ">
        {/* other category 1 */}
        <div className="row-span-2 relative group w-full rounded-lg duration-500 overflow-hidden hover:ring-8">
          <img
            src={cat1}
            alt=""
            className="rounded-lg w-full group-hover:scale-110 transition-all duration-700"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0  text-center pt-10 ">
            <span className="bg-white text-sm font-semibold text-gray-800 px-2 py-1 tracking-[0.5rem] rounded-md ">
              20 % OFF
            </span>
            <h2 className="text-sec  font-nunito text-3xl mt-7 duration-500 group-hover:mt-5 ">
              Trendy Kids Toys
            </h2>
            <button className="underline hover:text-sec hover:tracking-widest duration-150">
              Shop Now
            </button>
          </div>
        </div>
        {/* other category 2  */}
        <div className="relative group w-full rounded-lg duration-500 overflow-hidden hover:ring-8">
          <img
            src={cat2}
            alt=""
            className="rounded-lg w-full group-hover:scale-110 transition-all duration-700"
          />
          <div className="absolute top-0 left-5 right-0 bottom-0  text-left pt-10 ">
            <span className="bg-white text-sm font-semibold text-gray-800 px-2 py-1 tracking-[0.5rem] rounded-md ">
              FLAT DEAL
            </span>
            <h2 className="text-sec  font-nunito text-2xl mt-7 duration-500 group-hover:mt-5 ">
              New Toy Shoes
            </h2>
            <button className="underline hover:text-sec hover:tracking-widest duration-150">
              Shop Now
            </button>
          </div>
        </div>
        {/* other category 3  */}
        <div className="row-span-2 relative group w-full rounded-lg duration-500 overflow-hidden hover:ring-8">
          <img
            src={cat4}
            alt=""
            className="rounded-lg w-full group-hover:scale-110 transition-all duration-700"
          />
          <div className="absolute top-0 left-5 right-0 bottom-0  text-center pt-10 ">
            <span className="bg-white text-sm font-semibold text-gray-800 uppercase px-2 py-1 tracking-[0.5rem] rounded-md ">
              Big Discount
            </span>
            <h2 className="text-sec  font-nunito text-3xl mt-7 duration-500 group-hover:mt-5 ">
              Kid's Toys & Games
            </h2>
            <button className="underline hover:text-sec hover:tracking-widest duration-150">
              Shop Now
            </button>
          </div>
        </div>
        {/* other category 4  */}
        <div className="relative group w-full rounded-lg duration-500 overflow-hidden hover:ring-8">
          <img
            src={cat3}
            alt=""
            className="rounded-lg w-full group-hover:scale-110 transition-all duration-700"
          />
          <div className="absolute top-0 left-5 right-5 bottom-0  text-right pt-10 ">
            <span className="bg-white text-sm font-semibold text-gray-800  uppercase px-2 py-1 tracking-[0.5rem] rounded-md">
              On Sale!
            </span>
            <h2 className="text-sec  font-nunito text-2xl mt-7 duration-500 group-hover:mt-5 ">
              Fancy Toys
            </h2>
            <button className="underline  hover:text-sec hover:tracking-widest duration-150">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
