import { Helmet } from "react-helmet";
import GoToTop from "../GoToTop/GoToTop";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children, title }) => (
  <main>
    <Helmet>
      <title>{title}</title>
    </Helmet>

    <Navbar />
    {children}
    <GoToTop />
    <Footer />
  </main>
);

export default Layout;
