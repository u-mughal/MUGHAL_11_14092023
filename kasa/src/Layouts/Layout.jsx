import React from 'react';
import { Outlet } from 'react-router-dom';

import '@/Layouts/Layout.css';

import Header from '@/Layouts/Header/Header';
import Footer from '@/Layouts/Footer/Footer';

/**
 * Composant Layout
 *
 * Ce composant est responsable de la mise en page globale de l'application. Il inclut
 * un en-tête (Header), une section principale (main) pour le contenu spécifique à chaque page,
 * et un pied de page (Footer).
 *
 * @returns {JSX.Element} Un élément React représentant la mise en page de l'application.
 */
const Layout = () => {
    return (
        <div className='layout'>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;