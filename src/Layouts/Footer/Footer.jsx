import '@/Layouts/Footer/Footer.css';
import logo from '@/Assets/Images/Components/footer/LogoFooter.png';

function Footer () {
    return (
        <footer>
            <div className='FooterContainer'>
                <a href="/"><img src={logo} alt="logo" className="footer__logo" /></a>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;