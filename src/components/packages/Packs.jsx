import React from 'react';
import "./pack.css";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import {useState, useContext, useEffect} from 'react';
import AuthContext from "../../pages/home/context/AuthContext";

export default function Packs() {


    const authCtx = useContext(AuthContext); 
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(()=>{
        setIsAuthenticated(authCtx.authContext.isLoggedIn);
    },  [authCtx.authContext]);


    let buttonContent = isAuthenticated ? "Buy Now >" : "Sign in to explore our packages >";


	return (
		<div>
			<div className="packsWrapper">
				<div className="packsContent">
					<h1>Car Wash packages</h1>
					<p>
						Please note that our services are limited to a number of
						places across Jaipur and we do not serve individual
						memberships.
					</p>
			

				<div className="packs">
					<div className="hatchbackContent">
                        <div className="hatchbackHeading">
                        <h1>Hatchback</h1>
						<p>Monthly Membership.</p>
                        </div>
                        <h1 className="packPrice"><span className="packCurrency">₹</span>399</h1>
                        <hr />
                        <br/>
                        <p classsName="packsDesc">Everyone loves elegance. Groom your Hatchback at just 399/- per month</p>
                        <Link to={isAuthenticated ? "/pack/hatch" : "/login"}>
                        <button className="packBtn">{buttonContent}</button>
                        </Link>
					</div>
					<div className="sedanContent">
                        <div className="sedanHeading">
                        <h1>Sedan</h1>
						<p>Monthly Membership.</p>
                        </div>


                        <h1 className="packPrice"><span className="packCurrency">₹</span>499</h1>
                        <hr />
                        <br/>
                        <p classsName="packsDesc">Washing was never so easy. Let your Sedan enjoy the best spa at just 499/- a month. </p>
                        <Link to={isAuthenticated ? "/pack/sedan" : "/login"}>
                        <button className="packBtn">{buttonContent}</button>
                        </Link>
					</div>
					<div className=" suvContent">
                        <div className="suvHeading">
						<h1>SUV</h1>
						<p>Monthly Membership.</p>
                        </div>


                        <h1 className="packPrice"><span className="packCurrency">₹</span>599</h1>
                        <hr />
                        <br/>
                        <p >Don't let dust stop you. let your SUV shine and flicker at just 599/- a month</p>
                        <Link to={isAuthenticated ? "/pack/suv" : "/login"}>
                        <button className="packBtn">{buttonContent}</button>
                        </Link>
                        
					</div>

				</div>

			</div>
		</div>
     </div>
	);
}
