import React, { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { BeatLoader } from "react-spinners";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import SectionTopBanner from "../../Shared/SectionTopBanner/SectionTopBanner";
import AllToysSingleCard from "./AllToysSingleCard";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:4040/toys`)
      .then((response) => response.json())
      .then((data) => {
        setToys(data);
        setLoader(false);
      });
  }, []);
  const handleSearch = (e) => {
    const searchValue = e.target.value;
    fetch(`http://localhost:4040/toys/${searchValue}`)
      .then((response) => response.json())
      .then((data) => {
        setToys(data);
        setLoader(false);
      });
  };
  return (
    <div>
      <SectionTopBanner sectionName="all-toys" sectionTitle="All Latest Toys" />
      <div className="px-[5%]">
        <SectionHeader />

        <div className="w-[30%] mx-auto -mt-5 relative mb-5">
          <input
            onChange={handleSearch}
            type="search"
            placeholder="Search by Name & Category "
            className="border w-full py-3 rounded-md px-2  border-pri focus:outline-none focus:placeholder-slate-800"
            autoFocus
          />
          <span className="absolute right-2 top-2">
            <FcSearch className="text-3xl" />
          </span>
        </div>
        {loader ? (
          <div className="flex justify-center mt-10  h-56 ">
            <BeatLoader color="#36d7b7" />
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-5 min-h-min">
            {toys.length === 0 ? (
              <div className="col-span-4  text-center mt-10 font-semibold h-56 text-gray-500 tracking-widest">
                No Match
              </div>
            ) : (
              toys.map((toy) => (
                <AllToysSingleCard key={toy._id} toyDetails={toy} />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllToys;
