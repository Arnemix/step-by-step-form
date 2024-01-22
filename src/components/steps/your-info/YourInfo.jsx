import React from "react";

function YourInfo(props) {
    return (
        <div className="step">
            <div className="step-title">
                <h1>Personal info</h1>
                <p>Please provide your name, email address, and phone number</p>
            </div>
            <div className="step-content">
                <p>Your name is:</p>
                <input type="text" placeholder="Mohamed Amin" />
                <p>Your email is:</p>
                <input type="text" placeholder="amindrayef@gmail.com" />
                <p>Your phone number is:</p>
                <input type="text" placeholder="+1 234 567 890" />
            </div>
        </div>
    );
}

export default YourInfo;
