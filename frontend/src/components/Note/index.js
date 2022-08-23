import React from 'react';
import './index.css'

function Note({ nota }) {
    return (
        <div className="mx-auto px-5 py-5 rounded-xl nota-bloco my-5">
            <h1>{nota.title}</h1>
            <h2>{nota.subject}</h2>
            <p>{nota.body}</p>
        </div>

  );
}

export default Note;