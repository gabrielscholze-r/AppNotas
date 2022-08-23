import React from 'react';
import './index.css'

function Note({ nota }) {
    return (
        <div className="mx-auto px-5 py-5 rounded-xl nota-bloco my-5">
            <h1 className='text-5xl uppercase py-1 mt-2'>{nota.title}</h1>
            <h2 className='text-3xl py-1 mt-2'>{nota.subject}</h2>
            <p className='text-2xl break-words py-1 mt-2'>{nota.body}</p>
        </div>

  );
}

export default Note;