import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.css'

import NavBar from './components/NavBar/NavBar';
import SignUpForm from './components/SignUpForm/SignUpForm'

const App = () => {
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/sign-up' element={<SignUpForm />} />
      </Routes>
    </>
  );
};

export default App
