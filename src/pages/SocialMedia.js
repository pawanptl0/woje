import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";
import instagram from "../images/instagram.png";

const SocialMedia = () => {
  return (
    <>
      <a href="https://www.facebook.com/WojeMoney/"  target="_blank" rel="noopener noreferrer">
        <img src={facebook} className="img-fluid social-media-img" alt="facebook"/>
      </a>
      <a href="https://www.instagram.com/wojemoney/" className="ps-2" target="_blank" rel="noopener noreferrer">
        <img src={instagram} className="img-fluid social-media-img" alt="instagram"/>
      </a>
      <a href="https://twitter.com/WOJEMoney" className="ps-2" target="_blank" rel="noopener noreferrer">
        <img src={twitter} className="img-fluid social-media-img" alt="twitter"/>
      </a> 
      <a href="https://www.linkedin.com/company/wojemoney" className="ps-2" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} className="img-fluid social-media-img" alt="linkedin"/>
      </a>
    </>
  )
}

export default SocialMedia



