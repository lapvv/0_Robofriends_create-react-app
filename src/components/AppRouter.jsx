import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AboutMe from '../pages/about_me/AboutMe';
import ReactPetPage from '../pages/reactPetPage/ReactPetPage';
import Smoothie from "../pages/smoothie/Smoothie";
import Mogo from "../pages/mogo/Mogo.jsx";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/about" element={<AboutMe />}></Route>
            <Route path="/reactpet" element={<ReactPetPage />}></Route>
            <Route path="/smoothie" element={<Smoothie />}></Route>
            <Route path="/mogo" element={<Mogo />}></Route>
            <Route path="*" element={<Navigate to="/about" />}></Route>
        </Routes>
    );
};

export default AppRouter;