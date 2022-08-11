import { useContext, useState } from 'react';
import './App.css';
import NewNote from './components/NewNote';
import Autor from './config/context/Autor.js'
import { BrowserRouter} from 'react-router-dom'

import Routes from './routes/index.js';
function App() {
  const [autor, setAutor] = useState({salve: "uepa2"})
  return (
    
      <Autor.Provider value={[autor, setAutor]}>
        <BrowserRouter> 
        <Routes />
        </BrowserRouter>
      </Autor.Provider>
    
  );
}

export default App;
