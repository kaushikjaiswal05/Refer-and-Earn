import React, { useState } from "react";
import "./App.css";
import { CssBaseline, Container, ThemeProvider } from "@material-ui/core";
import HeroSection from "./components/herosection/HeroSection";
import Referral from "./components/referral/Referral";
import Benefits from "./components/benefits/Benefits";
import FAQs from "./components/faqs/FAQs";
import Footer from "./components/footer/Footer";
import RefModal from "./components/refModal/RefModal";
import Header from "./components/header/Header";
import Help from "./components/help/Help";


function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
        <CssBaseline />
        <Header />
        <HeroSection />
        <Referral />
        <Benefits />
        <FAQs />
        <Help />
        <Footer />
    </>
  );
}

export default App;
