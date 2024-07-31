import './App.css';
import React from 'react';
import MainContent from './components/Home/MainContent';
import Layout from './components/Layout';
import Contact from './components/Contact/Contact';
import { Routes, Route } from "react-router-dom";
import Login from "./components/Forms/Login";

function App() {

  const changeHeaderBackground = () => {

    if (window.scrollY > 5 || document.documentElement.scrollTop > 5) {
      document.querySelector('.navbar').classList.add('navbar-dark');
    } else {
      document.querySelector('.navbar').classList.remove('navbar-dark');
    }
  };

  React.useState(() => {
    window.addEventListener("scroll", changeHeaderBackground);
    return () => {
      window.removeEventListener('scroll', changeHeaderBackground);
    };
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainContent />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
