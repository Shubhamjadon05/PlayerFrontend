import React, { useState, useEffect } from "react";
import FilterForm from "../components/filterForm";
import MyMapComponent from "../components/maps";
// import { Box } from "@mui/material";

const Home = () => {
  const [inputs, setInputs] = useState({});
  const handleInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const [players, setPlayers] = React.useState([]);

  console.log("MAINJ P<LKAyers", players);

  const [marker, setMarker] = useState({
    lat: 23.301189422607422,
    lng: 77.37000274658203,
  });

  useEffect(() => {}, [marker]);

  return (
    <div style={{ backgroundColor: "#79c7a0", width: "100%" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "",
          padding: "",
          border: "5px solid #000",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            paddingLeft: "19rem",
            paddingTop: "8rem",
            backgroundColor: "# 488A99",
            backgroundColor: "488A99",
          }}
        >
          <FilterForm
            inputs={inputs}
            handleInput={handleInput}
            setInputs={setInputs}
            setMarker={setMarker}
            setPlayers={setPlayers}
            style={{ backgroundColor: "488A99" }}
          />
        </div>
        {/* here is map componant and autcomplte componat  */}
        <div
          style={{
            paddingTop: "9rem",
            paddingLeft: "11rem",
          }}
        >
          <div
            style={{
              backgroundColor: "488A99",
              border: "5px solid #000",
              boxSizing: "border-box",
            }}
          >
            <MyMapComponent inputs={inputs} marker={marker} players={players} />
          </div>
        </div>
      </div>
    </div>
    // this is helprio
  );
};

export default Home;
