import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '@/Pages/Public/Logement/Logement.css';
import LogementService from '@/_Services/Logement.service.jsx';
import Carrousel from '@/Components/Carrousel/Carrousel.jsx';
import Tag from '@/Components/Tag/Tag';
import Dropdown from '@/Components/Dropdown/Dropdown';
import Rating from '@/Components/Rating/Rating';

/**
 * Fonction Logement : Affiche les détails d'un logement.
 * @returns {JSX.Element} Élément JSX représentant la page de détails du logement.
 */
const Logement = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [logement, setLogement] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        LogementService.getLogementById(id)
            .then(data => {
                setLogement(data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                navigate("/404");
            });
    }, [id, navigate]);

    if (loading) {
        return <div>Chargement...</div>;
    }

    return (
        <section className="logement">
            <Carrousel slides={logement.pictures} />
            <div className="logement__content">
                <div className="Container_1">
                    <div className="Div__title-loc-tag">
                        <h1 className="logement__title">{logement.title}</h1>
                        <p className="logement__location">{logement.location}</p>
                        <div className="TLC_tag-row">
                            <Tag tags={logement.tags} />
                        </div>
                    </div>
                    <div className="Div__Host-rating">
                        <div className="Host">
                            <h2 className="Host__name">{logement.host.name}</h2>
                            <img className="Host__avatar" src={logement.host.picture} alt={logement.host.name} />
                        </div>
                    
                        <Rating rating={logement.rating} />
                        
                    </div>
                </div>
                <div className="Container_2">
                    <div className="logement__description">
                        <Dropdown title="Description" content={logement.description} />
                    </div>
                    <div className="logement__equipements">
                        <Dropdown title="Equipements" content={logement.equipments} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Logement;
