import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";

const SocialMedia = () => {
  return (
    <>
      <a href="https://www.google.co.in/"  target="_blank" rel="noopener noreferrer">
        <img src={facebook} className="img-fluid social-media-img" alt="facebook"/>
      </a>
      <a href="https://www.google.co.in/" className="ps-2" target="_blank" rel="noopener noreferrer">
        <img src={twitter} className="img-fluid social-media-img" alt="twitter"/>
      </a>
      <a href="https://www.google.co.in/" className="ps-2" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} className="img-fluid social-media-img" alt="linkedin"/>
      </a>
    </>
  )
}

export default SocialMedia