import authRoutes from './auth';
import homeRoutes from './home';

const routes = (isLoggedIn) => [
    ...authRoutes,
    ...homeRoutes
]

export default routes;