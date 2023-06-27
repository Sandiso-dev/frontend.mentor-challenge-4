import React,{useState} from 'react'
import { createContext } from 'react'

export const GlobalContext = createContext();



export const GlobalStorage = ({children}) =>{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });

    

    const [selectPlan, setSelectPlan] = useState("Arcade");
    const [duration, setDuration] = useState(true);
    const [selectAddOns, setSelectAddons] = useState([]);

    const planPrice = [[{name: 'Arcade', pice: 9}, {name: 'Advanced', price: 12}, {name: 'Pro', price: 15}], [{name: 'Arcade', price: 90},{name: 'Advanced', price: 120}, {name: 'Pro', price: 150}]];

    const addOns = [{
        addOns1: 1,
        addOns2: 2,
        addOns3: 2,
    }, 
    {
        addOns1: 10,
        addOns2: 20,
        addOns3: 20,
    }];

    const monthlyPriceAddons = addOns[0];
    const yearlyPriceAddons = addOns[1];

    const monthlyPricePlan = planPrice[0];
    const yearlyPricePlan = planPrice[1];

    return(
        <GlobalContext.Provider
        value={{
            formData,
            setFormData,
            selectPlan,
            setSelectPlan,
            duration,
            setDuration,
            selectAddOns,
            setSelectAddons,
            monthlyPriceAddons,
            yearlyPriceAddons,
            monthlyPricePlan,
            yearlyPricePlan
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}