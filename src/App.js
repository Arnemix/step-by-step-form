import React from "react";
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
                        let className = "sidebar-step " + key.toLowerCase();
                        return (
                            <div className={className}>
                                <div className="sidebar-step-number">{index + 1}</div>
                                <div>
                                    <span className="sidebar-step-text">STEP {index + 1}</span>
                                    <h3 className="sidebar-step-title">{STEPS[key].toUpperCase()}</h3>
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
