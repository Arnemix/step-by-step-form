import React, { useEffect } from "react";
import "./YourInfo.scss";
import { useState } from "react";

function YourInfo() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleChange = (element, value) => {
        switch (element) {
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "phoneNumber":
                setPhoneNumber(value);
                break;
            default:
                break;
        }
    }

    useEffect(() => {

        if (name !== "" && email !== "" && phoneNumber !== "") {
            console.log(`Data saved: ${name} ${email} ${phoneNumber}`);
            sessionStorage.setItem("name", name);
            handleChange("email", email);
            sessionStorage.setItem("email", email);
            sessionStorage.setItem("phoneNumber", phoneNumber);
        }
    })

    useEffect(() => {

        if (sessionStorage.getItem("name") !== null) {
            setName(sessionStorage.getItem("name"));
        }
        if (sessionStorage.getItem("email") !== null) {
            setEmail(sessionStorage.getItem("email"));
        }
        if (sessionStorage.getItem("phoneNumber") !== null) {
            setPhoneNumber(sessionStorage.getItem("phoneNumber"));
        }
    }, [])



    return (
        <div className="step">
            <div className="step-title">
                <h1>Personal info</h1>
                <p>Please provide your name, email address, and phone number</p>
            </div>
            <div className="step-content">
                <p>Your name is: {name}</p>
                <input onChange={(e) => handleChange("name", e.target.value)} type="text" placeholder="Mohamed Amin" />
                <p>Your email is: {email}</p>
                <input onChange={(e) => handleChange("email", e.target.value)} type="email" placeholder="amindrayef@gmail.com" />
                <p>Your phone number is: {phoneNumber}</p>
                <input onChange={(e) => handleChange("phoneNumber", e.target.value)} type="number" placeholder="+1 234 567 890" />
            </div>
        </div>
    );
}

export default YourInfo;
