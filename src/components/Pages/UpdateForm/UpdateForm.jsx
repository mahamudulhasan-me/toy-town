import React, { useEffect, useState } from "react";
import { AwesomeButton } from "react-awesome-button";

import { useForm } from "react-hook-form";
const UpdateForm = ({ toyId }) => {
  const { register, handleSubmit } = useForm();
  const [toyInfo, setToyInfo] = useState();
  useEffect(() => {
    fetch(`http://localhost:4040/toy-details/${toyId}`)
      .then((response) => response.json())
      .then((data) => setToyInfo(data));
  }, [toyId]);
  const onSubmit = (updatedInfo) => {
    console.log(updatedInfo);
  };
  return (
    <>
      <div>
        <div className="bg-white p-5 rounded-md">
          <h2 className="border-b text-xl pb-4">Update Your Toy</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div>
                <label className="text-sm">Toy Name</label> <br />
                <input
                  required
                  autoFocus
                  defaultValue={toyInfo?.name}
                  {...register("name")}
                  className="toyAdd-form text-lg"
                />
              </div>

              <div>
                <label className="text-sm">Image-1</label> <br />
                <input
                  required
                  defaultValue={toyInfo?.image1}
                  {...register("image1")}
                  className="toyAdd-form text-lg"
                />
              </div>

              <div>
                <label className="text-sm">Category</label> <br />
                <select
                  required
                  defaultValue={toyInfo?.category}
                  {...register("category", { required: true })}
                  className="toyAdd-form text-lg"
                >
                  <option value="N/A">Select Category</option>

                  <option value="Classic">Classic Collectibles</option>
                  <option value="policePursuit">Police Pursuit</option>
                  <option value="Sports">Sports Speedsters</option>
                </select>
              </div>
              <div>
                <label className="text-sm">Quantity</label> <br />
                <input
                  type="number"
                  required
                  defaultValue={toyInfo?.quantity}
                  {...register("quantity")}
                  className="toyAdd-form text-lg"
                />
              </div>
              <div>
                <label className="text-sm">Price</label> <br />
                <input
                  required
                  defaultValue={toyInfo?.price}
                  {...register("price")}
                  className="toyAdd-form text-lg"
                />
              </div>
              <div className="row-span-3">
                <label className="text-sm">Description</label> <br />
                <textarea
                  defaultValue={toyInfo?.description}
                  {...register("description")}
                  className="bg-[#E9EDF4] text-lg w-full h-[90%]   px-2 rounded-md outline-none focus:border border-pri "
                ></textarea>
              </div>

              <AwesomeButton type="primary">Update</AwesomeButton>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateForm;
