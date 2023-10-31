
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, Apropos, Logement } from '@/Pages/Public/Index'

import Layout from '@/Layouts/Layout'
import Erreur404 from '@/Pages/Public/Erreur/404'

/**
 * Fonction de gestion des routes publiques de l'application.
 * @returns {JSX.Element} Élément JSX représentant les routes publiques de l'application.
 */
const PublicRouter = () => {
    return (

        <Routes>
            <Route element={<Layout />}>
                <Route path="" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="/a-propos" element={<Apropos />} />
                <Route path="*" element={<Erreur404 />} />
            </Route>
        </Routes>

    );
};

export default PublicRouter;