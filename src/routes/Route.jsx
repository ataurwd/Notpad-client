import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../components/Home';
import MainLayout from '../layout/MainLayout';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

const Route = () => {
    const route = createBrowserRouter([
        {
            path: '/',
            element: <MainLayout/>,
            children: [
                {
                    path: '/',
                    element: <Home/>,
                },
                {
                    path: '/note-details'
                },
                {
                    path: '/login',
                    element: <Login/>,
                },
                {
                    path: '/signup',
                    element: <SignUp/>,
                }
            ]
        }
    ])
    return (
        <RouterProvider router={route}/>
    );
};

export default Route;