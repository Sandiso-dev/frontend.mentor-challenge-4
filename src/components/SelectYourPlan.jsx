import React,{useContext, useState} from "react";
import acarde from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'
import {GlobalContext} from '../context/Context'

const SelectYourPlan = () =>{

    //states for toggling my class styles 
    const [active, setActive] = useState(false);
    const [activeTwo, setActiveTwo] = useState(false);
    const [activeThree, setActiveThree] = useState(false);
    const [rate, setRate] = useState(false)

    //selection my data from my state manager (ContextApi)
   const {selectPlan,setSelectPlan,duration,setDuration,} = useContext(GlobalContext);
 
   // my functions for toggling styles, add data appearance conditionaly while collecting data to append on the final step

   const handlePlanselection = (plan) =>{
    setSelectPlan(plan);
    setActive(!active)
   }

   const handlePlanselection2 = (plan) => {
    setSelectPlan(plan);
    setActiveTwo(!activeTwo)
   }

   const handlePlanselection3 = (plan) => {
    setSelectPlan(plan);
    setActiveThree(!activeThree)
    
   }
    
    
 return (
    
    <section className="plan_container" id="selectPLan">
        <h1>Select Your Plan</h1>
        <p>You have the option of monthly or yearly biling</p>

        <div className="plans">
            <div defaultValue={selectPlan == 'Arcade'} onClick={()=> handlePlanselection('Arcade')} className={active === false ? 'plan' : 'planActive'}>
                <img src={acarde} alt="acarde" />
                <h3>Arcade</h3>
                <span style={rate === false ? {opacity:'0'} : {opacity:'100',color:'rebeccapurple'}}>2 months Free</span>
                <p>{duration  ? '$9/mo' : '$90/yr'}</p>
            </div>

            <div defaultValue={selectPlan == 'Advanced'} onClick={()=> handlePlanselection2('Advanced')} className={activeTwo === false ? 'plan' : 'planActiveTwo'}>
                <img src={advanced} alt="advanced" />
                <h3>Advanced</h3>
                <span style={rate === false ? {opacity:'0'} : {opacity:'100',color:'rebeccapurple'}}>2 months Free</span>
                <p>{duration ? '$12/mo' : '$120/yr'}</p>
            </div>

            <div defaultValue={selectPlan == 'Pro'} onClick={()=> handlePlanselection3('Pro')} className={activeThree === false ? 'plan' : 'planActiveThree'}>
                <img src={pro} alt="pro" />
                <h3>Pro</h3>
                <span style={rate === false ? {opacity:'0'} : {opacity:'100',color:'rebeccapurple'}}>2 months Free</span>
                <p>{duration ? `$15/mo` : `$150/yr`}</p>
            </div>
        </div>

        <div className="plan-billing">
            <h4 style={!duration ? {color:'gray'} : {color:'black'}}>Monthly</h4> 
            <label className="switch">
                <input type="checkbox" checked={duration} onChange={()=> setDuration(!duration)}/>
                <span className="slider"/>
            </label>
            <h4 style={duration? {color: 'gray'} : {color:"black"}}>yearly</h4>

        </div>
    </section>
 )
}

export default SelectYourPlan

