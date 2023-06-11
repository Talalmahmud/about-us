import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Advertise from "./pages/Advertise";
import TermCondition from "./pages/TermCondition";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Affiliate from "./pages/Affiliate";
import Faq from "./pages/Faq";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/advertise" element={<Advertise />} />
                <Route path="/affiliate" element={<Affiliate />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/term" element={<TermCondition />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
