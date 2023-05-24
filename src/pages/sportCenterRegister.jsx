import React, { useState, useEffect } from "react";
import Searchbox from "../pages/Search";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import Autocomplete from "react-google-autocomplete";
import { Search } from "@mui/icons-material";

const ClubRegister = ({
  setMarker,

  setPlayers,
}) => {
  const [clubData, setclubData] = useState({
    name: "",
    address: "",
    phone: "",
    role: "",
    gender: "",
    sport: "",
    email: "",
    lat: "",
    lng: "",
  });
  // const handleInput = ({ address, lat, lng }) => {
  //   console.log("form before", formData);

  //   setFormData({ ...formData, [address]: address, [lat]: lat, [lng]: lng });
  //   console.log("form", formData);
  //   console.log("address", address);
  //   console.log("lat", lat);
  //   console.log("lng", lng);
  // };
  const [inputs, setInputs] = useState({});
  const handleInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidMobile, setIsValidMobile] = useState(true);

  useEffect(() => {
    getClubPlayers();
    let a;
    let current = [];
    current.push();
  }, []);

  const [map, setMap] = useState(null);

  const getClubPlayers = async (event) => {
    event.preventDefault();
    console.log("Form submitted", clubData);

    const res = await fetch(
      `http://localhost:4112/players/getClubregisterPlayer`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ clubData, inputs }),
      }
    );
    console.log(res);
  };

  // const getregisterPlayers = async () => {
  //   if (inputs.selectedLocation) setMarker(inputs.selectedLocation);
  //   let bodyData = { ...inputs };
  //   let options = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(bodyData),
  //   };
  //   const response = await fetch(
  //     "http://localhost:4112/players/registerPlayer",
  //     options
  //   ).then((res) => res.json().then((jsonRes) => jsonRes));
  //   console.log("RES", response);
  //   if (response && response.registerPlayer)
  //     setPlayers(response.registerPlayer);
  //   else setPlayers([]);
  // };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setclubData({ ...clubData, [name]: value });
  };

  const handleSportsChange = (event) => {
    setclubData({ ...clubData, sport: event.target.value });
  };
  const handlegenderChange = (event) => {
    setclubData({ ...clubData, gender: event.target.value });
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setclubData({ ...clubData, email: value });
    setIsValidEmail(/^\S+@\S+\.\S+$/.test(value));
  };

  const handlephoneChange = (event) => {
    const value = event.target.value;
    setclubData({ ...clubData, phone: value });
    setIsValidMobile(/^\d{10}$/.test(value));
  };

  return (
    <>
      <div
        className="pt-5"
        style={{ backgroundColor: "#999999", border: "1px solid #000" }}
      >
        <div className="container-fluids" style={{ backgroundColor: "488A99" }}>
          <div
            style={{ hight: "vh" }}
            className="row justify-content-center align-items-center"
          >
            <div className="col-12"></div>
            <div className="col-12 col-md-8 col-sm-8 col-lg-7 px-5 py-5"></div>
            <div
              style={{
                marginTop: "px",
                width: "50%",
                marginLeft: "%",
              }}
            >
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={clubData.name}
                onChange={handleInputChange}
                required
              />
              <br />

              <TextField
                fullWidth
                label="Mobile Number"
                name="phone"
                value={clubData.phone}
                onChange={handlephoneChange}
                pattern="[0-9]{10}"
                required
              />
              {!isValidMobile && (
                <span style={{ color: "red" }}>
                  Please enter a valid mobile number
                </span>
              )}
              <br />
              <FormControl fullWidth>
                <InputLabel>Role</InputLabel>
                <Select
                  name="role"
                  value={clubData.role}
                  onChange={handleInputChange}
                  required
                >
                  <MenuItem value={1}>Role 1</MenuItem>
                  <MenuItem value={2}>Role 2</MenuItem>
                  <MenuItem value={3}>Role 3</MenuItem>
                </Select>
              </FormControl>
              <br />
              <FormControl fullWidth>
                <InputLabel>Gender</InputLabel>
                <Select
                  name="Gender"
                  value={clubData.gender}
                  onChange={handleSportsChange}
                  required
                >
                  <MenuItem value="male">male</MenuItem>
                  <MenuItem value="female">female</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
              <br />
              <br />
              <FormControl fullWidth>
                <InputLabel>Club</InputLabel>
                <Select
                  name="sport"
                  value={clubData.sport}
                  onChange={handleSportsChange}
                  required
                >
                  <MenuItem value="Cricket">Cricket</MenuItem>
                  <MenuItem value="Tennis">Tennis</MenuItem>
                  <MenuItem value="Football">Football</MenuItem>
                </Select>
              </FormControl>
              <br />

              <TextField
                fullWidth
                label="Email"
                name="email"
                value={clubData.email}
                onChange={handleEmailChange}
                required
              />
              {!isValidEmail && (
                <span style={{ color: "red" }}>
                  Please enter a valid email address
                </span>
              )}
              <br />

              <div
                style={{
                  display: "",
                  width: "100%",
                }}
              >
                {" "}
                Address
                <Searchbox
                  style={{ width: "18rem" }}
                  label="Addres"
                  handleInput={handleInput}
                  setMarker={setMarker}
                  setInputs={setInputs}
                />
              </div>
              <br />
              <button
                style={{ backgroundColor: "black", color: "white" }}
                type="submit"
                onClick={getClubPlayers}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClubRegister;
