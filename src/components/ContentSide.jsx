import React from 'react'
import YourInfo from './YourInfo'
import SelectYourPlan from './SelectYourPlan'

const ContentSide = () => {
  return (
    <div className='content-container'>
      {/*<YourInfo/>*/}
      <SelectYourPlan/>


      <div className="next-container">
        <button>Next Step</button>
      </div>
    </div>
  )
}

export default ContentSide