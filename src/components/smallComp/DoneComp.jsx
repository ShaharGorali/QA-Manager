import React, { useContext, useState } from "react";
import ArrContext from "./../arrContext";

const DoneComp = () => {
  const { test, setTest, forp, setForp } = useContext(ArrContext);
  const [myError, setMyError] = useState(false);
  const filteredTests = test.filter((t) => t.status == "done");
  const setToProgress = (id) => {
    test.map((t) => {
      if (t.id === id) {
        t.status = "inProgress";
        setTest([...test]);
      }
    });
  };
  const setToDo = (id) => {
    test.map((t) => {
      if (t.id === id) {
        t.status = "todo";
        setTest([...test]);
      }
    });
  };

  const handleErrorClick = (error, t) => {
    setMyError(!myError);
    if (t.error == null) {
      t.error = "Empty";
    }
  };

  return filteredTests.map((t, index) => (
    <div index={index} className="doneComp">
      <h5>{t.title}</h5>
      <p className="pInfo">{t.pn}</p>
      <div>
        <button
          onClick={() => handleErrorClick(t.error, t)}
          className="btn btn-danger"
        >
          Bugs
        </button>
      </div>
      {myError && <p className="bugInfo">{t.error}</p>}
      <p style={{ color: t.color }} className="finishStatus">
        {t.done}
      </p>
      <div className="doneBtns">
        <button className="btn btn-dark" onClick={() => setToDo(t.id)}>
          To do section
        </button>
        <button className="btn btn-dark" onClick={() => setToProgress(t.id)}>
          To progress section
        </button>
      </div>
    </div>
  ));
};

export default DoneComp;
