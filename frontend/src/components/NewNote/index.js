import React, { useContext, useState } from 'react'
import API from '../../config/API'
import './index.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Content from '../../config/context/Content.js'
function NewNote() {
    const MySwal = withReactContent(Swal)
    const [title, setTitle] = useState("")
    const [subject, setSubject] = useState("")
    const [body, setBody] = useState("")
    const [content, setContent] = useContext(Content)
    const [posted, setPosted] = useState(true)
    async function addNote(e) {
        if (!title || !subject || !body) {
            MySwal.fire({
                title: <strong>OPS...</strong>,
                html: <b>Faltam informações!</b>,
                icon: 'error'
            })
        } else {

            await API.post('/Nota', { title, subject, body }).then(() => {
                MySwal.fire({
                    title: <strong>Pronto!</strong>,
                    html: <b>Anotação criada!</b>,
                    icon: 'success'
                })
                setContent(0)
            }).catch(error => {

                setPosted(false)
                MySwal.fire({
                    title: <strong>OPS...</strong>,
                    html: <b>Falha ao cadastrar nota, tente novamente!</b>,
                    icon: 'error'
                })
                

            })
            console.clear()




        }

    }

    return (
        <div className="newnote-container flex flex-col my-10 ">
            <h1 className="mx-auto titulo-newnote mt-2">CRIAR NOTA</h1>
            <input type="text" className="input-text-newnote mx-auto px-1 py-3 rounded my-4" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
            <input type="text" className="input-text-newnote mx-auto px-1 py-3 rounded my-4" placeholder='Subject' value={subject} onChange={e => setSubject(e.target.value)} />
            <input type="text" className="input-text-newnote mx-auto px-1 py-3 rounded my-4" placeholder='Body' value={body} onChange={e => setBody(e.target.value)} />
            <button className="submit-newnote mx-auto px-5 py-2 my-4 rounded-xl" onClick={e => addNote(e)}>ADICIONAR</button>
        </div>
    )
}

export default NewNote