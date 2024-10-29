import React from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Main from "./pages/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Footer from "./components/Footer/Footer";
function App() {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter basename="">
                <NavBar />

                <div className="pages">
                    <Routes>
                        <Route path="/" element={<Main />} />
                        {/*<Route path="/login" element={<Login />} />*/}
                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
