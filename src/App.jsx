import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, RegisterPage, LoginPage } from "./page";
const App = () => {
  return (
    <main className="">
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </main>
  );
};

export default App;
