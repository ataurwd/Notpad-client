import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../components/Navber';

const MainLayout = () => {
    return (
        <div>
            <Navber/>
            <div className=''>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;