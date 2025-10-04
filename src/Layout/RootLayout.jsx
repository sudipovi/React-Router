import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
            <Navbar/>
            <main>
                <h1 className="min-h-[calc(100vh-285px)]">
                    <Outlet/>
                </h1>
            </main>
            <Footer/>
        </div>
    );
};

export default RootLayout;