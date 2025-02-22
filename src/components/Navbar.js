import React from "react"
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <>
        <div className="container mt-4">
            <div className="row">
                <div className="col">
                <i style={{fontSize:"35px"}}class="fa-brands fa-staylinked"></i>
                </div>
                <div className="col " id="navbar">
                    <ul>
                   <Link style={{marginRight:"90px" , textDecoration:"none" ,color:"#2c2c54",fontSize:"18px", fontWeight:"bolder"}} href="" to="/">Home</Link>
                    <a  style={{marginRight:"90px" ,textDecoration:"none" ,color:"#2c2c54",fontSize:"18px", fontWeight:"bolder"}} href="" >Education</a>
                   <Link  style={{marginRight:"90px" ,textDecoration:"none",color:"#2c2c54",fontSize:"18px", fontWeight:"bolder" }} href="" to="/skills">Skills</Link>
                    <Link style={{marginRight:"90px" ,textDecoration:"none",color:"#2c2c54",fontSize:"18px", fontWeight:"bolder"}}  href="" to="/projects">Project</Link>
                    </ul>
                </div>
            </div>
        </div>
        <hr></hr>
    </>
    )
}
export default Navbar;