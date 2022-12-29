import React, { useContext } from "react";
import ArrContext from "./../arrContext";

const TodoComp = () => {
  const { test, setTest } = useContext(ArrContext);
  const filteredTests = test.filter((t) => t.status == "todo");
  const setToProgress = (id) => {
    test.map((t, index) => {
      if (t.id === id) {
        t.status = "inProgress";
        setTest([...test]);
      }
    });
  };
  const setToDone = (id) => {
    test.map((t) => {
      if (t.id === id) {
        t.status = "done";
        setTest([...test]);
      }
    });
  };
  return filteredTests.map((t) => (
    <div index={t.id} className="todoComp">
      <h5>{t.title}</h5>
      <p className="pInfo">{t.pn}</p>
      <div className="tdBtns">
      <button className="btn btn-dark" onClick={() => setToProgress(t.id)}>To progress section</button>
      <button className="btn btn-dark" onClick={() => setToDone(t.id)}>To Done section</button>
      </div></div>
  ));
};

export default TodoComp;
