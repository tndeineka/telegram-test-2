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

      webApp.checkHomeScreenStatus().then((status) => {
        if (status.supported) {
          // Додати кнопку "Додати на головний екран"
          const button = document.createElement('button');
          button.textContent = 'Add to Home Screen';
          button.onclick = () => webApp.addToHomeScreen();
          document.body.appendChild(button);

          // Слухач події додавання на головний екран
          webApp.onEvent('homeScreenAdded', () => {
            alert('Mini App has been added to the home screen.');
          });
        }
      });
    }
  }, []);

  return (
    <Routes>
      <Route index element={<StartPage />} />
      <Route path="game" element={<Clicker />} />
    </Routes>
  );
}