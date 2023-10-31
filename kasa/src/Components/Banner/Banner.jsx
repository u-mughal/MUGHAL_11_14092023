import "./Banner.css";

/**
 * Composant de bannière qui affiche une image d'arrière-plan et un titre.
 * @param {string} image - L'URL de l'image de la bannière.
 * @param {string[]} title - Le titre de la bannière, pouvant être divisé en plusieurs lignes.
 * @returns {JSX.Element} Composant de bannière.
 */
function Banner({ image, title }) {
    return (
        <section className="banner">
            <img className="banner-img" src={image} alt="Bannière" />
            <div className="banner-sombre"></div>
            <h1>
                {title.map((line, index) => <p key={index}>{line}</p>)}
            </h1>
        </section>
    )
}

export default Banner;
