import React from "react";
import "./App.scss";
import { useState } from "react";
import data from "./data/data.json";
import YourInfo from "./components/steps/your-info/YourInfo";
import SelectPlan from "./components/steps/select-plan/SelectPlan.jsx";
import Addons from "./components/steps/add-ons/Addons.jsx";
import Summary from "./components/steps/summary/Summary.jsx";
function App() {
    let stepsNames = {
        STEP_1: "Your info",
        STEP_2: "Select plan",
        STEP_3: "Add-ons",
        STEP_4: "Summary",
    };

    const [actualStep, setActualStep] = useState(0);

    return (
        <div className="App">
            <div className="form">
                <div className="form-sidebar">
                    {Object.keys(stepsNames).map((key, index) => {
                        let className = "sidebar-step " + key.toLowerCase();
                        let active = "sidebar-step-number ";
                        if (actualStep === index) {
                            active += " actual-step";
                        }
                        return (
                            <div key={key} className={className}>
                                <div className={active}>{index + 1}</div>
                                <div>
                                    <span className="sidebar-step-text">STEP {index + 1}</span>
                                    <h3 className="sidebar-step-title">{stepsNames[key].toUpperCase()}</h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="form-content">
                    {actualStep === 0 ? <YourInfo data={data.YourInfo} /> : actualStep === 1 ? <SelectPlan data={data.SelectPlan} /> : actualStep === 2 ? <Addons data={data.Addons} /> : actualStep === 3 ? <Summary data={data.Summary} /> : <div></div>}
                    <div className="form-buttons">
                        <button
                            className="form-button-back"
                            onClick={() => {
                                if (actualStep > 0) {
                                    setActualStep(actualStep - 1);
                                } else alert("There is nothing there yet 🙂");
                            }}
                        >
                            Go Back
                        </button>
                        <button
                            className="form-button-next"
                            onClick={() => {
                                if (actualStep < 3) {
                                    setActualStep(actualStep + 1);
                                }
                            }}
                        >
                            Next Step
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
