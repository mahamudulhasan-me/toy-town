import { Rating } from "@smastrom/react-rating";
import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const AllToysSingleCard = ({ toyDetails }) => {
  const [clickedId, setClickedId] = useState(null);
  const { _id, name, image1, image2, price, rating } = toyDetails;
  return (
    <div className="rounded-lg  group transition-shadow duration-150 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div className="h-3/4  relative overflow-hidden">
        <img
          src={image1}
          className="group-hover:hidden rounded-t-lg transition-all "
          alt=""
        />
        <div className=" transition-all group-hover:duration-500  absolute group-hover:left-0 group-hover:right-0 left-1/2 right-1/2 group-hover:bottom-0 group-hover:top-0 bottom-1/2 top-1/2 ">
          <img src={image2} alt="" className="w-full rounded-lg" />
        </div>
      </div>
      <div className="flex py-2 justify-between items-center bg-slate-100 group-hover:bg-pri rounded-b-lg transition-all duration-300 px-4">
        <div className=" p-1">
          <h4 className="text-xl font-medium font-nunito text-slate-950">
            {name}
          </h4>
          <h5 className="text-gray-500">
            Price: <span className="text-sec">${price}</span>
          </h5>
          <p className="flex text-sm text-gray-600">
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            {rating}/5
          </p>
        </div>
        <label htmlFor="my-modal-5">
          <div
            title="View Details"
            onClick={() => setClickedId(_id)}
            className="w-10 h-10 hover:pl-2 duration-150 rounded-full bg-pri flex justify-center items-center text-xl group-hover:border text-sec"
          >
            <AiOutlineArrowRight />
          </div>
        </label>
        {/* modal body  */}
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            {/* <ToyDetails toyId={clickedId} />
             */}
            <p>car details coming soon</p>
            <div className="modal-action">
              <label htmlFor="my-modal-5" className="btn">
                Yay!
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllToysSingleCard;
