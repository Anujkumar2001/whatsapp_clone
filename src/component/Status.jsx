import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import "../styles/status.css";
function Status({ setStatusBtn }) {
  const statusData = [
    {
      img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
      name: "jitendra sharma",
      time: "today at 12:30 Pm",
      active: true,
    },
    {
      img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
      name: "Aishan sharma",
      time: "today at 11:30 Pm",
      active: false,
    },
    {
      img: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
      name: "Aman sharma",
      time: "today at 1:30 Pm",
      active: true,
    },
  ];
  return (
    <div className="w-[100%] absolute top-0 h-screen bg-white z-50  shadow-black shadow-sm">
      <div className="h-32 pb-5 bg-green-700 flex items-end gap-5 px-10">
        {" "}
        <span className="flex items-center gap-5 text-xl text-white font-normal">
          {" "}
          <FaArrowLeft
            onClick={() => setStatusBtn(false)}
            className="cursor-pointer"
          />{" "}
          <h2>Status</h2>
        </span>
      </div>
      {/* your status section start from here */}
      <div className=" bg-white h-16 flex items-center px-3 gap-4 text-xl font-normal">
        <img
          className="w-12 h-12 object-cover rounded-full"
          src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
          alt=""
        />
        <span>
          <h2>My Status</h2>
          <p className="text-[18px] font-light opacity-40">No Updates</p>
        </span>
      </div>
      <h1 className="w-full flex justify-start px-4 text-[25px] ml-4 text-green-800 mt-2">
        Recents
      </h1>
      <div className="mt-4">
        {statusData.map((el) => {
          console.log(el);
          return (
            <div className=" bg-white h-16 flex items-center px-3 gap-4 text-xl font-normal  border-gray-300  cursor-pointer hover:bg-green-100 border-t-2">
              <img
                className="w-12 h-12 object-cover rounded-full"
                style={el.active ? { border: "4px dotted green" } : null}
                src={el.img}
                alt=""
              />
              <span className=" w-full items-start flex flex-col">
                <h2>{el.name}</h2>
                <p className="text-[16px] opacity-50">{el.time}</p>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Status;
