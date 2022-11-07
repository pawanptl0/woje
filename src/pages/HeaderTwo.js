import logo from "../images/WOJELogo.png";

const HeaderTwo = () => {
  return (
    <div className="sticky-top">
    <div className="top-header"></div>
      <div className="d-flex pt-2 flex-row flex-wrap justify-content-center align-items-center">
        <div className="flex-shrink-0">
          <a href="https://mywojemoney.com/" target="_blank" rel="noopener noreferrer">
            <img src={ logo } className="img-fluid header-img woje-logo" alt="woje" />
          </a>
        </div>
        <div className="self-align-center">
          <h2 className="text-uppercase ps-4">woje</h2>
        </div>
      </div>
    </div>
  )
}

export default HeaderTwo