import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Register from '../pages/Register';
import SplashScreen from '../pages/SplashScreen';
// import { Container } from './styles';

function UnAuth() {
  return (
    <Routes>
        <Route exact path='/' element={<SplashScreen/>}/>
        <Route exact path='/Register' element={<Register/>}/>
    </Routes>
  );
}

export default UnAuth;