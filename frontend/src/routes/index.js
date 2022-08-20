import React, { useContext } from 'react';
import Autor from '../config/context/Autor';
import { BrowserRouter, Route, Routes as Switch, useNavigate } from 'react-router-dom'
import Auth from './auth.js';
import UnAuth from './unAuth.js';

function Routes() {
    let navigate = useNavigate()
    const [auth, setAuth] = useContext(Autor)
    console.log(auth.length)
    function isAuth() {
        if (auth == undefined || auth == {} || Object.keys(auth).length==0) {
            return (<UnAuth />)
        } else {
            return (<Auth />)
        }
    }
    return (
        <>
        {isAuth()}
        </>
    )
}

export default Routes;