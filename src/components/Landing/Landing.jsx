import React from 'react';
import "./landing.css"

export default function Landing() {
    return (
            <div className="landingContainer">
                <div className="landingWrapper">
                    <div className="landingLeft">
                        <h1>This is Triumb</h1>
                        <h2>The car Cleaning service <br/> you'll love</h2>
                    </div>
                    <img src="assets\landing\LandingVector.png" alt="" className="landingVector" />
                </div>
            </div>
    )
}
