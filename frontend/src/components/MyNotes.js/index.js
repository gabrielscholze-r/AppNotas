import React, { useContext, useEffect, useState } from 'react';
import './index.css'
import API from '../../config/API.js'
import Autor from '../../config/context/Autor';
// import { Container } from './styles';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Note from '../Note';
import Nota from '../../config/context/Nota';
import Content from '../../config/context/Content';
function MyNotes() {
  const MySwal = withReactContent(Swal)
  const [content, setContent] = useContext(Content)
  const [nota, setNota] = useContext(Nota)
  const [autor, setAutor] = useContext(Autor)
  const [notas, setNotas] = useState([])
  async function getData() {
    console.log(autor._id)
    await API.get(`/Nota/find/${autor._id}`).then(response => {
      setNotas(response.data)
    })
      .catch(error => {
        MySwal.fire({
          title: <strong>OPS...</strong>,
          html: <i>{error}!</i>,
          icon: 'error'
        })
      })

  }
  useEffect(() => {
    getData()
  }, [])


  return (
    <div className="myNotes-container">
      {
        (notas.length == 0) ? (
          <div className="text-center">
            <div className="mx-auto"><h2 className="text-white text-center text-2xl mt-9 uppercase">Nenhuma nota encontrada!</h2></div>
            <button className="button-navigation px-5 py-1 rounded-xl text-2xl mt-10" onClick={() => { setContent(1) }}>CRIAR NOVA NOTA</button>
          </div>
        ) : (notas.map(nota => {
          return (
            <div className="mx-auto px-5 py-5 rounded-xl nota-bloco my-5">
              <div className="flex justify-between">
                <h1 className='text-5xl uppercase py-1 mt-2'>{nota.title}</h1>
                <button className='px-5 py-2 text-2xl uppercase getnote-button rounded-xl align-center' onClick={() => { setNota(nota); setContent(2) }}>VER</button>
              </div>
              <h2 className='text-3xl py-1 mt-2'>{nota.subject}</h2>
            </div>
          )
        }))
      }
    </div>
  );
}

export default MyNotes