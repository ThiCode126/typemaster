import React from 'react';
import { ReactSVG } from 'react-svg';

const Header = () => {
  return (
    <header>
      <div className="content-wrapper">
        <div className="in-header">
          <ReactSVG src="/assets/shared/logo.svg" />

          <div className="btn btn-grey">
            pre-order now
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header