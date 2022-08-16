import react, { useContext, useEffect, useState } from "react";
import './index.css'
import { Link } from "react-router-dom";
import API from '../../config/API.js'
import swal from 'sweetalert'
import Autor from '../../config/context/Autor.js'
function Register() {
  const [usuario, setUsuario] = useContext(Autor)
  const [email, setEmail] = useState("")
  const [nome, setNome] = useState("")
  const [senha, setSenha] = useState("")
  const [cSenha, setcSenha] = useState("")

  async function cadastrar() {
    if (!email || !nome || !senha || !cSenha) {
      swal("INFORMAÇÕES FALTANDO!");
    }
    else if (senha != cSenha) {
      swal("SENHAS DIFERENTES!");
    }
    else {
      const user = await API.post('/Usuario', { email, nome, senha })
      setUsuario(user.data)
      swal("USUARIO REGISTRADO!");
    }
  }
  return (
    <div className="register-container ">
      <div className="content-div-container block my-auto">
        <h1 className="text-6xl mb-2">CADASTRAR</h1>
        <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} value={email} className="input-text mx-auto rounded px-2 py-2 my-2" />
        <input type="text" placeholder="Nome" onChange={e => setNome(e.target.value)} value={nome} className="input-text mx-auto rounded px-2 py-2 my-2" />
        <input type="password" placeholder="Senha" onChange={e => setSenha(e.target.value)} value={senha} className="input-text mx-auto rounded px-2 py-2 my-2" />
        <input type="password" placeholder="Confirmar Senha" onChange={e => setcSenha(e.target.value)} value={cSenha} className="input-text mx-auto rounded px-2 py-2 my-2" />
          <div><button onClick={() => { cadastrar() }} className="register-button px-5 py-2 rounded-xl mt-2">REGISTRAR</button></div>
          <div><Link to='/'><button className="back-button px-5 py-2 rounded-xl mt-2">VOLTAR</button></Link></div>  
      </div>
    </div>
  );
}

export default Register;