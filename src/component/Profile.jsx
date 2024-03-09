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
            <MdEdit className="text-xl" />
          </span>
        </div>
        <div className="py-3 flex items-center text-start px-6">
          <p>
            This is not your username or pin. This name will be visible to your
            Whatsapp contacts.
          </p>
        </div>
        <div className="flex  justify-between items-end px-6 py-3 bg-white  w-full ">
          <span className="flex flex-col text-start">
            {" "}
            <h2 className="text-xl text-green-700 mb-3">About</h2>
            <p>Love god,no one else</p>
          </span>
          <MdEdit className="text-xl" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
