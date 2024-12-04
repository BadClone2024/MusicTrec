import React from 'react';
import Header from './component/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Playlists from './pages/Playlists';
import Settings from './pages/Settings';
import Login from './pages/Login';

const App = () => {

  const showHeader = () => {
    if (location.pathname !== "/login") return <Header/>
  }
  return (
    <div>
      {showHeader()}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default App;
