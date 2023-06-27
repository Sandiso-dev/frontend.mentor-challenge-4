import React,{useContext} from 'react'
import { GlobalContext } from '../context/Context'

const FinishingUp = () => {
    const {selectPlan,duration,setDuration,selectAddOns,setSelectAddons,monthlyPriceAddons,yearlyPriceAddons,yearlyPricePlan, monthlyPricePlan} = useContext(GlobalContext);

   // console.log(selectAddOns);

   let planIndex;

   if(selectPlan === 'Arcade') {
    planIndex = 0;
   }else if (selectPlan === 'Advanced'){
    planIndex = 1;
   }else if (selectPlan === 'Pro') {
    planIndex = 2;
   };

   const addOnsBrand = {
    addOns1: 'Online Service',
    addOns2: 'Larger storage',
    addOns3: 'Customizable Profile',
   };

   let total = duration ? monthlyPricePlan[planIndex].price : yearlyPricePlan[planIndex].price;

   selectAddOns.forEach(addon => {
    total += (duration ? monthlyPriceAddons[addon] : yearlyPriceAddons[addon]);
   });

  return (
    <section className="finishing-container" id='summary'>
        <h1>Finishing up</h1>
        <p>Double check verything looks OK before confirming</p>

        <div className="products-container">
            <div className="product">
                <h3>{`${duration ? `${selectPlan} (Monthly)` : `${selectPlan} (Yearly)`}`}</h3>
                <p><a href="#selectPLan"
                style={{color:'gray',textDecoration:'none'}}>change</a> </p>
                <h4>{duration ? `$${monthlyPricePlan[planIndex].price}/mo` : `$${yearlyPricePlan[planIndex].price}/yr`}</h4>
            </div>

            {selectAddOns.length > 0 && (
            
            <div className="product">

                {selectAddOns.map(addOn => (
                    <>
                    <div key={addOn} style={{marginTop:'15px',borderBottom:'1px solid gray'}}>
                    <p style={{color:'gray'}}>{addOnsBrand[addOn] ? addOnsBrand[addOn] : ''}</p>
                    <h4 style={{color:'gray'}}>{duration ? `+$${monthlyPriceAddons[addOn]}/mo` : `+$${yearlyPriceAddons[addOn]}/yr`}</h4>
                    </div>
                    
                    </>
                ))}
            </div>

            )}

            

            <div className="product-total">
                <h4 style={{color:'gray'}}>Total</h4>
                <span className='total'>{duration ? `+$${total}/mo` : `+$${total}/yr`}</span>
            </div>

            <div className="next-container">
<div className='back-btn'><button>Back</button></div>
<div className='next-btn'><button ><a href="#thankyou">Next</a></button></div>
</div>
        </div>
    </section>



  )
}

export default FinishingUp