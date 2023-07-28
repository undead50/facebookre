import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import FacebookHomePage from '../container/FacebookHomePage';
import Home from '../pages/Frontend/Home';
import Videos from '../pages/Frontend/Video';

function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<FacebookHomePage />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/videos" element={<Videos/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default MyRoutes;