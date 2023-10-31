import listelogements from "@/Assets/Api/Logement.json";

/**
 * Service qui fournit une liste simulée de logements.
 * @returns {Promise} Une promesse qui se résout avec la liste des logements.
 */
const getAllLogements = () => {
  return Promise.resolve(listelogements); 
};

/**
 * Récupère un logement par son identifiant unique.
 * @param {string} id - L'identifiant unique du logement à récupérer.
 * @returns {Promise} Une promesse qui se résout avec les données du logement correspondant à l'ID.
 * @throws {Error} Lance une erreur si le logement avec l'ID fourni n'est pas trouvé.
 */
const getLogementById = async (id) => {
  const Logement = await listelogements.find(logement => logement.id === id);
  if (Logement === null || Logement === undefined) {
    throw new Error('Les données requises n\'existent pas');
  } else {
    return Logement;
  }
};

/**
 * Objet qui encapsule les services liés aux logements.
 */
const LogementService = {
  getAllLogements, 
  getLogementById,
};

export default LogementService;
