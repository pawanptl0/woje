import logo from "../images/logo.png";

const HeaderThree = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center p-3 position-relative template1-header">
      <div className="flex-shrink-0">
        <img src={logo} className="img-fluid" alt="woje" />
      </div>
      <div>
        <a href="https://www.google.co.in/" target="_blank" rel="noopener noreferrer">
          <p className="pt-3 header-link">www.mywojemoney.com</p>
        </a>
      </div>
    </div>
  )
}

export default HeaderThree