import React, { useContext, useState, useEffect, setInterval } from "react";
import Done from "../mainComp/Done";
import InProgress from "../mainComp/InProgress";
import Todo from "../mainComp/Todo";
import Header from "./Header";
import ArrContext from "./../arrContext";
import { Route, Routes } from "react-router-dom";
import Welcome from "./Welcome";
import AddTest from "./AddTest";

const Main = () => {
  const { test, setTest } = useContext(ArrContext);

  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route
          path="/main"
          element={
            <div className="mainSpace">
              <Header />
              <div className="topics">
                <h2 className="topicHead">Todo</h2>
                <h2 className="topicHead">In progress</h2>
                <h2 className="topicHead">Done</h2>
              </div>
              <div className="allTestsSpace">
                <Todo />
                <InProgress />
                <Done />
              </div>
            </div>
          }
        ></Route>
        <Route
          path="/addnewtest"
          element={
            <div>
              <AddTest />
            </div>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default Main;
