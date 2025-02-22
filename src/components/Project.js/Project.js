import React from "react";
import ProjectDetail from "./ProjectDetail";
function Project(){
    return(
        <>
        <div style={{height:"100vh"}}>
           
        <div className="container" style={{marginTop:"100px"}}>
        <h1 style={{textAlign:"center",fontSize:"50px",marginTop:"-20px",marginBottom:"80px"}}>Projects</h1>
        <div className="row mb-3 ml-4">

        <div className="col">
        <ProjectDetail 
        prjectname="Airlisting"
        description="This Project allowing users to list and rent accommodations, primarily homes and rooms.
Admin can create new listing , edit and delete them.
Technologies used : Node.js , Express.js, HTML, CSS, Bootstrap, javascript."
    
        />
        </div>
        <div className="col">
            <ProjectDetail 
            prjectname="Trading Website" 
            description="This is fully function Website allow users to sell and buy stock from the stocks of companies 
            Technologies used: Node.js, Express.js, HTML , CSS ,Bootstrap , javascript , React"
            ></ProjectDetail>
        </div>
        </div> 
        </div> 

<div className="container">
<div className="row">
<div className="col">
<ProjectDetail 
prjectname="Netflix clone"
description="This is Ux/Ui Interface of netfix clone 
Technologies used : HTML,CSS"

/>
</div>
<div className="col">
    <ProjectDetail 
    prjectname="Simon Say Game" 
    description="This is fully function Website allow users to sell and buy stock from the stocks of companies 
    Technologies used: Node.js, Express.js, HTML , CSS ,Bootstrap , javascript , React"
    ></ProjectDetail>
</div>
</div> 
</div> 

</div>
</>
    )
}
export default Project;