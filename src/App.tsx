
import {  Route, Routes} from "react-router-dom";

import ChatBotComp from "./page/ChatBot";
import Chat from "./page/Chat";
import Success from "./page/Success";
import NotFound from "./page/404";

// const Chat = lazy(() => import("./page/Chat"));
// const Success = lazy(() => import("./page/Success"));
// const NotFound = lazy(() => import("./page/404"));


const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/success" element={<Success />} />
          <Route path= "/chat" element={<ChatBotComp />} />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
    </>
  );
};

export default App;
