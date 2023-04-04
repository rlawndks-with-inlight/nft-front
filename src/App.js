
import { React, useEffect, useState } from 'react';
import AOS from 'aos';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';

import { routes } from './pages';
import Page404 from './pages/404';
import toast, { Toaster } from 'react-hot-toast';
import '../src/assets/binasea.css';
import '../src/assets/font-awesome.css';
import '../src/styles/style.css'
function App() {

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);

    return (
        <>
            <Header />
            <Routes>
                {
                    routes.map((data, idx) => (
                        <Route key={idx} path={data.path} element={data.component} exact />
                    ))
                }
                <Route path='*' element={<Page404 />} />
            </Routes>
            <Toaster position={'top-right'} containerStyle={{ zIndex: 999, top: '100px' }} />
            <Footer />
        </>
    );
}

export default App;
