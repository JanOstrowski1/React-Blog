import "./topbar.css"
import React from 'react';
import { Link } from "react-router-dom";
export default function TopBar() {
   const userIsLogged= false;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook-square"/>
                <i className="topIcon fa-brands fa-instagram-square"/>
                <i className="topIcon fa-brands fa-twitter-square"/>
                <i className="topIcon fa-brands fa-pinterest-square"/>
                </div>
            <div className="topCenter">
               <ul className="topList">
                    <li className="topListItem"><Link to="/" className="link" >HOME</Link></li>
                    <li className="topListItem"><Link to="/" className="link" >ABOUT</Link></li>
                    <li className="topListItem"><Link to="/" className="link" >CONTACT</Link></li>
                    <li className="topListItem"><Link to="/write" className="link" >WRITE</Link></li>
                   <li className="topListItem">
                       <Link to="/" className="link" >{userIsLogged && "LOGOUT"}</Link>
                   </li>
               </ul>
            </div>
            <div className="topRight">
                {
                    userIsLogged ? (
                        <img className="topImg"  src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/starcraft-2/1/1e/Raynor.jpg?width=100" alt=""/>
                    ) : (
                        <ul className="topList">
                            <li className="topListItem"><Link to="/login" className="link" >LOGIN</Link></li>
                            <li className="topListItem"><Link to="/register" className="link" >REGISTER</Link></li>
                        </ul>
                    )
                }
                

                <i className="topSearchIcon fa-solid fa-magnifying-glass"/>
            </div>
        </div>
    )
}
