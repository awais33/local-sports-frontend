import authRoutes from './auth';
console.log(authRoutes)
const routes = (isLoggedIn) => [
    ...authRoutes
]

export default routes;