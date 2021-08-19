import React from 'react';
import "./soc.css";

export default function Soc() {
    return (
        <>
            <div className="societyWrapper">
                <div className="societyContent">
                    <h1>Register your Society</h1>
                    <p>Want us to work in your society? Send us a message and we’ll get back to you!</p>
                    <div className="societyForm">
                        
                     <form noValidate autoComplete="off" action="https://formsubmit.co/nitigya.kargeti@live.com" method="POST">
                        <div className="formRow">
                            <div className="formItems">
                            <label for="fname"><span className="labelText">Admin Name</span></label><br></br>
                            <input type="text" name="AdminName" className="formText" required/>
                            </div>
                            <div className="formItems">
                            <label for="fname"><span className="labelText">Mobile Number</span></label><br></br>
                            <input  className="formText" name="MobileNumber" required/>
                            </div>
                        </div>
                        <div className="formRow">
                            <div className="formItems">
                            <label for="fname"><span className="labelText">Email</span></label><br></br>
                            <input  type="email" className="formText" nmae="Email" required/>
                            </div>
                            <div className="formItems">
                            <label for="fname"><span className="labelText">Society Name</span></label><br></br>
                            <input name="societyName" type="text" className="formText" className="formText" required/>
                            </div>
                        </div>

						<div className="formRow">
                            <div className="formItems">
                            <label for="fname"><span className="labelText">Address</span></label><br></br>
                            <input name="address" type="textarea"  className="formText" className="formText" required/>
                            </div>
                        </div>

                        <button className="societyBtn" type="submit">{`Sign Up >`}</button>
                     </form>

                    </div>
                </div>
                
            </div>
        </>
    )
}
