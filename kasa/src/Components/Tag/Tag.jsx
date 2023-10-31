import "./Tag.css";

/**
 * Composant Tag
 *
 * Ce composant permet d'afficher des balises (tags) à partir d'un tableau de tags donné.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Array} props.tags - Le tableau de tags à afficher.
 *
 * @returns {JSX.Element} Un élément React représentant les balises (tags).
 */
function Tag({ tags }) {
    // Vérifie si le tableau de tags est indéfini, nul ou une chaîne vide, auquel cas "Aucun tag" est affiché.
    if (tags === undefined || tags === null || tags === "") {
        return (
            <span>Aucun tag</span>
        );
    } else {
        // Transforme le tableau de tags en une liste d'éléments de balise (tags).
        tags = tags.map((tag, i) => {
            return (
                <span key={i} className="Tag">{tag}</span>
            );
        });
    }
    return (
        <>
            {tags} {/* Affiche la liste de balises générée à partir du tableau de tags. */}
        </>
    );
}

export default Tag;
