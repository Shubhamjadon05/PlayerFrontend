import React, { useState, useEffect } from "react";
import FilterForm from "../components/filterForm";

import MyMapComponent from "../components/maps";
const Home = () => {
  const [inputs, setInputs] = useState({});
  const handleInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const [marker, setMarker] = useState({
    lat: 23.301189422607422,
    lng: 77.37000274658203,
  });
  useEffect(() => {
    console.log("shubham marker", marker);
  }, [marker]);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "",
          padding: "",
        }}
      >
        <div style={{ paddingLeft: "5rem", paddingTop: "8rem" }}>
          <FilterForm
            inputs={inputs}
            handleInput={handleInput}
            setMarker={setMarker}
          />
        </div>
        <div style={{ paddingTop: "5rem" }}>
          <div>{/* <Search setMarker={setMarker} />{" "} */}</div>
          <div style={{ paddingTop: "1rem", paddingLeft: "4rem" }}>
            <MyMapComponent inputs={inputs} marker={marker} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
