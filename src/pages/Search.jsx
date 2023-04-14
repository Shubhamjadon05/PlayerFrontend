import Autocomplete from "react-google-autocomplete";
import React, { props, useEffect, usestate } from "react";
// import Mapp from "./Mapp";
import { useJsApiLoader } from "@react-google-maps/api";

function Searchbox({ setMarker }) {
  const [displaySearch, setDisplaySearch] = React.useState(true);
  return (
    <>
      <div style={{}}>
        {displaySearch && (
          <Autocomplete
            apiKey={"AIzaSyAU0DASyH7nq0ypKB-en5f7TK2dDPvWpJI"}
            onPlaceSelected={(place) => {
              setMarker({
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
              });
              console.log(place.geometry.location.lat());
            }}
            // onChange={handleChange}
          />
        )}
      </div>
    </>
  );
}

export default Searchbox;
