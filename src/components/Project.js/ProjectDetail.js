import React from "react";
import "./ProjectDetail.css";

function ProjectDetail({prjectname , description }){
    return(
        <>
        <div className="container mt-2 " id="project">
            <h3>{prjectname}</h3>
            <p>{description}</p>
        </div>
        </>
    )
};
export default ProjectDetail;