// // Searchbox.js

// import React from "react";
// import Autocomplete from "react-google-autocomplete";

// const Searchbox = ({ handleInput }) => {
//   const handlePlaceSelect = (place) => {
//     const address = place.formatted_address;
//     const lat = place.geometry.location.lat();
//     const lng = place.geometry.location.lng();

//     handleInput({ address, lat, lng });
//   };

//   return (
//     <div>
//       <Autocomplete
//         apiKey="AIzaSyAU0DASyH7nq0ypKB-en5f7TK2dDPvWpJI"
//         onPlaceSelected={handlePlaceSelect}
//         types={["geocode"]}
//         placeholder="Enter address"
//         style={{
//           width: "100%",
//           height: "40px",
//           paddingLeft: "16px",
//           marginTop: "10px",
//         }}
//       />
//     </div>
//   );
// };

// export default Searchbox;
