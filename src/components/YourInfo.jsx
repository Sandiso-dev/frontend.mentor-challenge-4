import React from 'react'

const YourInfo = () => {
  return (
    <div className="your_info">
      <h2>Personal info</h2>
      <p>Please provide your name,emai address and phone number.</p>

      <div className="info_form">
        <form action="/">
          <h4>Name</h4>
          <input type="text" placeholder='e.g Sandiso Njadu' />

          <h4>Email Adrress</h4>
          <input type="emaiil" name="email" id="email" placeholder='e.g sandisodev@gmail.com' />

          <h4>Phone Number</h4>
          <input type="number" name="phoneNumber" id="PhoneNumber" placeholder='e.g +27 672 869 764'/>

        </form>
      </div>
    </div>
  )
}

export default YourInfo