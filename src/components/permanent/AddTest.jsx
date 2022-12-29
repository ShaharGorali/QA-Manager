import { useFormik } from "formik";
import React from "react";
import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import ArrContext from ".././arrContext";
import Header from "./Header";

const AddTest = () => {
  const { test, setTest } = useContext(ArrContext);
  const [inputFieldCount, setInputFieldCount] = useState(1);
  const [id, setId] = useState(1);

  const formik = useFormik({
    initialValues: {
      id: 1,
      title: "",
      pn: "",
      dAnde: [
        {
          description: "",
          expectedStep: "",
          checked: false,
        },
      ],
      status: "todo",
    },
  });

  const addDiscriptionExpectedStep = () => {
    formik.setValues({
      ...formik.values,
      dAnde: [
        ...formik.values.dAnde,
        {
          description: "",
          expectedStep: "",
          checked: false,
        },
      ],
    });
    setInputFieldCount(inputFieldCount + 1); // update state variable
  };

  const removeDiscriptionExpectedStep = (index) => {
    formik.setValues({
      ...formik.values,
      dAnde: formik.values.dAnde.filter((_, i) => i !== index),
    });
    setInputFieldCount(inputFieldCount - 1); // update state variable
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setId(id + 1);
    let newVal = formik.values;
    newVal.id = id;
    alert("Submited");
    formik.handleReset();
    console.log(newVal);
    setTest([...test, newVal]); // push formik values to test array
  };

  console.log(test);
  console.log(formik.values.id);
  return (<>
    <Header/>
    <form className="addNewSpace" onSubmit={handleSubmit}>
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          name="title"
          placeholder="Enter title"
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        <label>Select your test type</label>
        <select
          name="pn"
          id="selectpn"
          value={formik.values.pn}
          onChange={formik.handleChange}
          className="form-select"
        >
          <option style={{ color: "white" }} key={"select"} value="">
            Select
          </option>
          <option style={{ color: "white" }} key={"Positive"} value="Positive">
            Positive
          </option>
          <option style={{ color: "white" }} key={"Negative"} value="Negative">
            Negative
          </option>
        </select>
        {formik.values.dAnde.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <label className="form-label">{`description ${index + 1}`}</label>
              <input
                type="text"
                className="form-control"
                name={`dAnde[${index}].description`}
                placeholder="Enter description"
                value={formik.values.dAnde[index].description}
                onChange={formik.handleChange}
              />
              <label className="form-label">{`Expected Step ${
                index + 1
              }`}</label>
              <input
                type="text"
                className="form-control"
                name={`dAnde[${index}].expectedStep`}
                placeholder="Enter Expected Step"
                value={formik.values.dAnde[index].expectedStep}
                onChange={formik.handleChange}
              />
              {/* Add remove button here, but only if the index is greater than 0 */}
              {index > 0 && index === formik.values.dAnde.length - 1 && (
                <button
                  onClick={() => removeDiscriptionExpectedStep(index)}
                  className="btn btn-dark addNewSpecial1"
                >
                  Remove
                </button>
              )}
            </React.Fragment>
          );
        })}
        <div className="addNewBtns">
          <button
            className="btn btn-dark addNewSpecial"
            onClick={(event) => {
              event.preventDefault();
              addDiscriptionExpectedStep();
            }}
          >
            Add new expected step
          </button>

          <button type="submit" className="btn btn-dark addNewSpecial">
            Submit
          </button>
          <div>
            <NavLink to={"/main"}>
              <button className="btn btn-dark addNewSpecial2">Back to QA Manager</button>
            </NavLink>
          </div>
        </div>
    </form></>
  );
};
export default AddTest;
