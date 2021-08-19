import React from 'react';
import "./signup.css";
import { useState, useRef, useContext } from "react";
import GoogleLogin from "react-google-login";
import AuthContext from "../home/context/AuthContext";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useHistory,
} from "react-router-dom";


const isEmpty = (value) => value.trim() === "";
const isSixChars = (value) => value.trim().length >= 6;
const validateEmail = (value) => {
	var re = /\S+@\S+\.\S+/;
	return re.test(value);
};
const isPhone = (value) => {
	let re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	return re.test(value) && value.trim().length === 10;
};

export default function SignUp() {
	const authCtx = useContext(AuthContext);
	let history = useHistory();

	const [formInputsValidity, setFormInputsValidity] = useState({
		name: true,
		email: true,
		password: true,
		phone: true,
	});

	const emailRef = useRef();
	const passwordRef = useRef();
	const nameRef = useRef();
	const phoneRef = useRef();

	const formSubmitHandler = async (event) => {
		event.preventDefault();

		const enteredEmail = emailRef.current.value;
		const enteredPassword = passwordRef.current.value;
		const enteredName = nameRef.current.value;
		const enteredPhone = phoneRef.current.value;

		const enteredNameIsValid = !isEmpty(enteredName);
		let enteredEmailIsValid = !isEmpty(enteredEmail);
		enteredEmailIsValid = validateEmail(enteredEmail);
		let enteredPasswordIsValid = !isEmpty(enteredPassword);
		enteredPasswordIsValid = isSixChars(enteredPassword);
		let enteredPhoneIsValid = !isEmpty(enteredPhone);
		enteredPhoneIsValid = isPhone(enteredPhone);

		setFormInputsValidity({
			name: enteredNameIsValid,
			email: enteredEmailIsValid,
			password: enteredPasswordIsValid,
			phone: enteredPhoneIsValid,
		});

		const formIsValid =
			enteredNameIsValid &&
			enteredEmailIsValid &&
			enteredPasswordIsValid &&
			enteredPhoneIsValid;

		if (!formIsValid) {
			return;
		}

		const response = await fetch("http://ec2-15-206-174-74.ap-south-1.compute.amazonaws.com:8800/register", {
			method: "POST",
			body: JSON.stringify({
				username: enteredEmail,
				password: enteredPassword,
				phone: enteredPhone,
				name: enteredName,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) => {
			return response
				.json()
				.then(async (data) => {
					await authCtx.authContextUpdate(data);
					// history.push("/");
					console.log(data);
				})
				.catch((err) => {
					console.log(err);
				});
		});
	};

	const responseGoogle = async (response) => {
		console.log(response);
		console.log("Response from Google:", response.profileObj);

		const res = await fetch("http://ec2-15-206-174-74.ap-south-1.compute.amazonaws.com:8800/login/google", {
			method: "POST",
			body: JSON.stringify(response.profileObj),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((res) => {
			return res
				.json()
				.then(async (data) => {
					await authCtx.authContextUpdate(data);
					history.push("/");
					console.log("Data: ", data);
				})
				.catch((err) => {
					console.log(err);
				});
		});
	};

	return (
		<div className="signupWrapper">
			<div className="signupLeft">
				<h1>Sign Up</h1>
				{/* <div className="googleAuth">
                    <img  className="authLogo" src="assets\google.png" alt=""/>
                      <span className="authText">Sign In With Google</span> 

                       
                    </div> */}
				{/* <img
					src="/assets/signup/google.png"
					alt=""
					className="signupLeftImg"
				/> */}
				<div className="signupRightContainer">
					<div className="signupGoogleImg">
						<GoogleLogin
							clientId="421506524323-fbgiuds1eq1oj0u08ifs3i8c415u84p1.apps.googleusercontent.com"
							onSuccess={responseGoogle}
							onFailure={responseGoogle}
							cookiePolicy={"single_host_origin"}
							className="signupLeftImg"
              buttonText="Sign Up with Google"
							theme="dark"
              
						/>
					</div>
				</div>{" "}
				<div className="or">
					<hr />
					<span className="orText">OR</span>
					<hr />
				</div>
				<form
					noValidate
					autoComplete="off"
					onSubmit={formSubmitHandler}
				>
					<div className="formRow">
						<div className="formItems">
							<label for="fname">
								<span className="labelText">Name</span>
							</label>
							<br></br>
							<input className="formText" ref={nameRef} />
							{!formInputsValidity.name && (
								<p className="invalid">
									Please enter a valid name
								</p>
							)}
						</div>
						<div className="formItems">
							<label for="fname">
								<span className="labelText">Mobile Number</span>
							</label>
							<br></br>
							<input className="formText" ref={phoneRef} />
							{!formInputsValidity.phone && (
								<p className="invalid">
									Please enter a valid Phone Number <br />{" "}
									(Must be exactly 10 digits)
								</p>
							)}
						</div>
					</div>
					<div className="formRow">
						<div className="formItems">
							<label for="fname">
								<span className="labelText">Email</span>
							</label>
							<br></br>
							<input
								type="email"
								className="formText"
								ref={emailRef}
							/>
							{!formInputsValidity.email && (
								<p className="invalid">
									Please enter a valid email
								</p>
							)}
						</div>
						<div className="formItems">
							<label for="fname">
								<span className="labelText">Password</span>
							</label>
							<br></br>
							<input
								type="password"
								className="formText"
								ref={passwordRef}
							/>
							{!formInputsValidity.password && (
								<p className="invalid">
									Please enter a valid password <br /> (At
									least 6 Characters)
								</p>
							)}
						</div>
					</div>

					<button className="signupBtn" type="submit">
						Sign Up
					</button>
					{/* {error && <p className="invalid">Incorrect Email ID or Password. Please try again!</p>} */}
				</form>
				<div className="signupLeftRedirect">
					<p className="redirectText">
						Already Have An Account?<br></br>
						<Link to="/login">
							{" "}
							<span className="redirectLink">Click Here</span>
						</Link>
						To Sign In
					</p>
				</div>
			</div>

			<img
				src="/assets/signup/image.png"
				alt=""
				className="signupRight"
			/>
		</div>
	);
}
