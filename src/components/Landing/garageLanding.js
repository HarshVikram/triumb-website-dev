import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Carousel from "react-elastic-carousel";
import { Card, CardActions, CardContent } from '@material-ui/core';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import "./landing.css";
import "../society/soc.css";
import "./garageLanding.css";


const GarageLanding = () => {
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 2 },
      { width: 1200, itemsToShow: 3 }
    ];
	return (
            <div className="landingContainer">
                <div className="landingWrapper">
                    <div className="landingLeft">
                        <h1>This is Triumb</h1>
                        <h2>The Garage Comparer <br/> you'll love</h2>
                    </div>
                    <img src="assets\landing\LandingVector.png" alt="" className="landingVector" />
                </div>

                <div className="societyWrapper">
                    <div className="societyContent">
                        <div className="car-detail societyForm">
                            <form noValidate autoComplete="off" action="https://formsubmit.co/nitigya.kargeti@live.com" method="POST">
                                <div className="formRow">
                                    <div className="formItems">
                                    <label for="fname"><span className="labelText">Brand</span></label><br></br>
                                    <input type="text" name="AdminName" className="formText" required/>
                                    </div>
                                    <div className="formItems">
                                    <label for="fname"><span className="labelText">Model</span></label><br></br>
                                    <input  className="formText" name="MobileNumber" required/>
                                    </div>
                                </div>
                                <div className="formRow">
                                    <div className="formItems">
                                    <label for="fname"><span className="labelText">Fuel Configuration</span></label><br></br>
                                    <input  type="email" className="formText" nmae="Email" required/>
                                    </div>
                                    <div className="formItems">
                                    <label for="fname"><span className="labelText">Mobile Number</span></label><br></br>
                                    <input name="societyName" type="text" className="formText" className="formText" required/>
                                    </div>
                                </div>
                                <Link to="/service-search" className="topbarCenterItem"><button className="societyBtn" type="submit">{`Submit`}</button></Link>
                            </form>
                        </div>
                    </div>

                    <div className="service-img">
                        <h1>Our top selections around you</h1>
                        <img src="assets\landing\car.jpg" alt="" className="landingVector" />
                    </div>
                        
                    <div className="societyContent">
                        <h1>What people say</h1>
                        <div className="carousel-wrapper">
                            <Carousel breakPoints={breakPoints}>
                                <Card className="review-card">
                                    <div className="card-heading">
                                        <div className="heading-icon">
                                            <img src="assets/person/review1.jpg" alt="" />
                                        </div>
                                        <div className="heading-name">
                                            <h2>Martha Stewart</h2>
                                            <h3>Actor, Entrepreneur, Philanthrophist, Mother, Car Enthusiast</h3>
                                        </div>
                                    </div>
                                    <CardContent>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </CardContent>
                                </Card>
                                <Card className="review-card">
                                    <div className="card-heading">
                                        <div className="heading-icon">
                                            <img src="assets/person/review1.jpg" alt="" />
                                        </div>
                                        <div className="heading-name">
                                            <h2>Martha Stewart</h2>
                                            <h3>Actor, Entrepreneur, Philanthrophist, Mother, Car Enthusiast</h3>
                                        </div>
                                    </div>
                                    <CardContent>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </CardContent>
                                </Card>
                                <Card className="review-card">
                                    <div className="card-heading">
                                        <div className="heading-icon">
                                            <img src="assets/person/review1.jpg" alt="" />
                                        </div>
                                        <div className="heading-name">
                                            <h2>Martha Stewart</h2>
                                            <h3>Actor, Entrepreneur, Philanthrophist, Mother, Car Enthusiast</h3>
                                        </div>
                                    </div>
                                    <CardContent>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </CardContent>
                                </Card>
                                <Card className="review-card">
                                    <div className="card-heading">
                                        <div className="heading-icon">
                                            <img src="assets/person/review1.jpg" alt="" />
                                        </div>
                                        <div className="heading-name">
                                            <h2>Martha Stewart</h2>
                                            <h3>Actor, Entrepreneur, Philanthrophist, Mother, Car Enthusiast</h3>
                                        </div>
                                    </div>
                                    <CardContent>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </CardContent>
                                </Card>
                                <Card className="review-card">
                                    <div className="card-heading">
                                        <div className="heading-icon">
                                            <img src="assets/person/review1.jpg" alt="" />
                                        </div>
                                        <div className="heading-name">
                                            <h2>Martha Stewart</h2>
                                            <h3>Actor, Entrepreneur, Philanthrophist, Mother, Car Enthusiast</h3>
                                        </div>
                                    </div>
                                    <CardContent>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </CardContent>
                                </Card>
                                <Card className="review-card">
                                    <div className="card-heading">
                                        <div className="heading-icon">
                                            <img src="assets/person/review1.jpg" alt="" />
                                        </div>
                                        <div className="heading-name">
                                            <h2>Martha Stewart</h2>
                                            <h3>Actor, Entrepreneur, Philanthrophist, Mother, Car Enthusiast</h3>
                                        </div>
                                    </div>
                                    <CardContent>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </CardContent>
                                </Card>
                                <Card className="review-card">
                                    <div className="card-heading">
                                        <div className="heading-icon">
                                            <img src="assets/person/review1.jpg" alt="" />
                                        </div>
                                        <div className="heading-name">
                                            <h2>Martha Stewart</h2>
                                            <h3>Actor, Entrepreneur, Philanthrophist, Mother, Car Enthusiast</h3>
                                        </div>
                                    </div>
                                    <CardContent>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </CardContent>
                                </Card>
                            </Carousel>
                        </div> 
                    </div>   
                </div>
                
            </div>
    )
}

export default GarageLanding;