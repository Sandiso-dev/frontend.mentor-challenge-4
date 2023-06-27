import React,{useState, useContext} from 'react'
import { GlobalContext } from '../context/Context';

const AddOns = () => {
  // selecting these from my state manager (ContectApi)
  const {duration,setDuration,selectAddOns,setSelectAddons,monthlyPriceAddons,yearlyPriceAddons,} = useContext(GlobalContext);

  //states for toggling some classes 
  const [added, setAdded] = useState(false);
  const [addedTwo, setAddedTwo] = useState(false);
  const [addedThree, setAddedThree] = useState(false);

  const handleAddons = (addOns) =>{

    if (selectAddOns.includes(addOns)) {
      
      selectAddOns(selectAddOns.indexOf(item => item !== addOns));
    } else {
      setSelectAddons([...selectAddOns, addOns]);
    }
  }


  return (
    <section className="add-ons-container" id='addOns'>
        <h1>Pick add-ons</h1>
        <p>Addd-ons help enhance your gaming experience.</p>

        <div className="addons">
            <div onClick={()=>setAdded(!added)} className={added === false ? 'addon' : 'addonActive'}>

                <input type="checkbox" 
                id='addOns1'
                name='addOns1'
                value='addOns1'
                checked={selectAddOns.includes('addOns1')} 
                onChange={()=> handleAddons('addOns1')}/>
                <label htmlFor="addOns1"><h3>Online service</h3>
                <p>Acces to multiplayer games</p>
                <span>{`${duration ? `$${monthlyPriceAddons.addOns1}/mo`: `$${yearlyPriceAddons.addOns1}/yr`}`}</span>
                </label>
                
            </div>

             <div onClick={()=>setAddedTwo(!addedTwo)} className={addedTwo === false ? 'addon' : 'addonActiveTwo'}>

                <input type="checkbox"
                id='addOns2'
                name='addOns2'
                value='addOns2'
                checked={selectAddOns.includes('addOns2')} 
                onChange={()=> handleAddons('addOns2')} />
                <label htmlFor="addOns2"><h3>LARGE STORAGE</h3>
                <p>Extra 1TB of cloud save</p>
                <span>{`${duration ? `$${monthlyPriceAddons.addOns2}/mo`: `$${yearlyPriceAddons.addOns2}/yr`}`}</span>
                <div className='addon-clone'></div>
                </label>
                
            </div>

             <div onClick={()=> setAddedThree(!addedThree)} className={addedThree === false ? 'addon' : 'addonActiveThree'}>

                <input type="checkbox"
                 id='addOns3'
                 name='addOns3'
                 value='addOns3'
                 checked={selectAddOns.includes('addOns3')} 
                 onChange={()=> handleAddons('addOns3')}  />
                <label htmlFor="addOns3"><h3>Customizable Profile</h3>
                <p>Custome theme on your graph</p>
                <span>{`${duration ? `$${monthlyPriceAddons.addOns3}/mo`: `$${yearlyPriceAddons.addOns3}/yr`}`}</span>
                <div className='addon-clone'></div>
                </label>
                
            </div>

            
        </div>
    </section>
  )
}

export default AddOns