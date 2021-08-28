import React from 'react';
import "./home.css";
import Topbar from "../../components/topbar/topbar";
import Footer from "../../components/footer/Footer";

import Landing from "../../components/Landing/Landing";
import ServiceSearch from "../../pages/garage/Search";
import ServiceSelection from "../../components/garage/serviceSelection";
import ServiceBooking from "../../components/garage/serviceBooking";
import ServiceConfirmation from "../../components/garage/serviceConfirmation";
import PaymentSuccesful from "../../components/garage/paymentSuccesful";
import PaymentUnsuccesful from "../../components/garage/paymentUnsuccesful";
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
					<Zoom><Landing /></Zoom>
					<Zoom><Intro /></Zoom>
					<Fade><Packs /></Fade>
					<Fade><Society /></Fade>					
				</Route>

				<Route path="/register">
					<Slide left><SignUp /></Slide>
				</Route>

				<Route path="/login">
					<Slide left><SignIn /></Slide>
				</Route>

				<Route
					path={`/pack/:vehicle`}
					children={<Vehicle org={orgs} />}
				></Route>

				<Route path="/story">
					<Fade><Story/></Fade>
				</Route>

				<Route path="/garage">
					<Fade><GarageLanding /></Fade>
				</Route>

				<Route path="/service-search">
					<Fade><ServiceSearch /></Fade>
				</Route>

				<Route path="/service-selection">
					<Fade><ServiceSelection /></Fade>
				</Route>

				<Route path="/service-booking">
					<Fade><ServiceBooking /></Fade>
				</Route>

				<Route path="/service-confirmation">
					<Fade><ServiceConfirmation /></Fade>
				</Route>

				<Route path="/payment-succesful">
					<Fade><PaymentSuccesful /></Fade>
				</Route>

				<Route path="/payment-unsuccesful">
					<Fade><PaymentUnsuccesful /></Fade>
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}
