import React, { useEffect } from "react";
// import MyMapComponent from "../components/maps";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "30vw",
  height: "40vh",
};

function MyMapComponent({ marker, players }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAU0DASyH7nq0ypKB-en5f7TK2dDPvWpJI",
    libraries: ["places"],
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  const center = {
    lat: marker.lat,
    lng: marker.lng,
  };

  const allPlayers = [...players];

  const [allMarkers, setAllMarkers] = React.useState([]);

  const onLoadForMarker = (marker) => {
    // console.log("marker: ", marker);
  };
  const handleMarkerClick = async (id) => {
    const response = await fetch(`/api/getPlayerDashboard/${id}`);
    const data = await response.json();
    // Do something with the retrieved data
  };

  return isLoaded ? (
    // <Container>
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {/* Child components, such as markers, info windows, etc. */}
      {console.log("Inside Map", allPlayers, center)}
      {allPlayers.map((player) => (
        <>
          <Marker
            onLoad={onLoadForMarker}
            position={{
              lat: parseFloat(player.lat),
              lng: parseFloat(player.lng),
            }}
            onClick={() => handleMarkerClick(player.id)}
          />
        </>
      ))}
    </GoogleMap>
  ) : (
    // </Container>
    <></>
  );
}

export default React.memo(MyMapComponent);

// import React, { useEffect, useState } from "react";
// import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
// import { InfoWindow } from "@react-google-maps/api";

// const containerStyle = {
//   width: "30vw",
//   height: "40vh",
// };

// function MyMapComponent({ marker, players }) {
//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: "AIzaSyAU0DASyH7nq0ypKB-en5f7TK2dDPvWpJI",
//     libraries: ["places"],
//   });

//   const [map, setMap] = useState(null);
//   const [selectedMarkerData, setSelectedMarkerData] = useState(null);

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds(marker);
//     map.fitBounds(bounds);

//     setMap(map);
//   }, []);

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null);
//   }, []);

//   const handleMarkerClick = async (event, player) => {
//     // Make an API call to retrieve data about the clicked marker
//     const response = await fetch(`http://localhost:4112/players/MarkerTable`);
//     const data = await response.json();

//     // Set the selectedMarkerData state to the retrieved data
//     setSelectedMarkerData(data);
//   };

//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={marker}
//       zoom={10}
//       onClick={() => setSelectedMarkerData(marker)}
//     >
//       {players.map((player) => (
//         <Marker
//           key={player.id}
//           position={{
//             lat: parseFloat(player.lat),
//             lng: parseFloat(player.lng),
//           }}
//           onClick={(event) => handleMarkerClick(event, player)}
//         />
//       ))}

//       {selectedMarkerData && (
//         <InfoWindow
//           position={{
//             lat: parseFloat(selectedMarkerData.lat),
//             lng: parseFloat(selectedMarkerData.lng),
//           }}
//           onCloseClick={() => setSelectedMarkerData(null)}
//         >
//           {/* Display the selected marker data here */}
//         </InfoWindow>
//       )}
//     </GoogleMap>
//   ) : (
//     <></>
//   );
// }

// export default React.memo(MyMapComponent);
