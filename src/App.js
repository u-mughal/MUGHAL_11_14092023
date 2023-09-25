import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Apropos from "./pages/Apropos";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Pagelogements from "./pages/Pagelogements";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/*" element={<Page404 />} />
        <Route path="/Logement" element={<Pagelogements />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;