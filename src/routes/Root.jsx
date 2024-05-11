import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Background from "../assets/main-bg.jpg";
import { useContext } from "react";
import { Context } from "../context/ContextProvide";
import Loading from "../components/Loading";
export default function Root() {
  const { loading } = useContext(Context);
  if (loading) {
    return <Loading />;
  }
  return (
    <section
      className=" max-w-[1440px] lg:w-[90%] w-[98%] mx-auto font-mont"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        width: "100%",
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
}
