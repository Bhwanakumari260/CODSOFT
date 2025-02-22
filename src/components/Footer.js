import React from "react"
import "./Footer.css";
function Footer(){
    return(
        <>
        <div style={{backgroundColor:"#2c2c54",width:"100%",height:"200px"}} id="footer">
        
        <div className="border-top icons" >
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-square-twitter"></i>
        </div>
        <hr style={{color:"white"}}></hr>
        </div>

        </>
    )
}
export default Footer;