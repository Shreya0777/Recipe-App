import {useState} from "react";

const Navbar=()=>{
    const [showSidebar,setshowSidebar]=useState(false);
    return(
    <div className="navbar container">
     <a href="#!" className="logo">F<span>oo</span>diesHub</a> 
     <div className="nav-links">
         <a href="#!">Home</a>
         <a href="#!">Receipes</a>
         <a href="#!">Settings</a>

     </div>
    {/* hang burger item */}
    <div onClick={()=> setshowSidebar(!showSidebar)}className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
    <div className="bar"></div>
    <div className="bar"></div>
    <div className="bar"></div>
    </div>
    </div>
    )
}
export default Navbar;