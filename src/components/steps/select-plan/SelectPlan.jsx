import React from 'react';
import ArcadePlanIcon from '../../../assets/arcade.svg'
import AdvancedPlanIcon from '../../../assets/advenced.svg'
import ProPlanIcon from '../../../assets/pro.svg'
import './SelectPlan.scss'
import { useState } from 'react';
function SelectPlan(props) {


    let [plansPrice, setPlansPrice] = useState("monthly");
    let [plans, setPlans] = useState({

        arcade: {
            name: "Arcade",
            price: 9,
            icon: ArcadePlanIcon
        },
        advanced: {
            name: "Advanced",
            price: 12,
            icon: AdvancedPlanIcon
        },
        pro: {
            name: "Pro",
            price: 15, 
            icon: ProPlanIcon
        }
    });

    const handleSwapPrice = (e) => {
        if (plansPrice === "monthly") {
            setPlansPrice("yearly");
            e.target.style.transform = "translateX(100%)";
            plans.forEach((element) => {
                element.price = element.price * 10
            })
        } else {
            setPlansPrice("monthly");
            e.target.style.transform = "translateX(1px)";
        }
    }

    return (
        <div className='step'>
            <div className="step-title">
                <h1>Select your plan</h1>
                <p>You have the option of monthly or yearly billing.</p>
            </div>
            <div className="step-content">
                <div className="plans-container">
                    {
                        Object.keys(plans).map((key) => {
                            return (
                                <div className='plan'>
                                    <img src={plans[key].icon} alt="" />
                                    <h3>{plans[key].name}</h3>
                                    <p>${plans[key].price}/mo</p>
                                </div>
                            )
                        })
                    }
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