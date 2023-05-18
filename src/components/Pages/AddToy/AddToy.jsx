import React, { useContext } from "react";
import { AwesomeButton } from "react-awesome-button";
import { useForm } from "react-hook-form";
import {
  FaCalendarCheck,
  FaCartPlus,
  FaHome,
  FaPaperPlane,
  FaRegCalendarAlt,
  FaRocketchat,
  FaUserAlt,
} from "react-icons/fa";
import logo from "../../../assets/images/Logo.png";
import { AuthContext } from "../../../provider/AuthProvider";
import AdminOption from "../../Shared/AdminOption/AdminOption";
import SectionTopBanner from "../../Shared/SectionTopBanner/SectionTopBanner";
const AddToy = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (toyDetails) => {
    console.log(toyDetails);
  };
  return (
    <div>
      <SectionTopBanner sectionName="Add Toy" sectionTitle="Add Latest Toy" />
      <div className="bg-[#E9EDF4] min-h-screen px-[10%] shadow-2xl pt-10">
        <div className="grid grid-cols-12 justify-between  items-start ">
          <div className="bg-white col-span-3 rounded-t-lg">
            <div className=" shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
              <img src={logo} alt="" className=" pl-5 " />
            </div>
            <div className="text-gray-500 mt-10 ">
              <p className="font-semibold pl-5">Main</p>
              <div className="">
                <AdminOption name="Dashboard" icon={<FaHome />} />
                <AdminOption name="Email" icon={<FaPaperPlane />} />
                <AdminOption name="Todo" icon={<FaCalendarCheck />} />
                <AdminOption name="User" icon={<FaUserAlt />} />
                <AdminOption name="Calender" icon={<FaRegCalendarAlt />} />
                <AdminOption name="Chat" icon={<FaRocketchat />} />
                <AdminOption name="eCommerce" icon={<FaCartPlus />} />
              </div>
              <p className="font-semibold pl-5 mt-8">Components</p>
              <div className="">
                <AdminOption name="Dashboard" icon={<FaHome />} />
                <AdminOption name="Email" icon={<FaPaperPlane />} />
                <AdminOption name="Todo" icon={<FaCalendarCheck />} />
                <AdminOption name="User" icon={<FaUserAlt />} />
                <AdminOption name="Calender" icon={<FaRegCalendarAlt />} />
                <AdminOption name="Chat" icon={<FaRocketchat />} />
                <AdminOption name="eCommerce" icon={<FaCartPlus />} />
              </div>
            </div>
          </div>
          <div className="col-span-8 shadow-inner">
            <div className="w-full bg-white px-5 py-[5px] rounded-t-lg">
              <h2>Insert Item</h2>
              <div className="text-sm breadcrumbs">
                <ul>
                  <li>
                    <a>Admin</a>
                  </li>
                  <li>
                    <a>Form</a>
                  </li>
                  <li>
                    <a>Insert Item</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-8">
              <div className="bg-white p-5 rounded-md">
                <h2 className="border-b text-xl pb-4">Added Latest Toy</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vulputate, ex ac venenatis mollis, diam nibh finibus leo
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div>
                      <label className="text-sm">Toy Name</label> <br />
                      <input
                        required
                        {...register("name")}
                        className="toyAdd-form"
                      />
                    </div>
                    <div>
                      <label className="text-sm">Toy Image</label> <br />
                      <input
                        required
                        {...register("image")}
                        className="toyAdd-form"
                      />
                    </div>
                    <div>
                      <label className="text-sm">Seller Name</label> <br />
                      <input
                        required
                        defaultValue={user?.displayName}
                        {...register("sellerName")}
                        className="toyAdd-form"
                      />
                    </div>
                    <div>
                      <label className="text-sm">Seller Email</label> <br />
                      <input
                        required
                        defaultValue={user?.email}
                        {...register("sellerEmail")}
                        className="toyAdd-form"
                      />
                    </div>
                    <div>
                      <label className="text-sm">Category</label> <br />
                      <select
                        required
                        {...register("category", { required: true })}
                        className="toyAdd-form"
                      >
                        <option value="N/A">Select Category</option>

                        <option value="classic">Classic Collectibles</option>
                        <option value="police">Police Pursuit</option>
                        <option value="sports">Sports Speedsters</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm">Quantity</label> <br />
                      <input
                        type="number"
                        required
                        {...register("quantity")}
                        className="toyAdd-form"
                      />
                    </div>
                    <div>
                      <label className="text-sm">Price</label> <br />
                      <input
                        type="number"
                        required
                        {...register("quantity")}
                        className="toyAdd-form"
                      />
                    </div>
                    <div className="row-span-3">
                      <label className="text-sm">Description</label> <br />
                      <textarea
                        {...register("description")}
                        className="bg-[#E9EDF4] w-full h-[90%]   px-2 rounded-md outline-none focus:border border-pri "
                      ></textarea>
                    </div>

                    <div>
                      <label className="text-sm">Rating</label> <br />
                      <input
                        required
                        {...register("rating")}
                        className="toyAdd-form"
                      />
                    </div>

                    <AwesomeButton type="primary">Submit</AwesomeButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
