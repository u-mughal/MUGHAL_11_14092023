import "./Card.css";

/**
 * Composant de carte utilisé pour afficher des éléments de liste avec image et titre.
 * @param {number} id - L'identifiant unique de la carte.
 * @param {string} image - L'URL de l'image à afficher sur la carte.
 * @param {string} titre - Le titre de la carte.
 * @returns {JSX.Element} Composant de carte.
 */
function Card({ id, image, titre }) {
    return (
        <li className="Card" id={id}>
            <img className="Card-image" src={image} alt="Card" />
            <div className="Card-sombre"></div>
            <h3 className="Card-titre">{titre}</h3>
        </li>
    )
}

export default Card;