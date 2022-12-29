import React, { useContext } from "react";
import InProgComp from "./../smallComp/InProgComp";
import ArrContext from "./../arrContext";

const InProgress = () => {
  const { test, setTest } = useContext(ArrContext);
  return (
    <div className="inProgressSpace">
      <InProgComp />
    </div>
  );
};

export default InProgress;
