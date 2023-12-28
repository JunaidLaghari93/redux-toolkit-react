import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restoreIcecream } from "../features/icecream/icecreamSlice";

const IcecreamView = () => {
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();

  return (
    <>
      <div>Number of Icecreams - {numOfIcecreams}</div>
      <button onClick={() => dispatch(ordered())}>Order Icecream</button>
      <button onClick={() => dispatch(restoreIcecream())}>Return Icecream</button>
    </>
  );
};

export default IcecreamView;
