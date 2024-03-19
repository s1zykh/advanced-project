import React, { Suspense, useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { useTheme } from "app/providers/ThemeProvider";

import "styles/index.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>ТЕМА</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
