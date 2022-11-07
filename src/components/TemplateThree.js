import React from 'react'
import FooterOne from '../pages/FooterOne'
import HeaderThree from '../pages/HeaderThree'
import Main from '../pages/Main'

const TemplateThree = () => {
  return (
    <div className='d-flex flex-column'>
      <HeaderThree />
      <Main />
      <FooterOne />
    </div>
  )
}

export default TemplateThree