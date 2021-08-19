import React from 'react';
import "./signin.css";
import GoogleLogin from "react-google-login";
import AuthContext from "../home/context/AuthContext";
import { useContext, useRef, useState } from "react";
import AuthProvider from "../home/context/AuthContext";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useHistory,
} from "react-router-dom";

export default function SignIn() {
	const authCtx = useContext(AuthContext);
	// const { authContextUpdate} = useContext(AuthContext);
    const [error, setError] = useState(false);

	const emailRef = useRef();
	const passwordRef = useRef();
	let history = useHistory();

	const formSubmitHandler = async (event) => {
		event.preventDefault();
		const enteredEmail = emailRef.current.value;
		const enteredPassword = passwordRef.current.value;

		const response = await fetch("http://ec2-15-206-174-74.ap-south-1.compute.amazonaws.com:8800/login", {
			method: "POST",
			body: JSON.stringify({
				username: enteredEmail,
				password: enteredPassword,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) => {
            if(response.status !== 200){
                setError(true);
            };
			return response
				.json()
				.then(async (data) => {
					console.log(data);
					await authCtx.authContextUpdate(data);
					history.push("/");
				})
				.catch((err) => {
					console.log(err);
				});
		});

		return;
	};

	const responseGoogle = async (response) => {
        console.log(response);
		console.log("Response from Google:" ,response.profileObj);

		const res = await fetch("http://ec2-15-206-174-74.ap-south-1.compute.amazonaws.com:8800/login/google", {method: "POST" , body: JSON.stringify(response.profileObj),
          headers: {
            'Content-Type': 'application/json',
          },}).then(
			(res) => {
				return res
					.json()
					.then(async (data) => {
						await authCtx.authContextUpdate(data);
						history.push("/");
                        console.log("Data: ",data);
					})
					.catch((err) => {
						console.log(err);
					});
			},
		);


	};

	return (
		<div className="signupWrapper">
			<img
				src="/assets/signup/image.png"
				alt=""
				className="signupRight"
			/>

			<div className="signupLeft">
				<h1>Sign In</h1>


                

				<div className="signupRightContainer">
					<div className="signupGoogleImg">
						<GoogleLogin
							clientId="421506524323-fbgiuds1eq1oj0u08ifs3i8c415u84p1.apps.googleusercontent.com"
							onSuccess={responseGoogle}
							onFailure={responseGoogle}
							cookiePolicy={"single_host_origin"}
                            className="signupLeftImg"
                            theme="dark"
                            />
	
					</div>
				</div>
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
					<div className="formItems">
						<label for="fname">
							<span className="labelText">Email</span>
						</label>
						<br></br>
						<input className="formText" ref={emailRef} />
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
					</div>
                    
                    

					<button className="signupBtn" type="submit">
						Sign In
					</button>

                    {error && <p className="invalid">Incorrect Email ID or Password. Please try again!</p>}
				</form>

				<div className="signupLeftRedirect">
					<p className="redirectText">
						Don't Have An Account?<br></br>
						<Link to="/register">
							{" "}
							<span className="redirectLink">Click Here</span>
						</Link>
						To Sign Up
					</p>
				</div>
			</div>
		</div>
	);
}
