import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../components/Home';
import MainLayout from '../layout/MainLayout';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import AllNote from '../components/AddNote';
import ViewAll from '../components/ViewAll';
import EditNote from './../components/EditNote';

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
                    path: '/add-node',
                    element: <AllNote/>,
                },
                {
                    path: '/login',
                    element: <Login/>,
                },
                {
                    path: '/view-all',
                    element: <ViewAll/>,
                    loader: () => fetch('http://localhost:5000/add-node')
                },
                {
                    path: '/view-all/edit',
                    element: <EditNote/>
                }
            ]
        }
    ])
    return (
        <RouterProvider router={route}/>
    );
};

export default Route;