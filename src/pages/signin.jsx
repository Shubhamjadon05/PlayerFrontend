import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import BgSignup from "../assets/background/BgSignUp.png";
import { useFormik } from "formik";
import { Formik, Form as MyForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogin } from "../hooks/login";
import React from "react";
const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const backgroundImage = {
	background: `url(${BgSignup})`,
	height: "100vh",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
};
const validationSchema = Yup.object().shape({
	email: Yup.string()
		.email("Invalid email address format")
		.required("Email is required"),
	password: Yup.string().required(),
});

const initialValues = {
	email: "",
	password: "",
};

function SignIn() {
	const [loginState, setLoginState] = React.useState(false);
	const { user } = useAuthContext();
	const { login, isLoading, error } = useLogin();

	const handleSubmit = async (values) => {
		console.log(values);
		await login(values.email, values.password);
		if (!error) {
			setLoginState(true);
		} else {
			setLoginState("not found");
		}
		console.log("login state: " + loginState);
	};
	return (
		<>
			<div className="container-fluids" style={{ height: "100vh" }}>
				<div
					className="row justify-content-center align-items-center h-100"
					style={backgroundImage}
				>
					<div className="col-10 col-lg-4 col-md-6 col-sm-8 px-5">
						<Formik
							initialValues={initialValues}
							onSubmit={handleSubmit}
							validationSchema={validationSchema}
						>
							<MyForm className="border p-3 rounded bg-white shadow-lg">
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Email address</Form.Label>
									<Field
										className="form-control"
										type="email"
										id="email"
										name="email"
										placeholder="Enter email"
									/>
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicRole">
									<Form.Label>Password</Form.Label>
									<Field
										className="form-control"
										type="text"
										id="password"
										name="password"
										placeholder="Password"
									></Field>
								</Form.Group>
								<Button variant="primary" type="submit">
									Submit
								</Button>
							</MyForm>
						</Formik>
					</div>
				</div>
			</div>
		</>
	);
}

export default SignIn;
