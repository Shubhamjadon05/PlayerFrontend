import Autocomplete from "react-google-autocomplete";
import React, { props, useEffect, usestate } from "react";
// import Mapp from "./Mapp";
import { useJsApiLoader } from "@react-google-maps/api";

function Searchbox({ setMarker, setInputs }) {
  return (
    <>
      <div style={{ width: "100px" }}>
        <Autocomplete
          apiKey={"AIzaSyAU0DASyH7nq0ypKB-en5f7TK2dDPvWpJI"}
          onPlaceSelected={(place) => {
            // target: {
            //                 name: "selectedLocation",
            //                 value: {
            //                   lat: place.geometry.location.lat(),
            //                   lng: place.geometry.location.lng(),
            //                 },
            //               },
            console.log("Trigger Change");
            // setMarker({
            //   lat: place.geometry.location.lat(),
            //   lng: place.geometry.location.lng(),
            // });

            const lat = place.geometry.location.lat();
            const lng = place.geometry.location.lng();

            setInputs((prev) => {
              return {
                ...prev,
                address: place,
                selectedLocation: {
                  lat: lat,
                  lng: lng,
                },
              };
            });
            // console.log(place);
          }}
          // onChange={handleChange}
        />
      </div>
    </>
  );
}

export default Searchbox;
