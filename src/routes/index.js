import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Account, Home, NotFound } from '../pages/index';

const Router = () => {
  return (
    <div className="uk-section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Router;
