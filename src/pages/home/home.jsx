import React from 'react';
import "./home.css";
import Topbar from "../../components/topbar/topbar";
import Footer from "../../components/footer/Footer";

import Landing from "../../components/Landing/Landing";
import GarageLanding from "../../components/Landing/garageLanding";
import Intro from "../../components/Intro/Intro";
import { Zoom, Fade, Slide } from "react-reveal";
import Packs from "../../components/packages/Packs";
import Society from "../../components/society/Soc";
import SignUp from "../../pages/signUp/Signup";
import SignIn from "../../pages/signIn/Signin";
import Vehicle from "../../pages/vehicleInfo/Vehicle";
import Story from "../../pages/story/Story";
import Garage from "../../pages/garage/Garage";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function home() {
	const suv = {
		name: "SUV Plan",
		price: "599",
	};

	const orgs = ["Vatika Infotech", "Manipal University Jaipur"];

	return (
		<Router>
			<Topbar />
			<Switch>
				<Route exact path="/">
					
						<Zoom>
							<Landing />
						</Zoom>

						<Zoom>
							<Intro />
						</Zoom>

						<Fade>
							<GarageLanding />
						</Fade>

						<Fade>
							<Packs />
						</Fade>

						<Fade>
							<Society />
						</Fade>
					
				</Route>
				<Route path="/register">
					<Slide left>
						<SignUp />
					</Slide>
				</Route>
				<Route path="/login">
					<Slide left>
						<SignIn />
					</Slide>
				</Route>

				<Route
					path={`/pack/:vehicle`}
					children={<Vehicle org={orgs} />}
				></Route>

				<Route path="/story">
					<Fade>
					<Story/>
					</Fade>
				</Route>

				<Route path="/garage">
					<Fade>
					<GarageLanding />
					</Fade>
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}
