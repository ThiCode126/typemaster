import React from 'react'
import { ReactSVG } from 'react-svg'

const SecondSection = () => {
  return (
    <section id="second">
      <div className="content-wrapper">
        <div className="in-section">


          <div className="card">
            <div className="icon-content">
              <ReactSVG src="/assets/shared/icon-compatible.svg" className="icon" />
            </div>
            <h3>Highly <br /> compatible</h3>
            <p>Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed.</p>
          </div>

          <div className="card">
            <div className="icon-content">
              <ReactSVG src="/assets/shared/icon-bluetooth.svg" className="icon" />
            </div>
            <h3>Wireless <br /> with bluetooth</h3>
            <p>Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer.</p>
          </div>

          <div className="card">
            <div className="icon-content">
              <ReactSVG src="/assets/shared/icon-battery.svg" className="icon" />
            </div>
            <h3>High capacity <br /> battery</h3>
            <p>Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges.</p>
          </div>

          <div className="card">
            <div className="icon-content">
              <ReactSVG src="/assets/shared/icon-light.svg" className="icon" />
            </div>
            <h3>RGB backlit <br /> modes</h3>
            <p>Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions.</p>
          </div>


        </div>
      </div>
    </section>
  )
}

export default SecondSection