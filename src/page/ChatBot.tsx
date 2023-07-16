import Chatbot from "react-chatbot-kit"
import config from "../../bot/config"
import MessageParser from "../../bot/MessageParser"
import ActionProvider from "../../bot/ActionProvider"
import { decrementCount } from "../../redux/features/messages-slice"
import { useDispatch } from "react-redux"
import { AppDispatch, useAppSelector } from "../../redux/store"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import "../index.css"


const ChatBotComp = () => {
  const navigate = useNavigate();
  const count = useAppSelector((state) => state.messageReducer.count);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const interval = setInterval(() => {
      if (count > 0) {
        dispatch(decrementCount());
      } else if (count === 0) {
        navigate("/success");
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count, dispatch, navigate]);
  return (
   
   <div className=' flex flex-col justify-center items-center w-full min-h-[100vh]  '>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  )
}

export default ChatBotComp