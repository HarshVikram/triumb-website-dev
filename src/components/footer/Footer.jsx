import "./footer.css";
import {ExitToApp,Instagram,Twitter,LinkedIn,Facebook} from '@material-ui/icons';

import { Link } from "react-router-dom";
import AuthContext from "../../pages/home/context/AuthContext";
import {useContext, useState, useEffect} from 'react';




export default function Footer() {

    const authCtx = useContext(AuthContext); 
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(()=>{
        setIsAuthenticated(authCtx.authContext.isLoggedIn);
    },  [authCtx.authContext]);

    const spaceIndex = (authCtx.authContext.name).indexOf(" ");
    console.log(spaceIndex);
    let firstName = "";
    if (spaceIndex !== -1){
         firstName = (authCtx.authContext.name).slice(0, spaceIndex);
    }
    else{
         firstName = authCtx.authContext.name;
    }
    

    return (
        <div>
            <div className="pre-footer">
                <div className="pre-footer-left">
                    <p className="pre-footer-main">Want to recieve exclusive offers? Subscribe to our newsletter!</p>
                    <p className="pre-footer-sub">We promise not to spam you :')</p>
                </div>
                <div className="pre-footer-right">
                    <input  className="formText" name="MobileNumber" placeholder="Your Email" required/>
                    <button>Subscribe</button>
                </div>
                
            </div>
            <div className="topbarContainer">
                <div className="topbarLeft">
                    <Link to="/" style={{textDecoration:"none"}}>© 2021 Triumb.   ALL RIGHTS RESERVED</Link>
                </div>
                <div className="topbarCenter">
                    <ul className="topbarCenterItems">
                        <a href="#"><li className="topbarCenterItem">PRIVACY POLICY</li></a>
                        <a href="#"><li className="topbarCenterItem">TERMS AND CONDITIONS</li></a>
                        <a href="https://wa.me/7697865014"><li className="topbarCenterItem">CONTACT US</li></a>
                       <Link to={!isAuthenticated ? "/login" : "/"}> <a href="#"><li className="topbarCenterItem">{isAuthenticated ? `HELLO, ${firstName.toUpperCase()} ` : "YOUR TRIUMB"}</li></a></Link>
                    </ul>
                </div>
                <div className="topbarRight">
                    {isAuthenticated?<div className="topbarLogout" ><ExitToApp onClick={() => {window.location.pathname="/"}} /></div>:null}
                    <Instagram/>
                    <Twitter/>
                    <LinkedIn/>
                    <Facebook/>          
                </div>
            </div>
        </div>
        
    )
}
