import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Apropos from "./pages/Apropos";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Pagelogements from "./pages/Pagelogements";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/Logement" element={<Pagelogements />} />
        {/* si ne correspond à aucun chemin (path)*/}
        <Route path="/*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;