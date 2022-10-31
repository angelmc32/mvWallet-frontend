import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { About, Account, Home, Pools, NotFound } from '../pages/index';

const Router = () => {
  return (
    <div className="uk-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="/pools" element={<Pools />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Router;
