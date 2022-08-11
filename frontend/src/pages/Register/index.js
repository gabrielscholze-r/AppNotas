import react, { useState } from "react";
import './index.css'
function Register() {
    const [email, setEmail] = useState("")
    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")
  return (
    <div className="register-container">
        <input type="text"placeholder="Email" onChange={e => setEmail(e.target.value)} value={email}/>
        <input type="text" placeholder="Nome" onChange={e => setNome(e.target.value)} value={nome}/>
        <input type="text" placeholder="Senha" onChange={e => setSenha(e.target.value)} value={senha}/>
    </div>
  );
}

export default Register;