import React from 'react';
import './App.css';
import Character from './components/Character.jsx';
import { Route, Routes } from 'react-router-dom';
import { StartPage } from './components/StartPage/StartPage.jsx';

export const App = () => {
  return (
    <Routes>
      <Route index element={<StartPage />} />
      <Route path="game" element={<Character />} />
    </Routes>
  );
}