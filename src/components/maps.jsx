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

  return isLoaded ? (
    // <Container>
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {/* Child components, such as markers, info windows, etc. */}
      {console.log("Inside Map", allPlayers)}
      {allPlayers.map((player) => (
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
    </GoogleMap>
  ) : (
    // </Container>
    <></>
  );
}

export default React.memo(MyMapComponent);
