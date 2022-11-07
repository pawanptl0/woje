import React from 'react'
import HeaderTwo from '../pages/HeaderTwo'
import FooterTwo from "../pages/FooterTwo";
import Main from '../pages/Main'

const TemplateTwo = () => {
  return (
    <div className='d-flex flex-column'>
      <HeaderTwo />
      <Main />
      <FooterTwo />
    </div>
  )
}

export default TemplateTwo