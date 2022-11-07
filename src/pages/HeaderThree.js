import logo from "../images/WOJELogo.png";

const HeaderThree = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-3 position-relative template1-header">
      <div className="flex-shrink-0">
      <a href="https://mywojemoney.com/" target="_blank" rel="noopener noreferrer">
        <img src={logo} className="img-fluid woje-logo" alt="woje" />
      </a>
        
      </div>
      <div>
        <a href="https://mywojemoney.com/" target="_blank" rel="noopener noreferrer">
          <p className="pt-3 header-link">www.mywojemoney.com</p>
        </a>
      </div>
    </div>
  )
}

export default HeaderThree