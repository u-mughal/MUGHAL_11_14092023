// Import des modules nécessaires
import '@/Assets/Css/normalize.css';
import '@/Assets/Css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PublicRouter from '@/Pages/Public/PublicRouter.jsx';

/**
 * Fonction principal de l'application.
 * @returns {JSX.Element} Élément JSX représentant l'application.
 */
const App = () => {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<PublicRouter />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
