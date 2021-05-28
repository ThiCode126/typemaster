import React from 'react'

const Hero = ({ size }) => {

  const device = size.device;

  return (
    <section id="hero">
      <div className="content-wrapper">
        <div className="in-section">
          <div>
            <h1>typemaster keyboard</h1>
            <p>Improve your productivity and gaming without breaking the bank. Upgrade to a high quality
  mechanical typing experience.</p>
            <div className="order">
              <div className="btn btn-orange">pre-order now</div>
              <span>Release on 5/27</span>
            </div>
          </div>
          <div className="content-img">
            <img src={`/assets/${device}/image-keyboard.jpg`} alt="keyboard" className="keyboard" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero