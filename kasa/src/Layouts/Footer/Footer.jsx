import '@/Layouts/Footer/Footer.css';
import logo from '@/Assets/Images/Components/footer/LogoFooter.png';

/**
 * Composant Footer
 *
 * Ce composant représente le pied de page (footer) d'une application et affiche le logo
 * de l'entreprise Kasa ainsi qu'un message de droits d'auteur.
 *
 * @returns {JSX.Element} Un élément React représentant le pied de page.
 */
function Footer() {
    return (
        <footer> {/* Élément de pied de page */}
            <div className='FooterContainer'> {/* Conteneur du pied de page */}
                <a href="/"> {/* Lien vers la page d'accueil */}
                    <img src={logo} alt="logo" className="footer__logo" /> {/* Affiche le logo avec un lien vers la page d'accueil */}
                </a>
                <p>© 2020 Kasa. All rights reserved</p> {/* Message de droits d'auteur */}
            </div>
        </footer>
    );
}

export default Footer;
