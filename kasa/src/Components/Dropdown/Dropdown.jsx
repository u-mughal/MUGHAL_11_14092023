import "./Dropdown.css"; 
import { useState } from "react"; 
import arrow from "@/Assets/Images/Components/Dropdown/arrow.png"; 

/**
 * Composant Dropdown
 *
 * Ce composant permet de créer un élément déroulant (dropdown) qui peut afficher
 * du contenu lorsque l'utilisateur clique sur le titre.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.title - Le titre du dropdown.
 * @param {string | Array} props.content - Le contenu du dropdown, pouvant être une chaîne de texte simple
 * ou un tableau d'éléments.
 *
 * @returns {JSX.Element} Un élément React représentant le dropdown.
 */
function Dropdown({ title, content }) {
    const [toggle, setToggle] = useState(false); // État local pour gérer l'ouverture/fermeture du contenu.

    return (
        <div className="Dropdown"> {/* Conteneur principal du dropdown. */}
            <h3 className="Dropdown_title" onClick={() => setToggle(!toggle)}> 
                {title} {/* Affiche le titre du dropdown. */}
                <img
                    className={toggle ? "arrow arrow_up" : "arrow arrow_down"} // Classe CSS pour la flèche en fonction de l'état toggle.
                    src={arrow} // Image de la flèche.
                    alt="show content" // Texte alternatif pour l'image.
                />
            </h3>
            <div className={`Dropdown_content ${toggle ? "" : "Dropdown_content_hidden"}`}>
                {Array.isArray(content) ? ( // Vérifie si le contenu est un tableau.
                    <ul>
                        {content.map((item, index) => {
                            return (
                                <li className={`list_item list_item-${index}`} key={index}>
                                    {item} {/* Affiche chaque élément du tableau. */}
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    <p>{content} {/* Affiche le contenu en tant que paragraphe s'il n'est pas un tableau. */}
                    </p>
                )}
            </div>
        </div>
    );
}

export default Dropdown;
