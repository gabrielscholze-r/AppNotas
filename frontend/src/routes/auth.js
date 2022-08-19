import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom'
import NewNote from '../components/NewNote';
import Homepage from '../pages/Homepage';

// import { Container } from './styles';

function Auth() {
    return (
        <Switch>
                <Route path='/' element={<Homepage/>}/>
                <Route path='*' element={<Homepage/>}/>
        </Switch>
    );
}

export default Auth;