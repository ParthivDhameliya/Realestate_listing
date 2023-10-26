import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout = (props) => (
    <div>
        <Navbar />
        {props.children}
        <Outlet />    
    </div>
);
 
export default Layout;