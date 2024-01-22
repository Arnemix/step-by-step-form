import React from "react";
import "./App.scss";
import { useState } from "react";
import YourInfo from "./components/steps/your-info/YourInfo";
function App() {
    let stepsNames = {
        STEP_1: "Your info",
        STEP_2: "Select plan",
        STEP_3: "Add-ons",
        STEP_4: "Summary",
    };

    const [actualStep, setActualStep] = useState(stepsNames.STEP_1);
    let options = [];

    return (
        <div className="App">
            <div className="form">
                <div className="form-sidebar">
                    {Object.keys(stepsNames).map((key, index) => {
                        let className = "sidebar-step " + key.toLowerCase();
                        let active = index === 0 ? "sidebar-step-number actual-step" : "sidebar-step-number";
                        return (
                            <div className={className}>
                                <div className={active}>{index + 1}</div>
                                <div>
                                    <span className="sidebar-step-text">STEP {index + 1}</span>
                                    <h3 className="sidebar-step-title">{stepsNames[key].toUpperCase()}</h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="form-content">{actualStep === stepsNames.STEP_1 && <YourInfo />}</div>
            </div>
        </div>
    );
}

export default App;
