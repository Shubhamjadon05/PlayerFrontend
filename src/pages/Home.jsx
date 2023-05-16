import React, { useState, useEffect } from "react";
import FilterForm from "../components/filterForm";
import MyMapComponent from "../components/maps";

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
    <div style={{ backgroundColor: "" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "",
          padding: "",
        }}
      >
        <div
          style={{
            paddingLeft: "15rem",
            paddingTop: "8rem",
            backgroundColor: "# 488A99",
          }}
        >
          <FilterForm
            inputs={inputs}
            handleInput={handleInput}
            setMarker={setMarker}
            setPlayers={setPlayers}
            style={{ backgroundColor: "488A99" }}
          />
        </div>
        {/* here is map componant and autcomplte componat  */}
        <div style={{ paddingTop: "9rem", backgroundColor: "488A99" }}>
          <div
            style={{
              paddingTop: "1rem",
              paddingLeft: "7rem",
              backgroundColor: "488A99",
            }}
          >
            <MyMapComponent inputs={inputs} marker={marker} players={players} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
