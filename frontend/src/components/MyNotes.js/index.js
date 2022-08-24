import React, { useContext, useEffect, useState } from 'react';
import './index.css'
import API from '../../config/API.js'
import Autor from '../../config/context/Autor';
// import { Container } from './styles';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Note from '../Note';
function MyNotes() {
  const MySwal = withReactContent(Swal)
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
        (notas.length == 0) ? (<div className="mx-auto">Nenhuma nota encontrada!</div>) : (notas.map(nota => {
          return (
            <div className="mx-auto px-5 py-5 rounded-xl nota-bloco my-5">
              <div className="flex justify-between">
                <h1 className='text-5xl uppercase py-1 mt-2'>{nota.title}</h1>
                <button className='px-5 py-2 text-2xl uppercase getnote-button rounded-xl align-center'>Ver</button>
              </div>
              <h2 className='text-3xl py-1 mt-2'>{nota.subject}</h2>
              {/* <p className='text-2xl break-words py-1 mt-2'>{nota.body}</p> */}
            </div>
          )
        }))
      }
    </div>
  );
}

export default MyNotes