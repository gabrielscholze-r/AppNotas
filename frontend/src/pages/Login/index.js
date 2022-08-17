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
    <div className="register-container ">
      <div className="content-div-container block my-auto">
        <h1 className="text-6xl mb-2">ENTRAR</h1>
        <input type="text" placeholder='Email'  onChange={e => setEmail(e.target.value)} value={email} className="input-text mx-auto rounded px-2 py-2 my-2"/>
        <input type="password" placeholder='Senha' onChange={e => setSenha(e.target.value)} value={senha} className="input-text mx-auto rounded px-2 py-2 my-2"/>
          <div><button onClick={() => Login()} className="register-button px-5 py-2 rounded-xl mt-2">ENTRAR</button></div>
          <div><Link to='/'><button className="back-button px-5 py-2 rounded-xl mt-2">VOLTAR</button></Link></div>  
      </div>
    </div>
  );
}

export default Login;