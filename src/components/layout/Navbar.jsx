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
      <Link to="/notes" className={isActive("/notes") ? "active" : ""}>Notes</Link>
      <Link to="/about" className={isActive("/about") ? "active" : ""}>About</Link>
    </nav>
  );
}
