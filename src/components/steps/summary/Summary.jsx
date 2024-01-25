import React, { useEffect } from 'react';
import { useState } from 'react';
import './Summary.scss';
function Summary({data}) {

    const [options, setOptions] = useState([]);
    const [total, setTotal] = useState(0);


    const calculateTotal = () => {

        let sum = 0;
        if (sessionStorage.getItem("selectedAddons")) {
            JSON.parse(sessionStorage.getItem("selectedAddons")).forEach(addon => {
                sum += addon.price;
            });
        }
        if (data.SelectPlan.selectedPlan.price) {
            sum += data.SelectPlan.selectedPlan.price;
        }
        setTotal(sum);
    }

    useEffect(() => {
        calculateTotal();
    }, [])


    return (
        <div className='step'>
            <div className="step-title">
                <h1>Finish up</h1>
                <p>Double check everything looks OK before confirming.</p>
            </div>
            <div className="step-content">
                <div className="choosed-plan">
                    <h3>{data.SelectPlan.selectedPlan.name} ({data.SelectPlan.planPrice})</h3>
                    <p>${data.SelectPlan.selectedPlan.price}/{data.SelectPlan.planPrice}</p>
                </div>
                <hr />
                <div className="selected-addons">
                    {
                        sessionStorage.getItem("selectedAddons") 
                            ? JSON.parse(sessionStorage.getItem("selectedAddons")).map(addon => <p key={addon.name}>{addon.name} (+${addon.price} {data.SelectPlan.planPrice})</p>) 
                            : <p>No addons selected</p>
                    }
                </div>
                <div className="total">
                    <h3>Total ({data.SelectPlan.planPrice})</h3>
                    <p>${total}</p>
                </div>
            </div>
        </div>
    );
}

export default Summary;