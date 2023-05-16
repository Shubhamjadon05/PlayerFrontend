import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import Searchbox from "./Search";
const ClubRegistration = (setMarker, handleInput) => {
  const [clubData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    role: "",
    sports: [],
    email: "",
  });

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidMobile, setIsValidMobile] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted", clubData);

    const res = await fetch(
      `http://localhost:4112/players/getClubregisterPlayer`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ clubData }),
      }
    );
    console.log(res);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...clubData, [name]: value });
  };

  const handleSportsChange = (event) => {
    setFormData({ ...clubData, sports: event.target.value });
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setFormData({ ...clubData, email: value });
    setIsValidEmail(/^\S+@\S+\.\S+$/.test(value));
  };

  const handleMobileChange = (event) => {
    const value = event.target.value;
    setFormData({ ...clubData, mobile: value });
    setIsValidMobile(/^\d{10}$/.test(value));
  };

  return (
    <>
      <div style={{ backgroundColor: "#f1f1f1" }}></div>
      <div className="pt-5" style={{ width: "vh" }}>
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
                value={clubData.name}
                onChange={handleInputChange}
                required
              />
              <br />
              <TextField
                fullWidth
                label="Address"
                name="address"
                value={clubData.address}
                onChange={handleInputChange}
                required
                multiline
                style={{
                  paddingRight: "1rem",
                  paddingTop: "1rem",
                  width: "px  ",
                }}
              />

              <Searchbox
                setMarker={setMarker}
                handleInput={handleInput}
                style={{ paddingRight: "7rem" }}
              />

              <br />
              <TextField
                fullWidth
                label="Mobile Number"
                name="mobile"
                value={clubData.mobile}
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
                <InputLabel>Sports</InputLabel>
                <Select
                  name="sports"
                  value={clubData.sports}
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
              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div />
    </>
  );
};

export default ClubRegistration;

// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import BgSignup from "../assets/background/BgSignUp.png";
// import { useFormik } from "formik";
// import { Formik, Form as MyForm, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useSignup } from "../hooks/useSignup";
// import React from "react";
// import { useAuthContext } from "../hooks/useAuthContext";
// import MainNav from "../components/mainNav";

// const handleSubmit = async (event) => {
//   event.preventDefault();
//   console.log("Form submitted", formData);

//   const res = await fetch(`http://localhost:4112/players/registerPlayer`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ formData }),
//   });
//   console.log(res);
// };
// const handleInputChange = (event) => {
//   const { name, value } = event.target;
//   setFormData({ ...formData, [name]: value });
// };

// const phoneRegExp =
//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
// const backgroundImage = {
//   background: `url(${BgSignup})`,
//   height: "100vh",
//   backgroundRepeat: "no-repeat",
// };
// const validationSchema = Yup.object().shape({
//   name: Yup.string().required(),
//   phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
//   email: Yup.string()
//     .email("Invalid email address format")
//     .required("Email is required"),
//   role: Yup.string().required(),
//   status: Yup.string().required(),
//   password: Yup.string().required(),
//   cpassword: Yup.string().required(),
// });

// const initialValues = {
//   email: "",
//   password: "",
//   cpassword: "",
//   name: "",
//   mobile: "",
//   username: "",
//   role: "",
//   status: "",
// };

// const SportCenter = () => {
//   const { signup } = useSignup();
//   const { user } = useAuthContext();

//   React.useEffect(() => {
//     console.log(user);
//   }, []);

//   const handleSubmit = async (values) => {
//     await signup(values);
//   };
//   return (
//     <>
//       <div className="pt-5">
//         <div className="container-fluids" style={{ height: "100vh" }}>
//           <div
//             style={{ hight: "300vh" }}
//             className="row justify-content-center align-items-center h-100"
//             // style={backgroundImage}
//           >
//             <div className="col-12"></div>
//             <div className="col-12 col-md-8 col-sm-8 col-lg-7 px-5 py-5">
//               <Formik
//                 initialValues={initialValues}
//                 value={formData.name}
//                 onChange={handleInputChange}
//               >
//                 <MyForm className="border p-3 rounded bg-white shadow-lg">
//                   <Form.Group className="mb-3" controlId="formBasicName">
//                     <Form.Label style={{ display: "flex" }}>Name</Form.Label>
//                     <Field
//                       className="form-control"
//                       type="text"
//                       placeholder="Name"
//                       id="name"
//                       name="name"
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3" controlId="formBasicPhone">
//                     <Form.Label style={{ display: "flex" }}>
//                       Mobile Number
//                     </Form.Label>
//                     <Field
//                       className="form-control"
//                       name="mobile"
//                       id="mobile"
//                       type="text"
//                       placeholder="Number"
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label style={{ display: "flex" }}>
//                       Email address
//                     </Form.Label>
//                     <Field
//                       className="form-control"
//                       type="email"
//                       id="email"
//                       name="email"
//                       placeholder="Enter email"
//                     />
//                     <Form.Text className="text-muted"></Form.Text>
//                   </Form.Group>
//                   <Form.Group className="mb-3" controlId="formBasicName">
//                     <Form.Label style={{ display: "flex" }}>Address</Form.Label>
//                     <Field
//                       className="form-control"
//                       type="text"
//                       placeholder="Address "
//                       id="Address"
//                       name="Address"
//                     />
//                   </Form.Group>

//                   <Form.Group className="mb-3" controlId="formBasicName">
//                     <Form.Label style={{ display: "flex" }}>
//                       Password
//                     </Form.Label>
//                     <Field
//                       className="form-control"
//                       type="text"
//                       placeholder="Password"
//                       id="password"
//                       name="password"
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3" controlId="formBasicName">
//                     <Form.Label style={{ display: "flex" }}>
//                       Confirm Password
//                     </Form.Label>
//                     <Field
//                       className="form-control"
//                       type="text"
//                       placeholder="Password"
//                       id="cpassword"
//                       name="cpassword"
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3" controlId="formBasicRole">
//                     <Form.Label style={{ display: "flex" }}>Role</Form.Label>
//                     <Field
//                       as="select"
//                       className="form-control"
//                       aria-label="Default select example"
//                       id="role"
//                       name="role"
//                     >
//                       <option>Open this select menu</option>
//                       <option value="1">One</option>
//                       <option value="2">Two</option>
//                       <option value="3">Three</option>
//                     </Field>
//                   </Form.Group>
//                   <Form.Group className="mb-3" controlId="formBasicRole">
//                     <Form.Label style={{ display: "flex" }}>Status</Form.Label>
//                     <Field
//                       as="select"
//                       className="form-control"
//                       aria-label="Default select example"
//                       id="status"
//                       name="status"
//                     >
//                       <option>Open this select menu</option>
//                       <option value="1">One</option>
//                       <option value="2">Two</option>
//                       <option value="3">Three</option>
//                     </Field>
//                   </Form.Group>
//                   <Button
//                     variant="primary"
//                     type="submit"
//                     style={{ width: "500px", hight: "" }}
//                   >
//                     Submit
//                   </Button>
//                 </MyForm>
//               </Formik>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SportCenter;
