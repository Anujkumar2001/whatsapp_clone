import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa";
function Channel({ setChannelBtn }) {
  const channels = [
    {
      img: "https://www.adgully.com/img/800/202208/aaj-tak-2_2.png.jpg",
      channelName: "aaj tak",
    },
    {
      img: "https://www.adgully.com/img/800/202208/aaj-tak-2_2.png.jpg",
      channelName: "aaj tak",
    },
    {
      img: "https://www.adgully.com/img/800/202208/aaj-tak-2_2.png.jpg",
      channelName: "aaj tak",
    },
    {
      img: "https://www.adgully.com/img/800/202208/aaj-tak-2_2.png.jpg",
      channelName: "aaj tak",
    },
    {
      img: "https://www.adgully.com/img/800/202208/aaj-tak-2_2.png.jpg",
      channelName: "aaj tak",
    },
    {
      img: "https://www.adgully.com/img/800/202208/aaj-tak-2_2.png.jpg",
      channelName: "aaj tak",
    },
  ];
  return (
    <div className="w-[100%] absolute top-0 h-screen bg-gray-100 z-50  shadow-black shadow-sm">
      <div className="h-32 pb-5 bg-green-700 flex items-end gap-5 px-10">
        {" "}
        <span className="flex items-center w-full justify-between text-xl text-white font-normal">
          {" "}
          <span className="flex items-center gap-4">
            {" "}
            <FaArrowLeft
              onClick={() => setChannelBtn(false)}
              className="cursor-pointer"
            />{" "}
            <h2>Channels</h2>
          </span>
          <FaPlus />
        </span>
      </div>
      <div className="flex flex-col mt-6">
        <div>
          <h1 className="text-xl">Stay updated on your favourite topics</h1>
          <h2 className="mt-4 opacity-55 text-xl">
            Find Channels to follow below
          </h2>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-2 p-4">
          {channels.map((el) => {
            return (
              <div className="flex flex-col items-center border-2 border-gray-400 py-3 rounded-md gap-2">
                <img
                  className="w-16 h-16 rounded-full object-cover"
                  src={el.img}
                  alt=""
                />
                <h2 className="capitalize">{el.channelName}</h2>
                <button className="text-green-700 mt-[-10px]">Follow</button>
              </div>
            );
          })}
        </div>
        <button></button>
      </div>
    </div>
  );
}

export default Channel;
