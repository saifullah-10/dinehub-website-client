import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export default function Root() {
  return (
    <section>
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
}
