import React from 'react'

const Sidebar = () => {
  return (
    <div className="sidebar-container">

      <div>
        <p>step 1</p>
      <a href="#yourInfo">1</a>
      <h3>YOUR INFO</h3>
      </div>

      <div>
        <p>step 2</p>
      <a href="#selectPLan">2</a>
      <h3>SELECT PLAN</h3>
      </div>

      <div>
        <p>step 3</p>
      <a href="#addOns">3</a>
      <h3>ADD ONS</h3>
      </div>


      <div>
        <p>step 4</p>
      <a href="#summary">4</a>
      <h3>SUMMARY</h3>
      </div>

    </div>
  )
}

export default Sidebar