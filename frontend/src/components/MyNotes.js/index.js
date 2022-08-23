import React, { useContext, useEffect, useState } from 'react';
import './index.css'
import API from '../../config/API.js'
import Autor from '../../config/context/Autor';
// import { Container } from './styles';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
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
            <div className="mx-auto px-5 py-5 rounded-xl nota-bloco">
              <h1>{nota.title}</h1>
              <h2>{nota.subject}</h2>
              <p>{nota.body}</p>
            </div>)
        }))
      }
    </div>
  );
}

export default MyNotes