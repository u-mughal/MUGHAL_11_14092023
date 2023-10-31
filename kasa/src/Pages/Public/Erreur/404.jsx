import '@/Pages/Public/Erreur/404.css';

/**
 * Fonction page404
 *
 * Cette fonction retourne le contenu de la page d'erreur 404, qui est affichée lorsque
 * l'utilisateur tente d'accéder à une page qui n'existe pas.
 *
 * @returns {JSX.Element} Un élément React représentant la page d'erreur 404.
 */
const page404 = () => {
    return (
        <section className="section_404">
            <h1 className="titre1">404</h1>
            <h2 className="titre2">Oups! La page que vous demandez n'existe pas.</h2>
            <a className="link" href="/">Retourner sur la page d'accueil</a>
        </section>
    );
};
export default page404;