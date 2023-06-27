import React,{useState
} from 'react'

const Sidebar = () => {
  const [active, setActive] = useState('#')
  
  return (
    <div className="sidebar-container">

      <div>
        <p>step 1</p>
      <a href="#yourInfo" onClick={()=> setActive('#yourInfo')} className={active === '#yourInfo' ? 'active' : ''}>1</a>
      <h3>YOUR INFO</h3>
      </div>

      <div>
        <p>step 2</p>
        <a href="#selectPLan" onClick={()=> setActive('#selectPLan')} className={active === '#selectPLan' ? 'active' : ''}>2</a>
      <h3>SELECT PLAN</h3>
      </div>

      <div>
        <p>step 3</p>
        <a href="#addOns" onClick={()=> setActive('#addOns')} className={active === '#addOns' ? 'active' : ''}>3</a>
      <h3>ADD ONS</h3>
      </div>


      <div>
        <p>step 4</p>
        <a href="#summary" onClick={()=> setActive('#summary')} className={active === '#summary' ? 'active' : ''}>4</a>
      <h3>SUMMARY</h3>
      </div>

    </div>
  )
}

export default Sidebar