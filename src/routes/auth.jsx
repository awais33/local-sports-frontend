import React from 'react';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';

const authRoutes = [
    {
        path: "/login", element: <Login />,
    },
    {
        path: "/register", element: <Register />,
    }
];

export default authRoutes;
