import "./topbar.css"
import React from 'react';

export default function topbar() {
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
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
               </ul>
            </div>
            <div className="topRight">
                
                <img className="topImg"  src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/starcraft-2/1/1e/Raynor.jpg?width=100" alt=""/>
                <i className="topSearchIcon fa-solid fa-magnifying-glass"/>
            </div>
        </div>
    )
}
