import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import AboutMe from "../pages/about_me/AboutMe";
import Mogo from "../pages/mogo/Mogo.jsx";
import ReactPetPage from "../pages/reactPetPage/ReactPetPage";
import Smoothie from "../pages/smoothie/Smoothie.jsx";

export const routes = [
  { path: "/", element: null, exact: true, label: "Projects" },
  { path: "/about", element: <AboutMe />, exact: true, label: "About me" },
  // { path: "/reactpet", element: <ReactPetPage />, exact: true, label: "KittyFriends" },
  { path: "/smoothie", element: <Smoothie />, exact: true, label: "Smoothie" },
  { path: "/Mogo", element: <Mogo />, exact: true, label: "Mogo" },
];

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          element={route.element}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Route path="*" element={<Navigate to="/" />}></Route>
      <Route component={() => <div>404 Not found</div>} />
    </Routes>
  );
};

export default AppRouter;
