import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom'
import NewNote from '../components/NewNote';

// import { Container } from './styles';

function Auth() {
    return (
        <Switch>
                <Route path='/NewNote' element={<NewNote/>}/>
        </Switch>
    );
}

export default Auth;