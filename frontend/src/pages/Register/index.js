import react, { useContext, useEffect, useState } from "react";
import './index.css'
import API from '../../config/API.js'
import swal from 'sweetalert'
import Autor from '../../config/context/Autor.js'
function Register() {
  const [usuario, setUsuario] = useContext(Autor)
  const [email, setEmail] = useState("")
  const [nome, setNome] = useState("")
  const [senha, setSenha] = useState("")

  async function cadastrar(){
    if(!email || !nome || !senha){
      swal("INFORMAÇÕES FALTANDO!");
    }
    else{
      const user = await API.post('/Usuario', {email, nome, senha})
      setUsuario(user.data)
    }
  }
  return (
    <div className="register-container">
      <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} value={email} />
      <input type="text" placeholder="Nome" onChange={e => setNome(e.target.value)} value={nome} />
      <input type="text" placeholder="Senha" onChange={e => setSenha(e.target.value)} value={senha} />
      <button onClick={() => {cadastrar()}}>Registrar</button>
    </div>
  );
}

export default Register;