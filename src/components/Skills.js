import React from "react";
function Skills(){
    return(
        <div className="container" style={{height:"100vh"}}>
            <h1 style={{textAlign:"center",marginTop:"100px",fontSize:"70px"}}>Technical Skills</h1>
            <ul className="mt-5" style={{fontSize:"28px"}}>
                <li><b>Programmig Language:</b>
                    <span> Java (core) , C.</span>
                </li>
                <li><b>Technologies:</b>
                    <span> MERN Stack(Mongodb,Express.js , React, Node.js).</span>
                </li>
                <li><b>Framework:</b>
                    <span> React , Bootstrap
                    </span>
                </li>
                <li>Basic concept of OOPS</li>
                <li>SQL</li>
                <li>Data Structure & Algorithm</li>
            </ul>

        </div>
    )
}
export default Skills;