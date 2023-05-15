import React, { useState } from "react";
import Searchbox from "../pages/Search";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";

const SportsForm = ({ setMarker, handleInput }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    role: "",
    sports: [],
    email: "",
  });

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidMobile, setIsValidMobile] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted", formData);

    const res = await fetch(`http://localhost:4112/players/registerPlayer`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formData }),
    });
    console.log(res);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSportsChange = (event) => {
    setFormData({ ...formData, sports: event.target.value });
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setFormData({ ...formData, email: value });
    setIsValidEmail(/^\S+@\S+\.\S+$/.test(value));
  };

  const handleMobileChange = (event) => {
    const value = event.target.value;
    setFormData({ ...formData, mobile: value });
    setIsValidMobile(/^\d{10}$/.test(value));
  };

  return (
    <>
      <div
        className="pt-5"
        style={{ backgroundColor: "#f5f5f5", border: "1px solid #000" }}
      >
        <div className="container-fluids" style={{ height: "vh", width: "" }}>
          <div
            style={{ hight: "vh" }}
            className="row justify-content-center align-items-center h-100"
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
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <br />
              <div
                style={{
                  paddingRight: "1rem",
                  paddingTop: "1rem",
                  width: "100px  ",
                }}
              >
                {" "}
                Search Location
                <Searchbox setMarker={setMarker} handleInput={handleInput} />
              </div>

              <TextField
                fullWidth
                label="Mobile Number"
                name="mobile"
                value={formData.phone}
                onChange={handleMobileChange}
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
                  value={formData.role}
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
                  value={formData.sports}
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
                <InputLabel>Sports</InputLabel>
                <Select
                  name="sports"
                  value={formData.sports}
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
                value={formData.email}
                onChange={handleEmailChange}
                required
              />
              {!isValidEmail && (
                <span style={{ color: "red" }}>
                  Please enter a valid email address
                </span>
              )}
              <br />
              <button
                style={{ backgroundColor: "black", color: "white" }}
                type="submit"
                onClick={handleSubmit}
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

export default SportsForm;
