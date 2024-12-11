import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { StartPage } from './components/StartPage/StartPage.jsx';
import Clicker from './components/Clicker/Clicker.jsx';

export const App = () => {
  useEffect(() => {
    if (window.Telegram.WebApp) {
      const webApp = window.Telegram.WebApp;

      // Ініціалізація веб-програми
      webApp.ready();

      // Увімкнути повноекранний режим
      webApp.expand();
    }
  }, []);

  return (
    <Routes>
      <Route index element={<StartPage />} />
      <Route path="game" element={<Clicker />} />
    </Routes>
  );
}