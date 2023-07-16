import { Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Demo from "./page/Demo";
import ChatBotComp from "./page/ChatBot";

const Chat = lazy(() => import("./page/Chat"));
const Success = lazy(() => import("./page/Success"));
const NotFound = lazy(() => import("./page/404"));


const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/success" element={<Success />} />
          <Route path= "/chat" element={<ChatBotComp />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
    </>
  );
};

export default App;
