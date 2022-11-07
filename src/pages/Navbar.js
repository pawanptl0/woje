import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='mb-2 d-flex flex-column flex-sm-row justify-content-center align-items-center'>
      <Link to="/" className="btn btn-sm" role="button">Template1</Link>&nbsp;
      <Link to="/templatetwo" className="btn btn-sm" role="button">Template2</Link>&nbsp;
      <Link to="/templatethree" className="btn btn-sm" role="button">Template3</Link>
    </div>
  )
}

export default Navbar