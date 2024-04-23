import React from "react";
import logo from "../assets/images/logo.svg"

function Header() {
 return(

 <div className="item header">
 <img src={logo} alt="company-logo" className="logo"/>
 </div>
 )
}
export default Header;