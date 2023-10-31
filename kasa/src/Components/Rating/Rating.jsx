import "./Rating.css";
import { FaStar } from "react-icons/fa"; 

/**
 * Composant Rating
 *
 * Ce composant permet d'afficher une notation sous forme d'étoiles en fonction
 * d'une valeur de notation donnée.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.rating - La valeur de notation (de 1 à 5 étoiles) à afficher.
 *
 * @returns {JSX.Element} Un élément React représentant la notation en étoiles.
 */
function Rating({ rating }) {
    // Vérifie si la notation est indéfinie, nulle ou une chaîne vide, auquel cas "Aucune note" est affiché.
    if (rating === undefined || rating === null || rating === "") {
        return (
            <p>Aucune note</p>
        );
    }

    // Affiche la notation en étoiles en fonction de la valeur de notation.
    return (
        <div className="Rating"> {/* Conteneur principal pour la notation en étoiles. */}
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label key={i}>
                        <FaStar
                            className="star" // Classe CSS pour l'icône d'étoile.
                            color={ratingValue <= rating ? "#FF6060" : "#E3E3E3"} // Couleur de l'étoile en fonction de la valeur de notation.
                            size={24} // Taille de l'icône d'étoile (24 pixels).
                        />
                    </label>
                );
            })}
        </div>
    );
}

export default Rating;
