import React from "react";
import photo from "../images/photo.jpg";

function Home() {
    return(
        <div className="container">
            <div className="row">
                {/* <div className="col-md-4"> */}
                <img className="pull-left" src={photo} width="230" alt="photo of me"></img>
                <h1 className="text-nowrap pull-left" style={{textAlign : "center"}}>About Me</h1>
                    <p> I was born on February 10, 1998 in Gaithersburg, Maryland. 
                    At 3 years old I began my gruesome academic carreer of learning my ABC's and 123's.
                    I graduated from Amador Valley High School. My growing love of computer science began
                    in my Sophomore year when I had taken my first coding class. I realized how fun and creative
                    coding could be and decided to pursue it as both a passion and career.
                    </p>
            </div>
        </div>
    )
}

export default Home;