import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px",
      }}
    >
      <Navbar />
      <hr />

      <Outlet />

      <hr style={{ margin: "40px 0" }} />
      <Footer />
    </div>
  );
}