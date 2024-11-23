import React from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Main from "./pages/Main";
import NavBar from "./components/NavBar/NavBar";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Footer from "./components/Footer/Footer";
import Dashboard from "./pages/Dashboard";
import {AppProvider} from "./provider/AppProvider";
import {FilterProvider} from "./context/FindContext";
import ShoppingCartShortcut from "./components/ShoppingCart/ShoppingCartShortcut";
function App() {
    return (
        <>
            <FilterProvider>
            <NavBar/>
                <div className="pages">
                   <AppProvider/>
                </div>
                <ShoppingCartShortcut/>
            <Footer/>
            </FilterProvider>
        </>
)
}

export default App;
