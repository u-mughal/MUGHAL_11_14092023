
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, Apropos, Logement } from '@/Pages/Public/Index'

import Layout from '@/Layouts/Layout'
import Erreur404 from '@/Pages/Public/Erreur/404'


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