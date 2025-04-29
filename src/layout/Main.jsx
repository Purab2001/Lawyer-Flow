import React from 'react';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-422px)]'>
                <div className='max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16 xl:px-20'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
            <ToastContainer/>
        </>
    );
};

export default Main;