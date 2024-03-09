import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import Chat from "./Chat";
import { useMyContext } from "../context/ContextProvider";

function NewChat({ setNewChatBtn }) {
  const { myState, setMyState } = useMyContext();

  const [searchInput, setSearchInput] = useState("");
  const [searchIcon, setSearchIcon] = useState(false);
  const [chatDetails, setChatDetails] = useState({});
  const [chat, setChat] = useState(true);
  let newChats = [
    {
      id: 1,
      name: "Anuj Sharma",
      bio: "Baap baap hota hain",
      img: "https://image.shutterstock.com/image-photo/portrait-handsome-caucasian-man-formal-260nw-2142820441.jpg",
      message: "Hey there!",
      time: "10:30am",
      userChat: [{ user: "Hi!" }, { you: "How are you?" }],
    },
    {
      id: 2,
      name: "Ramesh Singh",
      bio: "Tech enthusiast and coder",
      img: "https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg",
      message: "Hello!",
      time: "11:45am",
      userChat: [{ user: "Hi!" }, { you: "I'm good, how about you?" }],
    },
    {
      id: 3,
      name: "Suresh Verma",
      bio: "Nature lover and photographer",
      img: "https://st3.depositphotos.com/10654668/17288/i/450/depositphotos_172880694-stock-photo-mature-man-in-bar.jpg",
      message: "Greetings",
      time: "3:15pm",
      userChat: [{ user: "Hi!" }, { you: "I'm doing well, thanks." }],
    },
    {
      id: 4,
      name: "Priya Patel",
      bio: "Bookworm and aspiring writer",
      img: "https://img.freepik.com/free-photo/stylish-handsome-indian-man-tshirt-pastel-wall_496169-1571.jpg",
      message: "Hi!",
      time: "2:00pm",
      userChat: [{ user: "Hello!" }, { you: "How's your day going?" }],
    },
    {
      id: 5,
      name: "Vikas Kumar",
      bio: "Fitness freak and gym lover",
      img: "https://static.vecteezy.com/system/resources/previews/006/917/875/large_2x/portrait-of-a-handsome-indian-man-photo.jpg",
      message: "Hey!",
      time: "4:30pm",
      userChat: [{ user: "Hi!" }, { you: "It's going great, thanks!" }],
    },
    {
      id: 6,
      name: "Neha Gupta",
      bio: "Art and music enthusiast",
      img: "https://thumbs.dreamstime.com/z/portrait-young-handsome-man-white-shirt-outdoor-portrait-young-handsome-man-white-shirt-outdoor-nice-appearance-131934608.jpg",
      message: "Hello!",
      time: "1:20pm",
      userChat: [{ user: "Hi!" }, { you: "How's your day so far?" }],
    },
    {
      id: 7,
      name: "Amit Joshi",
      bio: "Traveler and adventurer",
      img: "https://media.istockphoto.com/id/1347495868/photo/smiling-african-american-man-wearing-glasses.jpg?s=612x612&w=0&k=20&c=QMCbWu-AOfLDkQMsX-qX2xHFZAL56tx_uVucZ5rBxv8=",
      message: "Hi there!",
      time: "5:45pm",
      userChat: [{ user: "Hello!" }, { you: "I'm good, thanks for asking." }],
    },
    {
      id: 8,
      name: "Pooja Sharma",
      bio: "Foodie and chef",
      img: "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149662.png",
      message: "Greetings!",
      time: "12:10pm",
      userChat: [{ user: "Hi!" }, { you: "How's everything going?" }],
    },
    {
      id: 9,
      name: "Raj Malhotra",
      bio: "Movie buff and cinephile",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvnC2yb-Na6rIT0LqVHdG0auS79fq6kFmKoQ&usqp=CAU",
      message: "Hey!",
      time: "3:50pm",
      userChat: [{ user: "Hello!" }, { you: "Everything's good on my end." }],
    },
    {
      id: 10,
      name: "Swati Desai",
      bio: "Fashionista and designer",
      img: "https://www.cdc.gov/cancer/prostate/images/man-750.jpg?_=76964",
      message: "Hello!",
      time: "2:30pm",
      userChat: [{ user: "Hi!" }, { you: "How's your day shaping up?" }],
    },
  ];

  //
  const [searchData, setSearchData] = useState(newChats);
  const handleClick = (id, img, name, message, time, userChat) => {
    setMyState({ id, img, name, message, time, userChat });
    setChat(false);
  };
  return (
    <>
      <div className="h-full bg-white flex flex-col gap-2">
        <div className="h-32 pb-5 bg-green-700 flex items-end gap-5 px-10">
          {" "}
          <span className="flex items-center gap-4 text-xl text-white font-normal">
            {" "}
            <FaArrowLeft
              onClick={() => {
                setNewChatBtn(false);
              }}
              className="cursor-pointer"
            />{" "}
            <h2>New Chat</h2>
          </span>
        </div>
        <div className="flex items-center bg-gray-200 px-4 py-1 text-[17px] mx-3 rounded-md">
          {searchIcon ? (
            <IoSearch className="text-green-600 cursor-pointer text-xl" />
          ) : (
            <FaArrowLeft
              className="text-green-600 cursor-pointer"
              onClick={() => {
                setSearchInput("");
                setSearchIcon(true);
                setSearchData(newChats);

                // console.log(myState, "my state print");
              }}
            />
          )}

          <input
            className="outline-none p-2 bg-transparent w-full pl-6"
            type="search"
            placeholder="search name or number"
            onChange={(e) => {
              let store = newChats.filter((el) => {
                let lowerCase = el.name.toLowerCase();
                return lowerCase.includes(e.target.value.toLowerCase());
              });
              setSearchData(store);
              setSearchInput(e.target.value);
              if (e.target.value == "") {
                setSearchIcon(true);
              } else {
                setSearchIcon(false);
              }
            }}
            value={searchInput}
          />
        </div>
        <div className="w-full h-full overflow-scroll flex flex-col mt-4  ">
          <h1 className="text-xl text-green-700 py-3">CONTACTS ON WHTASAPP</h1>
          {/* new chat list start form here */}
          {searchData?.map(
            ({ name, img, bio, id, message, time, userChat }) => {
              return (
                <div
                  className="flex gap-4 pt-5 hover:bg-gray-200 px-6 cursor-pointer"
                  onClick={() => {
                    handleClick(id, img, name, message, time, userChat);

                    // console.log()
                  }}
                >
                  <img
                    className="w-14 h-14 rounded-full object-cover border-1 border-black"
                    src={img}
                    alt=""
                  />
                  <span className="flex flex-col text-start border-b-2 border-gray-300 w-full pb-3">
                    <h2 className="text-xl">{name}</h2>
                    <p className="font-light opacity-60">{bio}</p>
                  </span>
                </div>
              );
            }
          )}
        </div>
      </div>
      {/* <div className="w-8/12 flex"> */}
      {/* </div> */}
      {/* <Chat chat={chat} chatDetails={chatDetails} className="z-30" /> */}
    </>
  );
}

export default NewChat;
