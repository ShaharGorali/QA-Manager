import React, { useContext } from "react";
import DoneComp from "./../smallComp/DoneComp";
import ArrContext from "./../arrContext";

const Done = () => {
  const { test, setTest } = useContext(ArrContext);
  return (
    <div className="doneSpace">
         <DoneComp />
    </div>
  );
};

export default Done;
