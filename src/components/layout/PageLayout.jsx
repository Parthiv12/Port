import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";

export default function PageLayout() {
  return (
    <div>
      <Navbar />
      <div style={{ position: "relative", zIndex: 1, minHeight: "100vh" }}>
        <Outlet />
      </div>
    </div>
  );
}
