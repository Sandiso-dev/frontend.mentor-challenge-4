import React from 'react'
import Pic from '../assets/images/icon-thank-you.svg'

const ThankYou = () => {
  return (
    <section id='thankyou'>
       <div className='thankYou-containter'>
        <div className="thankYou">
            <img src={Pic} alt="checkmark" />
            <h1>Thank you!</h1>

            <p>Thanks for confirming your subscription! We hope you have fun using our platform it means a lot to us much love to you from Sandiso. If you ever need support, please feel free to email us at support@sandisogaming.com </p>
        </div>
    </div>
    </section>
   
  )
}

export default ThankYou