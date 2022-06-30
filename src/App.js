import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import logo from './logo.png';

import { Domaines, Formations, Home, Metiers, Secteurs } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/metiers' element={<Metiers />} />
          <Route path='/domaines' element={<Domaines />} />
          <Route path='/secteurs' element={<Secteurs />} />
          <Route path='/formations' element={<Formations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const Layout = () => {
  return (
    <div className='text-center'>
      <header className='bg-blue-pe-300 text-white flex items-center justify-center mb-10'>
        <img src={logo} className='cursor-pointer my-2' alt='logo' />
        <div className='grid w-10/12 gap-10 px-20'>
          <div className='hidden lg:flex justify-between'>
            <a href='tel:+33532977700'>05 32 97 77 00</a>
            <a href='mailto:contatc@publicexpert.fr'>contatc@publicexpert.fr</a>
            <a href='https://www.google.fr/maps/place/21+Av.+de+la+Marqueille,+31650+Saint-Orens-de-Gameville/@43.5617505,1.5242153,17z/data=!3m1!4b1!4m5!3m4!1s0x12ae961b6f17341f:0x2829efa3779c22cc!8m2!3d43.5617466!4d1.526404'>
              21 Avenue de la Marqueille 31650 Saint-Orens-de-Gameville
            </a>
          </div>
          <div className='flex justify-between'>
            <a href='/'>Accueil</a>
            <a href='/apropos'>A propos de Public Expert</a>
            <a href='/metiers'>Nos métiers</a>
            <a href='/domaines'>Nos domaines</a>
            <a href='/secteurs'>Nos secteurs</a>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default App;
