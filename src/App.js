
import { React, useEffect, useState } from 'react';
import AOS from 'aos';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';

import { routes, zManagerRoute } from './pages';
import Page404 from './pages/404';

import '../src/assets/binasea.css';
import '../src/assets/font-awesome.css';
import ManagerLayout from './components/layouts/ManagerLayout';

function App() {
    const { pathname } = useLocation();
    const [isManager, setIsManager] = useState(false);
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
    useEffect(() => {
        console.log(pathname)
        if (pathname.includes('/manager')) {
            setIsManager(true);
        } else {
            setIsManager(false);
        }
        if (pathname.includes('/manager')) {

        }
    }, [pathname])
    return (
        <>
            {/* 유저페이지 */}
            {isManager ?
                <>
                    <Routes>
                        {
                            zManagerRoute.map((data, idx) => (
                                <Route key={idx} path={data.path} element={data.component} exact />
                            ))
                        }
                    </Routes>
                </>
                :
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
                    <Footer />
                </>
            }

            {/* 관리자페이지 */}

        </>
    );
}

export default App;
