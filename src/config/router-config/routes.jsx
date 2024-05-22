import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../screens/home/home";
import About from "../../screens/about/about";
import Contact from "../../screens/contact/contact";
import Faq from "../../screens/faq/faq";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import Cookies from "../../screens/Cookies/cookies";
import Terms from "../../screens/Terms/terms";
import Privacy from "../../screens/Privacy/privacy";
import Returnrefund from "../../screens/Returnrefund/returnrefund";
import Checkout from "../../screens/checkout/checkout";
import ScrollToTop from "../../components/scrolltoTop";
import Confirmation from "../../screens/confirmation/confirmation";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/frequentlyAsked" element={<Faq />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/termsAndconditon" element={<Terms />} />
          <Route path="/privacypolicy" element={<Privacy />} />
          <Route path="/returnrefund" element={<Returnrefund />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default Routers;
