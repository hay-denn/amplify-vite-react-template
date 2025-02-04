import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>    
      <a><Link to="/">Home</Link></a>
      <a><Link to="/about">About</Link></a>
      <a><Link to="/login">Login</Link></a>

    </nav>
  );
};

export default Navbar;
