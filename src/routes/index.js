import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  About,
  Account,
  Home,
  Landing,
  Wallet,
  NotFound,
} from "../pages/index";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/account" element={<Account />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
