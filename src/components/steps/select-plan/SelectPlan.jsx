import React from "react";
import ArcadePlanIcon from "../../../assets/arcade.svg";
import AdvancedPlanIcon from "../../../assets/advenced.svg";
import ProPlanIcon from "../../../assets/pro.svg";
import "./SelectPlan.scss";
import { useState } from "react";
function SelectPlan(props) {
    
    const [plansPrice, setPlansPrice] = useState("monthly");
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [plans, setPlans] = useState([
        {
            name: "Arcade",
            price: 9,
            planType: "mo",
            icon: ArcadePlanIcon,
            selected: false,
        },
        {
            name: "Advanced",
            price: 12,
            planType: "mo",
            icon: AdvancedPlanIcon,
            selected: false,
        },
        {
            name: "Pro",
            price: 15,
            planType: "mo",
            icon: ProPlanIcon,
            selected: false,
        },
    ]);

    const handleSwapPrice = (e) => {
        if (plansPrice === "monthly") {
            setPlansPrice("yearly");
            e.target.style.transform = "translateX(100%)";
            plans.forEach((plan) => {
                plan.price = plan.price * 10;
                plan.planType = "yr";
            });
        } else {
            setPlansPrice("monthly");
            e.target.style.transform = "translateX(1px)";
            plans.forEach((plan) => {
                plan.price = plan.price / 10;
                plan.planType = "mo";
            });
        }
    };

    const handleSelectPlan = (element, clickedPlan) => {
        plans.forEach((plan) => {
            if (plan.name === clickedPlan.name) {
                plan.selected = true;
                setSelectedPlan(clickedPlan);
                setPlans([...plans], null);
            } else {
                plan.selected = false;
            }
        });
    };

    return (
        <div className="step">
            <div className="step-title">
                <h1>Select your plan</h1>
                <p>You have the option of monthly or yearly billing.</p>
            </div>
            <div className="step-content">
                <div className="plans-container">
                    {Object.keys(plans).map((key) => {
                        return (
                            <div key={key} className={plans[key].selected ? "selected-plan plan" : "plan"} id={key} onClick={(e) => handleSelectPlan(e.target, plans[key])}>
                                <img src={plans[key].icon} alt="" />
                                <h3>{plans[key].name}</h3>
                                <p>
                                    ${plans[key].price}/{plans[key].planType}
                                </p>
                            </div>
                        );
                    })}
                </div>
                <div class="price-choose">
                    <p class="fix-bug">Month</p>
                    <div class="swap">
                        <div onClick={(e) => handleSwapPrice(e)} class="circle"></div>
                    </div>
                    <p>Year</p>
                </div>
            </div>
        </div>
    );
}

export default SelectPlan;
