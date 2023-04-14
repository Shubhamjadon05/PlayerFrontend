import { Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import { useState, useEffect } from "react";
import Searchbox from "../pages/Search";
import { getFilteredPlayers } from "../Servises/playerService";

// useEffect(() => {
//   getAllPlayers();
//   let a;
//   let current = [];
//   current.push();
//   setAllMarkers(current);
// }, []);

// const [map, setMap] = React.useState(null);

// const [players, setPlayers] = React.useState([]);

// const getAllPlayers = async () => {
//   let bodyData = {};
//   let options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       body: JSON.stringify(bodyData),
//     },
//   };
//   const response = await fetch(
//     "http://localhost:4112/players/getFilteredPlayers",
//     options
//   ).then((res) => res.json().then((jsonRes) => jsonRes));
//   console.log("RES", response);
//   setPlayers(response.players);
// };

const FilterForm = ({ setMarker, handleInput, inputs }) => {
  const SPORTS = [
    { label: "Cricket", value: "option_1" },
    { label: "Football", value: "option_2" },
    { label: "Basketball", value: "option_3" },
    { label: "TENNIS", value: "option_4" },
    { label: "VOLLYBALL", value: "option_5" },
  ];

  const DAYS = [
    { label: "Monday", value: "option_1" },
    { label: "Tuesday", value: "option_2" },
    { label: "Wednessday", value: "option_3" },
    { label: "Thursday", value: "option_4" },
    { label: "Friday", value: "option_1" },
    { label: "Satarday", value: "option_2" },
    { label: "Sunday", value: "option_3" },
  ];

  const validationSchema = Yup.object().shape({
    sports: Yup.string().required(),
    day: Yup.string().required(),
    time: Yup.string().required(),
    location: Yup.string().required(),
  });

  const initialValues = {
    sports: "",
    time: "",
    day: "",
    location: { city: "" },
  };

  const handleSubmit = async (values) => {
    let result = await getFilteredPlayers();
    console.log("Input result", result);
  };

  const [valueSports, setvalueSports] = useState("");
  const [valueDays, setvalueDays] = useState("");

  console.log(inputs);

  const handleOnchangeSports = (val) => {
    setvalueSports(val);
  };
  const handleOnchangeDays = (val) => {
    setvalueDays(val);
  };
  useEffect(() => {
    getFilteredPlayers();
    let a;
    let current = [];
    current.push();
  }, []);

  const [map, setMap] = useState(null);

  const [players, setPlayers] = useState([]);

  const getFilteredPlayers = async () => {
    let bodyData = {};
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        body: JSON.stringify(bodyData),
      },
    };
    const response = await fetch(
      "http://localhost:4112/players/getFilteredPlayers",
      options
    ).then((res) => res.json().then((jsonRes) => jsonRes));
    console.log("RES", response);
    setPlayers(response.players);
  };

  return (
    <>
      <div style={{ display: "", justifyContent: "" }}>
        <div className="" style={{ width: "87%" }}>
          <label>Sport</label>
          <select
            onChange={handleInput}
            className="form-select"
            aria-label="Default select example"
            name="sport"
          >
            <option selected>Open this select menu</option>
            {SPORTS.map((row, index) => {
              return (
                <option key={index} value={row.label}>
                  {row.label}
                </option>
              );
            })}
          </select>

          {/* {error ? <ErrorMessage /> : null} */}
        </div>
        <div className="" style={{ width: "87%" }}>
          <label>Day</label>
          <select
            name="day"
            className="form-select"
            aria-label="Default select example"
            onChange={handleInput}
          >
            <option selected>Open this select menu</option>
            {DAYS.map((row, index) => {
              return (
                <option key={index} value={row.label}>
                  {row.label}
                </option>
              );
            })}
          </select>

          {/* <ErrorMessage /> */}
        </div>
        <div className="  " style={{ width: "87%" }}>
          <label>From</label>
          <input
            name="from"
            onChange={handleInput}
            className="form-control"
            type="time"
          />
          {/* <ErrorMessage /> */}
        </div>
        <div className="" style={{ width: "87%" }}>
          <label>To</label>
          <input
            name="to"
            onChange={handleInput}
            className="form-control"
            type="time"
          />
          {/* <ErrorMessage /> */}
        </div>
        <Searchbox setMarker={setMarker} />
      </div>
      <div>
        <button onClick={handleSubmit}>submit</button>
      </div>
    </>
  );
};

export default FilterForm;

// <Formik
//   initialValues={initialValues}
//   onSubmit={handleSubmit}
//   validationSchema={validationSchema}
// >
//   {/* <Form
//           initialValues={initialValues}
//           onSubmit={handleSubmit}
//           validationSchema={validationSchema}
//         > */}
//   <div className="">
//     <div className="" style={{ width: "100%" }}>
//       <div className="" style={{ width: "87%" }}>
//         <label>Sport</label>
//         <select className="form-select" aria-label="Default select example">
//           <option selected>Open this select menu</option>
//           {SPORTS.map((row, index) => {
//             return (
//               <option key={index} value={row.value}>
//                 {row.label}
//               </option>
//             );
//           })}
//         </select>

//         {/* {error ? <ErrorMessage /> : null} */}
//       </div>
//       <div className="" style={{ width: "87%" }}>
//         <label>Day</label>
//         <select className="form-select" aria-label="Default select example">
//           <option selected>Open this select menu</option>
//           {DAYS.map((row, index) => {
//             return (
//               <option key={index} value={row.value}>
//                 {row.label}
//               </option>
//             );
//           })}
//         </select>

//         {/* <ErrorMessage /> */}
//       </div>
//       <div className="  " style={{ width: "87%" }}>
//         <label>From</label>
//         <input className="form-control" type="time" />
//         {/* <ErrorMessage /> */}
//       </div>
//       <div className="" style={{ width: "87%" }}>
//         <label>To</label>
//         <input className="form-control" type="time" />
//         {/* <ErrorMessage /> */}
//       </div>
//       <div className="" style={{ width: "87%" }}>
//         <label>location</label>
//         <input className="form-control" disabled />
//         {/* <ErrorMessage /> */}
//       </div>
//       <div className="col-11   form-group p-2">
//         {/* <label>Place</label>
//                 <input className="form-control" type="text" /> */}
//         {/* <ErrorMessage /> */}
//       </div>
//       <div>
//       </div>
//       <div className="">
//         <Button
//           type="submit"
//           color="primary"
//           variant="contained"
//           sx={{ marginTop: "2rem" }}
//         >
//           Submit
//         </Button>
//       </div>
//     </div>
//   </div>
//   {/* </Form> */}
// </Formik>;
