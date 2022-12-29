import React, { useContext } from "react";
import TodoComp from "../smallComp/TodoComp";
import ArrContext from "./../arrContext";

const Todo = () => {
  const { test, setTest } = useContext(ArrContext);
  return (
    <div className="todoSpace">
      <TodoComp />
    </div>
  );
};

export default Todo;
