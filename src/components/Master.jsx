import React from "react";
import ArrContext from "./arrContext";
import Main from "./permanent/Main";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

const Master = () => {
  const [forp, setForp] = useState("Failed");
  const [myColor, setMyColor] = useState("");
  const [test, setTest] = useState([])
  //   {
  //     id: 1,
  //     title: "test1",
  //     pn: "Positive",
  //     dAnde: [
  //       {
  //         description: "description 1 blasblasblas blasv blas",
  //         expectedStep: "expected 1 blas blas blas blas blas",
  //         bug: "",
  //       },
  //       {
  //         description: "description 2 blasblasblas blasv blas",
  //         expectedStep: "expected 2 blas blas blas blas blas",
  //         bug: "",
  //       },
  //     ],
  //     status: "todo",
  //   },
  //   {
  //     id: 2,
  //     title: "test2",
  //     pn: "Negative",
  //     dAnde: [
  //       {
  //         description: "description 3 blasblasblas blasv blas",
  //         expectedStep: "expected 1 blas blas blas blas blas",
  //       },
  //       {
  //         description: "description 4 blasblasblas blasv blas",
  //         expectedStep: "expected 2 blas blas blas blas blas",
  //       },
  //     ],
  //     status: "todo",
  //   },
  //   {
  //     id: 3,
  //     title: "test3",
  //     pn: "Negative",
  //     dAnde: [
  //       {
  //         description: "description 5 blasblasblas blasv blas",
  //         expectedStep: "expected 1 blas blas blas blas blas",
  //       },
  //       {
  //         description: "description 6 blasblasblas blasv blas",
  //         expectedStep: "expected 2 blas blas blas blas blas",
  //       },
  //     ],
  //     status: "todo",
  //   },
  //   {
  //     id: 4,
  //     title: "test4",
  //     pn: "Positive",
  //     dAnde: [
  //       {
  //         description: "description 1 blasblasblas blasv blas",
  //         expectedStep: "expected 1 blas blas blas blas blas",
  //       },
  //       {
  //         description: "description 2 blasblasblas blasv blas",
  //         expectedStep: "expected 2 blas blas blas blas blas",
  //       },
  //     ],
  //     status: "todo",
  //   },
  //   {
  //     id: 5,
  //     title: "test5",
  //     pn: "Positive",
  //     dAnde: [
  //       {
  //         description: "description 1 blasblasblas blasv blas",
  //         expectedStep: "expected 1 blas blas blas blas blas",
  //         checked: true,
  //       },
  //       {
  //         description: "description 2 blasblasblas blasv blas",
  //         expectedStep: "expected 2 blas blas blas blas blas",
  //         checked: true,
  //       },
  //     ],
  //     status: "inProgress",
  //   },
  //   {
  //     id: 6,
  //     title: "test6",
  //     pn: "Positive",
  //     dAnde: [
  //       {
  //         description: "description 0 blasblasblas blasv blas",
  //         expectedStep: "expected 1 blas blas blas blas blas",
  //         checked: true,
  //       },
  //       {
  //         description: "description 0 blasblasblas blasv blas",
  //         expectedStep: "expected 2 blas blas blas blas blas",
  //         checked: true,
  //       },
  //       {
  //         description: "description 0 blasblas",
  //         expectedStep: "expected 2 blas blas blas blas blas",
  //         checked: false,
  //       },
  //     ],
  //     status: "inProgress",
  //   },
  //   {
  //     id: 7,
  //     title: "test7",
  //     pn: "Positive",
  //     dAnde: [
  //       {
  //         description: "description 1 blasblasblas blasv blas",
  //         expectedStep: "expected 1 blas blas blas blas blas",
  //         checked: false,
  //       },
  //       {
  //         description: "description 2 blasblasblas blasv blas",
  //         expectedStep: "expected 2 blas blas blas blas blas",
  //         checked: false,
  //       },
  //     ],
  //     status: "inProgress",
  //   },
  //   {
  //     id: 8,
  //     title: "test8",
  //     pn: "Positive",
  //     dAnde: [
  //       {
  //         description: "description 1 blasblasblas blasv blas",
  //         expectedStep: "expected 1 blas blas blas blas blas",
  //       },
  //       {
  //         description: "description 2 blasblasblas blasv blas",
  //         expectedStep: "expected 2 blas blas blas blas blas",
  //       },
  //     ],
  //     status: "done",
  //   },
  // ]);
  return (
    <BrowserRouter>
        <ArrContext.Provider
          value={{ test, setTest, forp, setForp, myColor, setMyColor }}
        >
      <div className="masterSpace">
          <Main test={test} />
      </div>
        </ArrContext.Provider>
    </BrowserRouter>
  );
};

export default Master;
