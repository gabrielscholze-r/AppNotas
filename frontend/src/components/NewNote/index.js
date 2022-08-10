import React, { useState } from 'react'
import API from '../../config/API'

function NewNote() {
    const [title, setTitle] = useState("")
    const [subject, setSubject] = useState("")
    const [body, setBody] = useState("")
    
    async function addNote(e){
        e.preventDefault()
        await API.post('/Nota', {title,subject, body}).catch(e => {console.log(e)}).then((response)=> {console.log(response)})

    }

    return (
        <form className="newnote-container flex flex-col">
            <input type="text" className="input-title mx-auto" placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
            <input type="text" className="input-subject mx-auto" placeholder='Subject' value={subject} onChange={e => setSubject(e.target.value)} />
            <input type="text" className="input-body mx-auto" placeholder='Body' value={body} onChange={e => setBody(e.target.value)} />
            <button type='submit' className="submit-newnote mx-auto" onClick={e => addNote(e)}>ADICIONAR</button>
        </form>
    )
}

export default NewNote