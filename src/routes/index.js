import React from "react";
import { Routes, Route } from "react-router-dom";
import { About, Account, Home, Landing, NotFound } from "../pages/index";

const Router = () => {
  return (
    <div className="uk-container">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Router;
