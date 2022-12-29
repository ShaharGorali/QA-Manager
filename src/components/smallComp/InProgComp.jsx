import React, { useContext, useState } from "react";
import ArrContext from "./../arrContext";

const InProgComp = () => {
  const { test, setTest, forp, setForp, myColor, setMyColor } =
    useContext(ArrContext);
  const [indexes, setIndexes] = useState([]);
  const [error, setError] = useState("");
  const filteredTests = test.filter((t) => t.status == "inProgress");
  const setChecked = (s, index) => {
    test.map((t) => {
      if (t.dAnde[index].description === s.description) {
        t.dAnde[index].checked = !t.dAnde[index].checked;
        setTest([...test]);
        console.log(test);
      }
    });
  };
  const setToDone = (id) => {
    test.map((t) => {
      if (t.id === id) {
        t.dAnde.map((obj) => {
          if (!obj.checked) {
            t.done = "Failed";
            t.color = "red";
            setTest([...test]);
          } else {
            t.done = "Success";
            t.color = "green";
            setTest([...test]);
          }
          console.log(t);
        });

        t.status = "done";
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
  const setBug = (e, id) => {
    e.preventDefault();
    alert("Bug reported");
    test.map((t) => {
      if (t.id === id) {
        t.error = error;
      }
      setTest([...test]);
    });
  };
  const handleChange = (e) => {
    const bug = e.target.value;
    setError(bug);
  };
  return filteredTests.map((t, index) => (
    <div key={index} className="inProgComp">
      <div className="inProgCompInfo">
        <h5>{t.title}</h5>
        <p className="pInfo">{t.pn}</p>
        <div className="stepSpace">
          {t.dAnde.map((s, index) => (
            <div className="stepInfo">
              <div className="checks">
                <>
                  <input
                    type="checkbox"
                    name="inProgress"
                    id="inProgress"
                    onClick={() => setChecked(s, index)}
                  />{" "}
                  <br />
                  <label htmlFor="inProgress">
                    description: {s.description}
                  </label>
                </>
                <br />
                <>
                  <label htmlFor="inProgress">
                    Expected step: {s.expectedStep}
                  </label>
                </>
              </div>
            </div>
          ))}
          <div className="bugSpace">
            <input
              onClick={(e) => e.stopPropagation()}
              type="text"
              name="bug"
              id="bug"
              onChange={(e) => handleChange(e)}
            style={{color:"black"}}/>
            <button onClick={(e) => setBug(e, t.id)} className="bugBtn">
              Report Bug
            </button>
          </div>
        </div>
        <div>
          <button className="btn btn-dark" onClick={() => setToDo(t.id)}>
            To do section
          </button>
          <button className="btn btn-dark" onClick={() => setToDone(t.id)}>
            To Done section
          </button>
        </div>
      </div>
    </div>
  ));
};

export default InProgComp;
