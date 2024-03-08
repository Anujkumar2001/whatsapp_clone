import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
function Profile({ setProfileBtn, ProfileImg }) {
  return (
    <div className="w-[100%] absolute top-0 h-screen bg-gray-100 z-50  shadow-black shadow-sm">
      <div className="h-32 pb-5 bg-green-700 flex items-end gap-5 px-10">
        {" "}
        <span className="flex items-center gap-4 text-xl text-white font-normal">
          {" "}
          <FaArrowLeft
            onClick={() => setProfileBtn(false)}
            className="cursor-pointer"
          />{" "}
          <h2>Channels</h2>
        </span>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 mt-5">
        <img
          className="w-52 h-52 rounded-full object-cover"
          src={ProfileImg}
          alt=""
        />
        <div className="flex w-full flex-col items-start gap-2 bg-white px-6 py-3 font-light opacity-90">
          <h3 className="text-xl text-green-900">your name</h3>
          <span className="flex  w-full justify-between ">
            <h2 className="text-xl">Anuj sharma</h2>
            <MdEdit />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
