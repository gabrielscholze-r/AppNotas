import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import API from '../../config/API.js'
import swal from 'sweetalert'
import Autor from '../../config/context/Autor.js';
import './index.css'
function Login() {
    const [login, setLogin] = useContext(Autor)
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    let navigate = useNavigate()
    async function entrar(){
        if(!email || !senha){
          swal("INFORMAÇÕES FALTANDO!");
        } else {
          const response = await API.post('/Usuario/Login', {
            email:email,
            senha:senha
          })
          if(Object.keys(response.data)==0){
            swal("Usuário ou senha inválidos!");
          } else {
            setLogin(response.data)
            navigate('/NewNote')
          }
        }

    }

  return (
    <div className="register-container ">
      <div className="content-div-container block my-auto">
        <h1 className="text-6xl mb-4 py-2">ENTRAR</h1>
        <input type="text" placeholder='Email'  onChange={e => setEmail(e.target.value)} value={email} className="input-text mx-auto rounded px-2 py-2 my-2"/>
        <input type="password" placeholder='Senha' onChange={e => setSenha(e.target.value)} value={senha} className="input-text mx-auto rounded px-2 py-2 my-2"/>
          <div><button onClick={() => entrar()} className="register-button px-5 py-2 rounded-xl mt-2 mb-2">ENTRAR</button></div>
          <div><Link to='/'><button className="back-button px-5 py-2 rounded-xl mt-2">VOLTAR</button></Link></div>  
      </div>
    </div>
  );
}

export default Login;