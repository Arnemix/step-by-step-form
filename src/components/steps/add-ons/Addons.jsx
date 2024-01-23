import React from 'react';
import './Addons.scss';
import { useState } from 'react';

function Addons(props) {

    const [selectedAddons, setSelectedAddons] = useState([]);
    const [addons, setAddons] = [
        [
            {
                name: "Online service",
                description: "Access to multiplayer games",
                price: 10,
                selected: false
            },
            {
                name: "Larger storage",
                description: "Extra 1TB of cloud save",
                price: 20,
                selected: false
            },
            {
                name: "Customizable profile",
                description: "Custom theme on your profile",
                price: 20,
                selected: false
            }
        ]
    ]


    const handleSelectAddOns = (target, clickedAddon) => {
        addons.forEach((addon) => {
            if (addon.name === clickedAddon.name) {
                addon.selected = !addon.selected;
                if(addon.selected) {
                    setSelectedAddons([...selectedAddons, addon]);
                    
                } 
            }
        })
    }

    return (
        <div className='step'>
            <div className="step-title">
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience.</p>
            </div>
            <div className="step-content">
                <div className="addons-container">
                    {
                        Object.keys(addons).map((key) => {
                            return (
                                <div key={key} className={"addon " + (addons[key].selected ? "selected-addon" : "")}>
                                    <input onClick={(e) => { handleSelectAddOns(e.target, addons[key]) }} type="checkbox" placeholder="Add-ons" />
                                    <div className="addon-infos">
                                        <h3>{addons[key].name}</h3>
                                        <p>{addons[key].description}</p>
                                    </div>
                                    <div className="addon-price">
                                        <p>+{addons[key].price}/mo</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Addons;