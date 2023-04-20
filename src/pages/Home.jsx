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
            setPlayers={setPlayers}
          />
        </div>
        <div style={{ paddingTop: "5rem" }}>
          <div>{/* <Search setMarker={setMarker} />{" "} */}</div>
          <div style={{ paddingTop: "1rem", paddingLeft: "4rem" }}>
            <MyMapComponent inputs={inputs} marker={marker} players={players} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
