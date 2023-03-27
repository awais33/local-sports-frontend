import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';

function App() {
    var { isLoggedIn } = true;
    const routing = useRoutes(routes(isLoggedIn));
    return (
        <>
            {/* Application Routes */}
            {routing}
        </>
    );
};

export default App;
