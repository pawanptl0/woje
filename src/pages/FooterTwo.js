import logo from "../images/WOJELogo.png";
import SocialMedia from './SocialMedia'

const FooterTwo = () => {
  return (
    <>
        <div className="fixed-bottom d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-md-between template2-footer p-3">
      <div className="d-flex flex-row justify-content-left align-items-center">
          <div className="flex-shrink-0">
            <a href="https://mywojemoney.com/" target="_blank" rel="noopener noreferrer">
              <img src={ logo } className="me-3 footer-img woje-logo" alt="woje" />
            </a>
        </div>
        <p className="powered-by">Powered By : WojeMoney.com</p>
      </div>
      <div className="self-align-center">
        <SocialMedia />
      </div>
    </div>
    </>
  )
}

export default FooterTwo