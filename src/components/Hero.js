import React from "react"
function Hero(){
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col " style={{marginTop:"100px"}}>
                    <h1 className="mb-3">Hi,I am Bhawana Kumari</h1>
                    <p>Motivated and detail-oriented MERN Stack Developer with expertise in building scalable web applications using MongoDB, Express.js, React.js, and Node.js. Passionate about developing efficient, user-friendly, and high-performance 
                        solutions while continuously learning and implementing the latest technologies.</p>
                        <button className="btn btn-primary" style={{margin:"100px 10px 0px 0px" ,backgroundColor:"#2c2c54",color:"white"}}><a href="https://drive.google.com/file/d/1ZV_FPQhAwUp1uXSHiFwOFDMDdBFnHXbL/view?usp=sharing" style={{textDecoration:"none",color:"white"}}>Resume</a></button>
                </div>
                <div className="col">
                    <img  src="background.png" alt="image" style={{width:"100%"}} />
                </div>
            </div>
        </div>
        
        </>
    )
}
export default Hero;