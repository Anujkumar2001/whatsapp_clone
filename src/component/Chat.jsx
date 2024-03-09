import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { BsBodyText, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import "../styles/chat.css";
import { MdDoneAll } from "react-icons/md";
import { useMyContext } from "../context/ContextProvider";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
function Chat({ chat, chatDetails }) {
  const { myState, setMyState } = useMyContext();
  const { id, img, name, message, time, userChat } = chatDetails;

  const [textChat, setTextChat] = useState("");
  const [sendBtn, setSendBtn] = useState(false);
  const handleSendBnt = () => {
    chatDetails.userChat.push({
      you: textChat,
      voice: (
        <audio
          className="mt-10"
          src={audioData ? URL.createObjectURL(audioData) : ""}
          controls
        ></audio>
      ),
    });
    setSendBtn(false);
    setTextChat("");
  };
  const currentTime = new Date();
  const chatTime = currentTime.getHours() + ":" + currentTime.getMinutes();
  // mic----
  const [audioData, setAudioData] = useState(null);
  const recorderControls = useAudioRecorder();

  const addAudioElement = (blob) => {
    setAudioData(blob);
  };
  return (
    <>
      {chat ? (
        <div className="flex justify-center items-center h-full w-[100%] bg-green-100">
          <div className="w-[500px] flex flex-col justify-center items-center">
            <img
              className="w-60 opacity-40 mb-10"
              src="https://cdn.icon-icons.com/icons2/494/PNG/512/laptop-phone_icon-icons.com_48280.png"
              alt=""
            />
            <span>
              <h1 className="text-4xl text-gray-700">WhatsApp Web</h1>
            </span>
            <p className="opacity-60 mt-5 text-center">
              send and receive message without keeping your phone online. Use
              Whatsapp on up to 4 linked devices and 1 phone at the same time.
            </p>
          </div>
        </div>
      ) : (
        // user top details
        <div className="w-full relative">
          <div className=" p-2 flex items-center justify-between fixed  z-10  bg-green-100 w-8/12 ">
            <div className="px-2 flex items-center gap-2">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src={img}
                alt=""
              />
              <h1 className="capitalize">{name}</h1>
            </div>

            <div className="flex gap-4 text-xl">
              <IoMdSearch />
              <BsThreeDotsVertical />
            </div>
          </div>
          <div className=" h-screen  pt-16 pb-20 chatSection overflow-y-scroll ">
            <div className="flex min-h-[80vh] flex-col justify-end ">
              {userChat?.map((el) => {
                return (
                  <div
                    className="w-full  flex px-6"
                    style={
                      el.user
                        ? {
                            alignItems: "start",
                          }
                        : { justifyContent: "end" }
                    }
                  >
                    <div
                      className="flex px-4 mt-1  py-2 rounded-md flex-wrap"
                      style={
                        el.user
                          ? {
                              backgroundColor: "white",
                              color: "black",
                              fontSize: "15px",
                            }
                          : {
                              backgroundColor: "#d6f5d3",
                              color: "black",
                              fontSize: "15px",
                            }
                      }
                    >
                      {el.user ? (
                        <div className="flex  relative gap-1 pr-8 ">
                          {el.user}
                          <p className="text-[12px] font-light absolute right-[-10px] top-[10px]">
                            {chatTime}
                          </p>
                        </div>
                      ) : (
                        <span className="flex relative gap-1 pr-14  ">
                          <div className="max-w-[300px] ">
                            <h1 className="max-w-[300px]  break-words text-start">
                              {el.you}
                            </h1>
                          </div>
                          <span className="flex absolute right-[-10px] bottom-[-6px] gap-2">
                            <p className="text-[12px] font-light">{chatTime}</p>
                            <MdDoneAll />
                          </span>
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
              <div className="w-full flex items-end  justify-end px-6">
                {" "}
                {audioData ? (
                  <audio
                    className="mt-10"
                    src={audioData ? URL.createObjectURL(audioData) : ""}
                    controls
                  ></audio>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="flex text-xl justify-between items-center px-4 absolute z-10 bg-green-100 w-full bottom-0 bg-custom-background">
            <AiOutlinePlus />
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="flex w-[95%] justify-between items-center border-2 p-2"
            >
              <span className="flex items-center gap-2 w-full bg-white p-1 rounded-md mr-2 py-2">
                <MdOutlineEmojiEmotions />
                <input
                  type="text"
                  className="w-full outline-none  text-[15px]"
                  placeholder="write a message..."
                  onChange={(e) => {
                    setTextChat(e.target.value);
                    if (e.target.value == "") {
                      setSendBtn(false);
                    } else {
                      setSendBtn(true);
                    }
                  }}
                  value={textChat}
                />
              </span>
              {sendBtn ? (
                <button onClick={handleSendBnt}>
                  <IoMdSend className="cursor-pointer" />
                </button>
              ) : (
                <AudioRecorder
                  onRecordingComplete={(blob) => addAudioElement(blob)}
                  recorderControls={recorderControls}
                />
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Chat;
