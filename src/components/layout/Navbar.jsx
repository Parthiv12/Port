import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="nav">
      <Link to="/" className={pathname === "/" ? "active" : ""}>Home</Link>
      <Link to="/projects" className={pathname === "/projects" ? "active" : ""}>Projects</Link>
      <Link to="/timeline" className={pathname === "/timeline" ? "active" : ""}>Timeline</Link>
      <Link to="/about" className={pathname === "/about" ? "active" : ""}>About</Link>
      <Link to="/contact" className={pathname === "/contact" ? "active" : ""}>Contact</Link>
    </nav>
  );
}
