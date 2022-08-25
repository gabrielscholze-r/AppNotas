import React, { useContext } from 'react';
import './index.css'
import Nota from '../../config/context/Nota.js'
import Content from '../../config/context/Content';


function Note() {
    const [content, setContent] = useContext(Content)
    const [nota, setNota] = useContext(Nota)
    return (
        <div className="px-5 py-5 rounded-xl nota">
            <div className="justify-between flex items-center">
                <h1 className='text-5xl uppercase py-1 mt-2'>{nota.title}</h1>
                <div className="justify-between flex items-center">   
                    <button className='mr-5 px-5 py-2 deletebutton rounded-xl text-2xl'>EXCLUIR</button>
                    <button className='backbutton px-5 py-2 rounded-xl text-2xl' onClick={() => setContent(0)}>VOLTAR</button>
                </div>

            </div>
            <h2 className='text-3xl py-1 text-slate-400'>{nota.subject}</h2>
            <p className='text-2xl break-words py-1 mt-8 text-slate-100'>{nota.body}</p>
        </div>

    );
}

export default Note;