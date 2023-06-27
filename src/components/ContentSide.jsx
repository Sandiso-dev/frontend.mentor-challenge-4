import React from 'react'
import YourInfo from './YourInfo'
import SelectYourPlan from './SelectYourPlan'
import AddOns from './AddOns'
import FinishingUp from './FinishingUp'
import ThankYou from './ThankYou' 
import {Link} from 'react-dom'

const ContentSide = () => {
  return (
    <>
    <div className='content-container'>
      <YourInfo/>
      <SelectYourPlan/>
      <AddOns/>
      <FinishingUp/>
      <ThankYou/>
    </div>
</>
  )
}

export default ContentSide