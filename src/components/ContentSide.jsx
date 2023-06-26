import React from 'react'
import YourInfo from './YourInfo'
import SelectYourPlan from './SelectYourPlan'
import AddOns from './AddOns'
import FinishingUp from './FinishingUp'

const ContentSide = () => {
  return (
    <div className='content-container'>
      <YourInfo/>
      <SelectYourPlan/>
      <AddOns/>
      <FinishingUp/>


      <div className="next-container">
        <div className='back-btn'><button>Back</button></div>
        <div className='next-btn'><button>Next Step</button></div>
      </div>
    </div>
  )
}

export default ContentSide