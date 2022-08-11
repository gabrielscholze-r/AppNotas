import React from 'react';
import {Routes, Route} from 'react-router-dom'
import SplashScreen from '../pages/SplashScreen';
// import { Container } from './styles';

function UnAuth() {
  return (
    <Routes>
        <Route exact path='/' element={<SplashScreen/>}/>
    </Routes>
  );
}

export default UnAuth;