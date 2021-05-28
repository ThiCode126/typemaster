import React from 'react'

const FirstSection = ({ size }) => {

  const device = size.device;

  return (
    <section id="first">
      <div className="content-wrapper">
        <div className="in-section">
          <div className="content-img">
            <img src={`/assets/${device}/img-phone.png`} alt="keyboard" className="phone" />
            <img src={`/assets/${device}/image-glass-and-keyboard.jpg`} alt="keyboard" className="glass" />
          </div>
          <div className="text-block">
            <h2>Mechanical Wireless Keyboard</h2>
            <p>
              The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety
              of switches and keycaps, along with reliable wireless connectivity.
          </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FirstSection