// import React from "react";
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

// const containerStyle = {
// 	width: "400px",
// 	height: "400px",
// };

// const center = {
// 	lat: 77.745,
// 	lng: 38.523,
// };

// function MyMapComponent() {
// 	const { isLoaded } = useJsApiLoader({
// 		id: "google-map-script",
// 		googleMapsApiKey: "AIzaSyAU0DASyH7nq0ypKB-en5f7TK2dDPvWpJI",
// 	});

// 	const [map, setMap] = React.useState(null);

// 	const onLoad = React.useCallback(function callback(map) {
// 		const bounds = new window.google.maps.LatLngBounds(center);
// 		map.fitBounds(bounds);
// 		setMap(map);
// 	}, []);

// 	const onUnmount = React.useCallback(function callback(map) {
// 		setMap(null);
// 	}, []);

// 	return isLoaded ? (
// 		<GoogleMap
// 			mapContainerStyle={containerStyle}
// 			center={center}
// 			zoom={10}
// 			onLoad={onLoad}
// 			onUnmount={onUnmount}
// 		>
// 			{/* Child components, such as markers, info windows, etc. */}
// 			<></>
// 		</GoogleMap>
// 	) : (
// 		<></>
// 	);
// }

// export default React.memo(MyMapComponent);

import React from "react";
// import MyMapComponent from "../components/maps";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "50vw",
  height: "50vh",
};

function MyMapComponent({ marker, inputs }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAU0DASyH7nq0ypKB-en5f7TK2dDPvWpJI",
  });

  // React.useEffect(() => {
  //   getAllPlayers();
  //   let a;
  //   let current = [...allMarkers];
  //   current.push(marker);
  //   setAllMarkers(current);
  // }, [marker]);

  React.useEffect(() => {
    async function fetchPlayers() {
      const response = await fetch(
        "http://localhost:4112/players/getAllPlayer",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ location: "current" }),
        }
      );
      // setPlayers(response.players);
      console.log("all players data", response.players);
    }
    fetchPlayers();
  }, []);

  const [map, setMap] = React.useState(null);

  const [players, setPlayers] = React.useState([]);

  const getAllPlayers = async () => {
    console.log("Trigger Again", inputs);
    let bodyData = { sport: inputs.sport };
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    };
    const response = await fetch(
      "http://localhost:4112/players/getFilteredPlayers",
      options
    ).then((res) => res.json().then((jsonRes) => jsonRes));
    setPlayers(response.players);
  };

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

  const [allMarkers, setAllMarkers] = React.useState([]);

  const onLoadForMarker = (marker) => {
    // console.log("marker: ", marker);
  };

  return isLoaded ? (
    // <Container>
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {/* Child components, such as markers, info windows, etc. */}
      {players.map((player) => (
        <>
          <Marker
            onLoad={onLoadForMarker}
            position={{
              lat: parseFloat(player.lat),
              lng: parseFloat(player.lng),
            }}
          />
        </>
      ))}
      <Marker
        onLoad={onLoadForMarker}
        position={{
          lat: marker.lat,
          lng: marker.lng,
        }}
      />
    </GoogleMap>
  ) : (
    // </Container>
    <></>
  );
}

export default React.memo(MyMapComponent);
