import logo from "../images/logo.png";

const HeaderTwo = () => {
  return (
    <>
    <div className="top-header"></div>
      <div className="d-flex pt-2 flex-row flex-wrap justify-content-center align-items-center">
        <div className="flex-shrink-0">
          <img src={ logo } className="img-fluid header-img" alt="woje" />
        </div>
        <div className="self-align-center">
          <h2 className="text-uppercase ps-4">woje</h2>
        </div>
      </div>
    </>
  )
}

export default HeaderTwo