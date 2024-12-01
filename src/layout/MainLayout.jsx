import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../components/Navber';

const MainLayout = () => {
    return (
        <div>
            <Navber/>
            <div className='px-28 mt-10'>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;