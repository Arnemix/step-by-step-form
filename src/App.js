import React from "react";
import "./App.scss";
import { useState } from "react";
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
    // let options = [];

    const renderSteps = () => {
        switch (actualStep) {
            case 0:
                return <YourInfo />;
            case 1:
                return <SelectPlan />;
            case 2:
                return <Addons />;
            case 3:
                return <Summary />;
            default:
                break;
        }
    };

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
                <div className="form-content">{renderSteps()}</div>
            </div>
        </div>
    );
}

export default App;
