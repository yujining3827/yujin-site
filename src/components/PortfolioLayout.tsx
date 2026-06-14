import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PortfolioLayout() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px",
      }}
    >

      <Navbar />

      <hr style={{ margin: "40px 0" }} />
    
      <Outlet />

      <hr style={{ margin: "40px 0" }} />

      <Footer />
    </div>
  );
}
