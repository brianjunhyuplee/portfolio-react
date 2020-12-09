import React from "react";

function Contact() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h1 style={{textAlign : "center"}}>My Contact Info</h1>
                <br></br>
            </div>
            <hr></hr>
            <div className="row"></div>
                <ul>
                    <li><p>My Email: brianjunhyuplee@gmail.com</p></li>
                    <li><p>My Phone Number: 925-596-3020</p></li>
                    <li><a href="https://github.com/brianjunhyuplee">My Github</a></li>
                    <li><a href="https://www.linkedin.com/in/brian-lee-559208187/">My LinkedIn</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Contact;