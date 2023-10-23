/**
 * Service de gestion des logements.
 *
 * Ce module fournit des fonctions pour récupérer des informations sur les logements.
 *
 * @module LogementService
 */

/** Import des modules nécessaires */
import ListeLogements from "@/Assets/Api/Logement.json";

/**
 * Récupère la liste de tous les logements.
 *
 * @function
 * @returns {array} Liste de tous les logements.
 */
let GetAllLogement = () => {
    return ListeLogements;
}

/**
 * Récupère un logement par ID.
 *
 * @function
 * @param {number} id - L'identifiant du logement à récupérer.
 * @returns {object|null} Le logement trouvé ou null s'il n'existe pas.
 */
let GetOneLogement = async (id) => {
    const OneLogement = await ListeLogements.find(logement => logement.id === id);
    return OneLogement;
}

/**
 * Export des fonctions pour les réutiliser dans les pages.
 *
 * @type {object}
 * @property {function} GetAllLogement - Fonction de récupération de tous les logements.
 * @property {function} GetOneLogement - Fonction de récupération d'un logement par ID.
 */
export const LogementService = {
    GetAllLogement,
    GetOneLogement
}

export default LogementService;
