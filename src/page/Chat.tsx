import { useState, useEffect } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "../../bot/config";
import ActionProvider from "../../bot/ActionProvider";
import MessageParser from "../../bot/MessageParser";
import { AppDispatch, useAppSelector } from "../../redux/store";
import { useDispatch } from "react-redux";
import { decrementCount } from "../../redux/features/messages-slice";
import { useNavigate } from "react-router-dom";


const Chat = () => {
 const navigate = useNavigate();
  
  return (
    <div className='h-screen w-full overflow-x-hidden overflow-y-scroll'>
      <div className="flex flex-col items-center justify-center h-screen w-full gap-6">
        <p className='text-2xl'>Enter into Student Info System</p>
        <button 
        onClick={() => {
          navigate("/chat");
        }}
        className='border border-teal-800 p-2 rounded-lg bg-teal-400'
        >
          Enroll Now!
        </button>
      </div>
    </div>
  );
};

export default Chat;
