import React from 'react';
import "./topbar.css";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import {
    Link
  } from "react-router-dom";
import AuthContext from "../../pages/home/context/AuthContext";
import {useContext, useState, useEffect} from 'react';




export default function Topbar() {

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
        <div className="topbar">
 <div className="topbarContainer">
            <div className="topbarLeft">
            <Link to="/" style={{textDecoration:"none"}}><img className="logo" src="/assets/black.png"></img></Link></div>
            <div className="topbarCenter">
                <ul className="topbarCenterItems">
                    <Link to="/" className="topbarCenterItem"><li >HOME</li></Link>
                    <Link to="/story"><li className="topbarCenterItem">OUR STORY</li></Link>
                    <Link to="/garage"><li className="topbarCenterItem">GARAGE COMPARISON</li></Link>
                    <a href="https://wa.me/7697865014"><li className="topbarCenterItem">CONTACT US</li></a>
                    <Link to={!isAuthenticated ? "/login" : "/"}> <a href="#"><li className="topbarCenterItem">{isAuthenticated ? `HELLO, ${firstName.toUpperCase()} ` : "CREATE YOUR TRIUMB ACCOUNT"}</li></a></Link>
                </ul>
            </div>
            <div className="topbarRight">
                {isAuthenticated?<div className="topbarLogout" ><ExitToAppIcon onClick={() => {window.location.pathname="/"}} /></div>:null}
            </div>
            
         

        </div>
        </div>
       
    )
}
