import SocialMedia from "./SocialMedia"


const FooterOne = () => {
  return (
    <div className="fixed-bottom d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-md-between template1-footer p-3">
      <div className="text-uppercase">
        <p className="footer-text">saratoga springs, utah 84045</p>
        <p className="footer-text">support@wojeinc.com</p>
      </div>
      <div className="self-align-center">
        <SocialMedia />
      </div>
    </div>
  )
}

export default FooterOne