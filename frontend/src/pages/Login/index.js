import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './index.css'
function Login() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    let navigate = useNavigate()
    function entrar(){
        console.log('TENTOU ENTRAR')
        navigate('/')
    }

  return (
    <div className="Login">
        <div className="contentdiv block">
        <h1>LOGIN</h1>
        <div><input type="text" placeholder='Email'  onChange={e => setEmail(e.target.value)} value={email} className="inputtext py-1 pr-2 pl-1 rounded"/>   </div>     
        <div><input type="password" placeholder='Senha' onChange={e => setSenha(e.target.value)} value={senha} className="inputtext py-1 pr-2 pl-1 rounded"/> </div>     
        <div><button onClick={() => entrar()} className="loginbutton px-5 py-2 rounded-xl">ENTRAR</button></div>  
        <div><Link to='/'><button className="backbutton px-5 py-2 rounded-xl">VOLTAR</button></Link></div>
        </div>
    </div>
  );
}

export default Login;