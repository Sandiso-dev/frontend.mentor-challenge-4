import React from 'react'

const FinishingUp = () => {
  return (
    <section className="finishing-container">
        <h1>Finishing up</h1>
        <p>Double check verything looks OK before confirming</p>

        <div className="products-container">
            <div className="product">
                <h3>Arcade <span>( Monthly )</span></h3>
                <h4>$9/mon</h4>
                <p>catalog</p>
            </div>

            <div className="product">
                <p style={{color:'gray'}}>Online service</p>
                <h4 style={{color:'gray'}}>+$9/mon</h4>
            </div>

            
            <div className="product">
                <p style={{color:'gray'}}>Larger storage</p>
                <h4 style={{color:'gray'}}>+$9/mon</h4>
            </div>

            <div className="product-total">
                <h4>Total per Month</h4>
                <span className='total'>+$12/mo</span>
            </div>
        </div>
    </section>
  )
}

export default FinishingUp