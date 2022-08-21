import { useContext, useState } from 'react';
import './App.css';
import NewNote from './components/NewNote';
import Autor from './config/context/Autor.js'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes/index.js';
import Content from './config/context/Content';
function App() {
  // const [autor, setAutor] = useState({})
  const [autor, setAutor] = useState({
    "_id": "62e6c85ab3d17a3f2aa88e6f",
    "email": "rogerio@ceni.bis",
    "nome": "Rogerio Ceni",
    "senha": "$2b$05$UC8MLdKwPgHq0X4WyL1NYudwF7uaGkD73Ku8N9zvjpxiXm7.952/e"
})
  const [content, setContent] = useState(0)
  return (

    <Autor.Provider value={[autor, setAutor]}>
      <Content.Provider value={[content, setContent]}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      </Content.Provider>
    </Autor.Provider>

  );
}

export default App;
