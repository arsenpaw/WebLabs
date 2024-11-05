import React from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Main from "./pages/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Footer from "./components/Footer/Footer";
import Dashboard from "./pages/Main/Dashboard";
import {AppProvider} from "./provider/AppProvider";
function App() {
    const queryClient = new QueryClient();
    return (
        <>
            <NavBar/>
                <div className="pages">
                    <AppProvider/>
                </div>
            <Footer/>
        </>
)
}

export default App;
