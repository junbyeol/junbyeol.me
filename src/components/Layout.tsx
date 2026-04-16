import { Outlet } from "react-router-dom";
import white_logo from "../assets/white_logo.png";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <img
        src={white_logo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-32 right-8 md:top-24 md:right-16 w-[120px] md:w-[279px] z-0 select-none"
      />
      <Header />
      <main className="relative flex-1 z-10 px-2 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
