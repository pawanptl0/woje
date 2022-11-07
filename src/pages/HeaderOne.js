import React from 'react'
import logo from "../images/logo.png";

const HeaderOne = () => {
  return (
    <>
      <div className='d-flex flex-wrap flex-column template1-header position-relative'>
        <div className="d-flex flex-row flex-wrap justify-content-start p-3 align-items-center mt-4">
          <div className="flex-shrink-0 ms-2">
            <img src={logo} className="img-fluid" alt="woje" />
          </div>
          <div className="ms-4 self-align-center text-uppercase">
            <h2>woje</h2>
            <h2>onboarding</h2>
          </div>
        </div>

        <div className='ps-5 ms-5'>
          <a href="https://www.google.co.in/" target="_blank" rel="noopener noreferrer">
            <p className="header-link">www.mymojemony.com</p>
          </a>
        </div> 
      </div>

      {/* <div>
        <a href="https://www.google.co.in/" target="_blank" class="btn btn-link" rel="noopener noreferrer">
          <p className="header-para">www.mymojemony.com</p>
        </a>
      </div> */}
    </>
  )
}

export default HeaderOne