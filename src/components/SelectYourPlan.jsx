import React from "react";
import acarde from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'

const SelectYourPlan = () =>{
 return (
    <div className="plan_container">
        <h1>Select Your Plan</h1>
        <p>You have the option of monthly or yearly biling</p>

        <div className="plans">
            <div className="plan">
                <img src={acarde} alt="acarde" />
                <h3>Arcade</h3>
                <p>$9/mo</p>
            </div>

            <div className="plan">
                <img src={advanced} alt="advanced" />
                <h3>Advanced</h3>
                <p>$9/mo</p>
            </div>

            <div className="plan">
                <img src={pro} alt="pro" />
                <h3>Pro</h3>
                <p>$9/mo</p>
            </div>
        </div>

        <div className="plan-billing">
            <h4>Monthly</h4> 
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider"/>
            </label>
            <h4>yearly</h4>

        </div>
    </div>
 )
}

export default SelectYourPlan

