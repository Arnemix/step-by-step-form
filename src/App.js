import React from "react";
import { useState } from "react";
import "./App.scss";
function App() {
    let STEPS = {
        STEP_1: "Your info",
        STEP_2: "Select plan",
        STEP_3: "Add-ons",
        STEP_4: "Summary",
    };

    return (
        <div className="App">
            <div className="form">
                <div className="form-sidebar">
                    {Object.keys(STEPS).map((key, index) => {
                        let className = "sidebar-step " + key;
                        return (
                            <div className={className}>
                                <div className="sidebar-step-number">{index + 1}</div>
                                <div>
                                    <span className="sidebar-step-text">step {index + 1}</span>
                                    <p>{STEPS[key]}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
