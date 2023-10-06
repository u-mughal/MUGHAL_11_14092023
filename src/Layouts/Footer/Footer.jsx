import '@/Layouts/Footer/Footer.css';
import logo from '@/Assets/Images/Components/footer/LogoFooter.png';

function Footer () {
    return (
        <footer>
            <img src={logo} alt="logo" className="footer__logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;