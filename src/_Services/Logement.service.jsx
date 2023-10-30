import listelogements from "@/Assets/Api/Logement.json";

const getAllLogements = () => {
  return Promise.resolve(listelogements); 
};

const getLogementById = async (id) => {
  const Logement = await listelogements.find(logement => logement.id === id);
  if (Logement === null || Logement === undefined) {
    throw new Error('The required data do not exist');
  } else {
    return Logement;
  }
};

const LogementService = {
  getAllLogements, 
  getLogementById,
};

export default LogementService;
