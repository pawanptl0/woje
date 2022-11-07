import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to="/">Template1</Link>&nbsp;
      <Link to="/templatetwo">Template2</Link>&nbsp;
      <Link to="/templatethree">Template3</Link>
    </div>
  )
}

export default Navbar