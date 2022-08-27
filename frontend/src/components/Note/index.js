import React, { useContext } from 'react';
import './index.css'
import Nota from '../../config/context/Nota.js'
import Content from '../../config/context/Content';
import API from '../../config/API.js'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function Note() {
    const [content, setContent] = useContext(Content)
    const [nota, setNota] = useContext(Nota)
    const MySwal = withReactContent(Swal)
    function excluirNota() {
        MySwal.fire({
            title: "TEM CERTEZA?",
            text: "VOCÊ ESTÁ PRESTES A EXCLUIR A NOTA!",
            icon: "warning",
            showCloseButton: true,
            showCancelButton: true,
            cancelButtonColor: "red",
            confirmButtonText: 'CANCELAR',
            cancelButtonText: "DELETAR"
        }).then(async (result) => {
            if (!result.isConfirmed) {
                const response = await API.delete(`/Nota/${nota._id}`).catch(() => {
                    MySwal.fire({
                        title: "OPS...",
                        text: "ALGO DEU ERRADO",
                        icon: "warning",
                    })
                })  
                console.log(response.data)
                MySwal.fire({
                    title: "PRONTO",
                    text: "NOTA EXCLUÍDA COM SUCESSO",
                    icon: "success",
                })
                setContent(0)
            }
        })
        /**
         * MySwal.fire({
                       title: <strong>OPS...</strong>,
                       html: <b>Falha ao cadastrar nota, tente novamente!</b>,
                       icon: 'error'
                   }) */
    }

    return (
        <div className="px-5 py-5 rounded-xl nota">
            <div className="justify-between flex items-center">
                <h1 className='text-5xl uppercase py-1 mt-2'>{nota.title}</h1>
                <div className="justify-between flex items-center">
                    <button className='mr-5 px-5 py-2 deletebutton rounded-xl text-2xl' onClick={() => excluirNota()}>EXCLUIR</button>
                    <button className='backbutton px-5 py-2 rounded-xl text-2xl' onClick={() => setContent(0)}>VOLTAR</button>
                </div>

            </div>
            <h2 className='text-3xl py-1 text-slate-400'>{nota.subject}</h2>
            <p className='text-2xl break-words py-1 mt-8 text-slate-100'>{nota.body}</p>
        </div>

    );
}

export default Note;