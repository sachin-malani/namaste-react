import React, { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useDispatch } from "react-redux";
import { backToMain } from "../utils/appSlice";

const Main = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(backToMain());
  },[])
  return (
    <div className="px-4 mt-4">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default Main;
