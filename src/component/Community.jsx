import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { HiOutlineSpeakerWave } from "react-icons/hi2";

function Community({ setCommunitiesBtn }) {
  return (
    <div className="w-[100%] absolute top-0 h-screen bg-gray-100 z-50  shadow-black shadow-sm">
      <div className="h-32 pb-5 bg-green-700 flex items-end gap-5 px-10">
        {" "}
        <span className="flex items-center gap-5 text-xl text-white font-normal">
          {" "}
          <FaArrowLeft
            onClick={() => setCommunitiesBtn(false)}
            className="cursor-pointer"
          />{" "}
          <h2>Communities</h2>
        </span>
      </div>
      <div className=" bg-white h-16 flex items-center px-3 gap-4 text-xl font-normal">
        {" "}
        <MdGroups className="text-2xl bg-green-700 w-10 h-10 p-1 rounded-md text-white" />
        <h2>New Community</h2>
      </div>
      <div className="mt-4">
        <div className=" bg-white h-16 flex items-center px-3 gap-4 text-xl font-normal border-b-2 border-gray-300">
          {" "}
          <MdGroups className="text-2xl bg-green-700 w-10 h-10 p-1 rounded-md text-white" />
          <h2>Masai Assignment</h2>
        </div>
        <div className=" bg-white h-16 flex items-center px-3 gap-4 text-xl border-b-2 border-gray-300 font-normal">
          {" "}
          <HiOutlineSpeakerWave className="text-2xl text-green-700 bg-green-200 w-10 h-10  rounded-md p-2" />
          <h2>Announcements</h2>
        </div>
      </div>
    </div>
  );
}

export default Community;
