import styled from "styled-components";
import { zManagerRoute } from "../../pages/index";
import SideBar from "../../common/manager/SideBar";
import ManagerWrappers from "../elements/ManagerWrappers";
import ManagerContentWrappers from "../elements/ManagerContentWrappers";
import Breadcrumb from "../../common/manager/Breadcrumb";
import { BrowserRouter as Router, Route, Redirect, Routes, useParams, useLocation } from "react-router-dom";
import { objManagerListContent } from "../../data/Manager/ManagerContentData";
import { useEffect } from "react";
const ManagerLayout = () => {
    const params = useParams();
    const location = useLocation();
    const nonLayoutList = ['/manager', '/manager/', '/manager/login', '/manager/login/'];

    return (
        <>
            <Router>
                <ManagerWrappers>
                    <SideBar />
                    <ManagerContentWrappers>
                        <Routes>
                            {zManagerRoute.map((data, idx) => {
                                if (!data.non_layout) {
                                    return <Route key={idx} path={data.path} element={data.component} exact />
                                }
                            })}
                        </Routes>
                    </ManagerContentWrappers>
                </ManagerWrappers>
            </Router>
            <Router>
                <Routes>
                    {zManagerRoute.map((data, idx) => {
                        if (data.non_layout) {
                            return <Route key={idx} path={data.path} element={data.component} exact />
                        }
                    })}
                </Routes>
            </Router>
        </>
    )
}
export default ManagerLayout;