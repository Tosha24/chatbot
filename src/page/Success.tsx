import { styled } from "styled-components";
import { useAppSelector } from "../../redux/store";
import { Navigate } from "react-router-dom";

const Success = () => {
  const { name, age } = useAppSelector((state) => state.messageReducer.user);
  if (name === "") {
    return <Navigate to="/" />;
  }
  return (
    <div className='h-screen flex mx-4 justify-center items-center'>
      <p>
        {" "}
        Your name{" "}
        <span className='font-bold'>
          {name.toUpperCase()}
        </span> aged{" "}
        <span className='font-bold'>{age}</span> has
        been added to student system. You can leave this page now.
      </p>
    </div>
  );
};

export default Success;
