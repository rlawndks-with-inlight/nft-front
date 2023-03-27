import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './App.scss'
import ScrollToTop from "./ScrollToTop";
import { ThemeProvider } from 'styled-components';
import theme from "./styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.Fragment>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <ScrollToTop />
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </React.Fragment>
);

