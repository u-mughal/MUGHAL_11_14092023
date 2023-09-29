import React from "react";
import "../Footer/Footer.css";
import logoFooter from "../../assets/logo/logoFooter.png";

const Footer = () => {
  return (
    <footer>
      <img src={logoFooter} alt="logo du site kasa dans le pied de page" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;