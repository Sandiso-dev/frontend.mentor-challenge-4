import React,{useState} from 'react'

const AddOns = () => {
const [isChecked, setIsChecked] = useState(false)





  return (
    <section className="add-ons-container">
        <h1>Pick add-ons</h1>
        <p>Addd-ons help enhance your gaming experience.</p>

        <div className="addons">
            <div className='addon'>

                <input type="checkbox" id='checkbox' name='input' />
                <label htmlFor="checkbox"><h3>Online service</h3>
                <p>Acces to multiplayer games</p>
                <span>+510yr</span>
                </label>
                
            </div>

             <div className='addon'>

                <input type="checkbox" />
                <label htmlFor="checkbox"><h3>Larger storage</h3>
                <p>Extra 178 of cloud store</p>
                <span>+520yr</span>
                </label>
                
            </div>

             <div className='addon'>

                <input type="checkbox" />
                <label htmlFor="checkbox"><h3>Customizable Profile</h3>
                <p>Custome theme on your graph</p>
                <span>+510yr</span>
                </label>
                
            </div>

            
        </div>
    </section>
  )
}

export default AddOns