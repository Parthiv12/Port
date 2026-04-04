import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const { pathname } = useLocation();
  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav className="nav">
      <Link to="/" className={isActive("/") ? "active" : ""}>Home</Link>
      <Link to="/projects" className={isActive("/projects") ? "active" : ""}>Projects</Link>
      <Link to="/timeline" className={isActive("/timeline") ? "active" : ""}>Timeline</Link>
      <Link to="/stack" className={isActive("/stack") ? "active" : ""}>Tech Stack</Link>


      { /* <Link to="/playground" className={pathname === "/playground" ? "active" : ""}>Playground</Link>
      --> not sure if im going to include /playground paths yet.
       */ }

      <Link to="/t2" className={isActive("/t2") ? "active" : ""}>AI Focus</Link>
      <Link to="/about" className={isActive("/about") ? "active" : ""}>About</Link>
      <Link to="/contact" className={isActive("/contact") ? "active" : ""}>Contact</Link>
    </nav>
  );
}
