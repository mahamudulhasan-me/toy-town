import { Rating } from "@smastrom/react-rating";
import React, { useState } from "react";
import { FaEdit, FaEnvelope, FaTrashAlt, FaUserLock } from "react-icons/fa";
import { useLoaderData } from "react-router";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import SectionTopBanner from "../../Shared/SectionTopBanner/SectionTopBanner";
import UpdateForm from "../UpdateForm/UpdateForm";

const MyToys = () => {
  const myToysInit = useLoaderData();
  const [myToys, setMyToys] = useState(myToysInit);
  const [clickedId, setClickedId] = useState("");
  return (
    <div>
      <SectionTopBanner sectionTitle="All your toys" sectionName="my-toys" />
      <div className="w-4/5 mx-auto">
        <SectionHeader />
        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full text-gray-700">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name & Seller</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Rating</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {myToys.map((toy, index) => (
                  <tr key={toy._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex gap-2 items-center">
                        <img
                          src={toy.image1}
                          alt=""
                          className="w-24 h-20 rounded-md "
                        />
                        <div>
                          <p className="text-lg">{toy.name}</p>
                          <p className="flex text-sm items-center gap-2">
                            <FaUserLock className="text-lg text-gray-700" />{" "}
                            {toy.sellerName}
                          </p>
                          <p className="flex text-sm items-center gap-2">
                            <FaEnvelope className="text-lg text-gray-700" />{" "}
                            {toy.sellerEmail}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td>{toy.category}</td>
                    <td>${toy.price}</td>
                    <td>
                      <p className="flex text-sm text-gray-600">
                        <Rating
                          style={{ maxWidth: 100 }}
                          value={toy.rating}
                          readOnly
                        />
                        {toy.rating}/5
                      </p>
                    </td>
                    <td>
                      <div className="flex justify-center items-center gap-4 text-2xl">
                        {/* The button to open modal */}

                        <label
                          onClick={() => setClickedId(toy._id)}
                          htmlFor="my-modal-5"
                          className="cursor-pointer"
                        >
                          <FaEdit className="text-pri" />
                        </label>
                        {/* Put this part before </body> tag */}
                        <input
                          type="checkbox"
                          id="my-modal-5"
                          className="modal-toggle"
                        />
                        <div className="modal">
                          <div className="modal-box w-3/5 max-w-5xl">
                            <UpdateForm toyId={clickedId} />
                            <div className="modal-action">
                              <label
                                htmlFor="my-modal-5"
                                className="bg-rose-600 text-white text-lg px-2 py-1 rounded-md"
                              >
                                Cancel Update
                              </label>
                            </div>
                          </div>
                        </div>
                        <FaTrashAlt className="text-rose-600" />
                      </div>
                    </td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
