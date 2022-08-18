import { useContext, useState } from 'react';
import './App.css';
import NewNote from './components/NewNote';
import Autor from './config/context/Autor.js'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes/index.js';
function App() {
  const [autor, setAutor] = useState({
    "_id": "62f5c0236f709d253f28932b",
    "email": "123@123.COM",
    "nome": " ASDASD",
    "senha": "$2b$05$zTRvKj.gvex8gWggfQuHlONvNKA2y1b2L5LQBBeoxEocbkRdbOBlG"
})
  return (

    <Autor.Provider value={[autor, setAutor]}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Autor.Provider>

  );
}

export default App;
