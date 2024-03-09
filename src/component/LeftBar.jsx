import React, { useState } from "react";
import { MdGroups } from "react-icons/md";
import { FaCircleNotch } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { RiChatNewLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import { CgDetailsMore } from "react-icons/cg";
import Chat from "./Chat";
import "../styles/leftBar.css";
import Community from "./Community";
import Status from "./Status";
import Channel from "./Channel";
import Profile from "./Profile";
import NewChat from "./NewChat";
import { useMyContext } from "../context/ContextProvider";
function WhatsAppMainPage() {
  const { myState, setMyState } = useMyContext();
  let userDetails = [
    {
      id: 1,
      img: "https://image.shutterstock.com/image-photo/portrait-handsome-caucasian-man-formal-260nw-2142820441.jpg",
      name: "John Doe",
      message: "Hello",
      time: "1:55pm",
      userChat: [
        { user: "How's it going?" },
        { user: "Where are you located?" },
        { you: "I'm good, thanks!", voice: null },
      ],
    },
    {
      id: 2,
      img: "https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg",
      name: "Alice Smith",
      message: "Hi",
      time: "2:30pm",
      userChat: [
        { user: "Hey there!" },
        { you: "I'm doing well, thanks for asking." },
      ],
    },
    {
      id: 3,
      img: "https://st3.depositphotos.com/10654668/17288/i/450/depositphotos_172880694-stock-photo-mature-man-in-bar.jpg",
      name: "Bob Johnson",
      message: "Greetings",
      time: "3:15pm",
      userChat: [{ user: "Hi!" }, { you: "I'm good, how about you?" }],
    },
    {
      id: 4,
      img: "https://img.freepik.com/free-photo/stylish-handsome-indian-man-tshirt-pastel-wall_496169-1571.jpg",
      name: "Eva Wilson",
      message: "Hola",
      time: "4:00pm",
      userChat: [{ user: "Hola!" }, { you: "All good on my end." }],
    },
    {
      id: 5,
      img: "https://static.vecteezy.com/system/resources/previews/006/917/875/large_2x/portrait-of-a-handsome-indian-man-photo.jpg",
      name: "Michael Brown",
      message: "Hey",
      time: "4:45pm",
      userChat: [{ user: "Hey!" }, { you: "Doing well, what about you?" }],
    },
    {
      id: 6,
      img: "https://thumbs.dreamstime.com/z/portrait-young-handsome-man-white-shirt-outdoor-portrait-young-handsome-man-white-shirt-outdoor-nice-appearance-131934608.jpg",
      name: "Sophia Miller",
      message: "Greetings",
      time: "5:30pm",
      userChat: [{ user: "Greetings!" }, { you: "I'm fine, thank you." }],
    },
    {
      id: 7,
      img: "https://media.istockphoto.com/id/1347495868/photo/smiling-african-american-man-wearing-glasses.jpg?s=612x612&w=0&k=20&c=QMCbWu-AOfLDkQMsX-qX2xHFZAL56tx_uVucZ5rBxv8=",
      name: "David Davis",
      message: "Hello",
      time: "6:15pm",
      userChat: [{ user: "Hello!" }, { you: "Great, how about yourself?" }],
    },
    {
      id: 8,
      img: "https://img.freepik.com/free-photo/smiley-man-holding-camera-front-view_23-2149915895.jpg",
      name: "Olivia Garcia",
      message: "Hi",
      time: "7:00pm",
      userChat: [{ user: "Hi!" }, { you: "I'm good, thanks for asking." }],
    },
    {
      id: 9,
      img: "https://media.istockphoto.com/id/628330740/photo/portrait-of-a-beautifull-smiling-man.jpg?s=612x612&w=0&k=20&c=t10Nhvv-kzaSEdYpL0-dUvN5_Z9YV58vvDGmwcjZrIk=",
      name: "William Martinez",
      message: "Hola",
      time: "7:45pm",
      userChat: [{ user: "Hola!" }, { you: "All good on my end." }],
    },
    {
      id: 10,
      img: "https://media.istockphoto.com/id/628330740/photo/portrait-of-a-beautifull-smiling-man.jpg?s=612x612&w=0&k=20&c=t10Nhvv-kzaSEdYpL0-dUvN5_Z9YV58vvDGmwcjZrIk=",
      name: "Emma Anderson",
      message: "Hey",
      time: "8:30pm",
      userChat: [
        { user: "Hey there!" },
        { you: "Doing well, thanks for asking." },
      ],
    },
  ];

  // Add more users as needed
  // ...

  const [chat, setChat] = useState(true);
  const [chatDetails, setChatDetails] = useState({});
  const [click, setClick] = useState(false);
  const [userSearchInput, setUserSearchInput] = useState([]);
  const [filteredData, setFilteredData] = useState(userDetails);
  const [CommunitiesBtn, setCommunitiesBtn] = useState(false);
  const [statusBtn, setStatusBtn] = useState(false);
  const [channelBtn, setChannelBtn] = useState(false);
  const [ProfileBtn, setProfileBtn] = useState(false);
  const [newChatBtn, setNewChatBtn] = useState(false);
  const handleChatClick = (id, img, name, message, time, userChat) => {
    setChatDetails(id, img, name, message, time, userChat);
    setMyState("");
    setChat(false);
    setClick(true);
  };
  const handleUserSearch = (e) => {
    const searchInput = e.target.value.toLowerCase();
    setUserSearchInput(searchInput);
    const final_data = userDetails.filter((el) => {
      const lowercaseName = el.name.toLowerCase();
      return lowercaseName.includes(searchInput);
    });
    setFilteredData(final_data);
  };

  return (
    <div className="flex bg-green-100 h-[100vh] w-full fixed  z-0">
      {/* left section start from here--- */}

      <div className=" w-4/12 m-w-[400px]  bg-white relative ">
        {CommunitiesBtn && (
          <Community
            className="transition-all"
            setCommunitiesBtn={setCommunitiesBtn}
          />
        )}

        {statusBtn && <Status setStatusBtn={setStatusBtn} />}
        {channelBtn && <Channel setChannelBtn={setChannelBtn} />}
        {newChatBtn && <NewChat setNewChatBtn={setNewChatBtn} />}
        {ProfileBtn && (
          <Profile
            setProfileBtn={setProfileBtn}
            ProfileImg={
              "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
            }
          />
        )}
        {}
        <div className="h-16   bg-green-100 flex items-center justify-between px-2">
          <img
            className="w-10 h-10 rounded-full object-cover cursor-pointer"
            src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
            alt=""
            onClick={() => {
              setProfileBtn(true);
            }}
          />
          <span className="flex text-2xl w-[50%] justify-between items-center">
            <MdGroups
              className="text-3xl cursor-pointer"
              onClick={() => {
                setCommunitiesBtn(true);
              }}
            />
            <FaCircleNotch
              className="cursor-pointer"
              onClick={() => {
                setStatusBtn(true);
              }}
            />
            <FiMessageCircle
              onClick={() => {
                setChannelBtn(true);
              }}
              className="cursor-pointer"
            />
            <RiChatNewLine
              onClick={() => {
                setNewChatBtn(true);
              }}
              className="cursor-pointer"
            />
            <BsThreeDotsVertical />
          </span>
        </div>
        <div className="flex flex-col px-2 py-2">
          <div className="flex justify-evenly items-center">
            <span className="flex items-center bg-gray-200 p-2 rounded-md w-[90%]">
              <IoMdSearch className="text-2xl mr-4" />
              <input
                className=" w-full bg-transparent border-none outline-none font-normal"
                type="text"
                placeholder="search or start new chat"
                value={userSearchInput}
                onChange={(e) => {
                  handleUserSearch(e);
                }}
              />
            </span>
            <CgDetailsMore className="text-2xl" />
          </div>
          {/* all user details ---- */}
          <div className="flex flex-col py-2 border-t-2 mt-2 overflow-y-scroll h-[80vh]">
            {filteredData.map(({ id, img, name, message, time, userChat }) => {
              return (
                <div
                  className="flex py-4 cursor-pointer whatsappUser border-b-2"
                  onClick={() => {
                    handleChatClick({
                      id,
                      img,
                      name,
                      message,
                      time,
                      userChat,
                      chat,
                    });
                  }}
                >
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    src={img}
                    alt=""
                  />
                  <span className=" w-full ml-2 px-3 capitalize flex justify-between">
                    <span className="flex flex-col items-start">
                      <h2 className="text-xl">{name}</h2>
                      <p className="opacity-60">{message}</p>
                    </span>
                    <p>{time}</p>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* //left section end here---- */}
      <div className="w-8/12 flex">
        <Chat chat={chat} chatDetails={myState || chatDetails} />
      </div>
    </div>
  );
}

export default WhatsAppMainPage;
