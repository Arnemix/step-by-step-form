import React, { useEffect, useState } from 'react';
import './Addons.scss';

function Addons(props) {
  const [addonsData, setAddonsData] = useState([
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
  ]);

  useEffect(() => {
    const storedAddons = JSON.parse(sessionStorage.getItem("selectedAddons")) || [];
    const updatedAddonsData = addonsData.map(addon =>
      storedAddons.some(selectedAddon => selectedAddon.name === addon.name)
        ? { ...addon, selected: true }
        : addon
    );
    setAddonsData(updatedAddonsData);
  }, []);

  useEffect(() => {
    const selectedAddonsToSave = addonsData.filter((addon) => addon.selected);
    sessionStorage.setItem("selectedAddons", JSON.stringify(selectedAddonsToSave));
    console.log(selectedAddonsToSave);
  }, [addonsData]);

  const handleSelectAddOns = (clickedAddon) => {
    const updatedAddons = addonsData.map((addon) =>
      addon.name === clickedAddon.name
        ? { ...addon, selected: !addon.selected }
        : addon
    );
    setAddonsData(updatedAddons);
  };

  return (
    <div className='step'>
      <div className="step-title">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <div className="step-content">
        <div className="addons-container">
          {addonsData.map((addon) => (
            <div key={addon.name} className={`addon ${addon.selected ? "selected-addon" : ""}`}>
              <input
                type="checkbox"
                checked={addon.selected}
                onChange={() => handleSelectAddOns(addon)}
              />
              <div className="addon-infos">
                <h3>{addon.name}</h3>
                <p>{addon.description}</p>
              </div>
              <div className="addon-price">
                <p>+{addon.price}/mo</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Addons;
