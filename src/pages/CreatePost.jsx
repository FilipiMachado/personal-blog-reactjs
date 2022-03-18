import React, { useState } from 'react';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');

  return (
    <div className="create-post-page">
      <div className="container">
        <h1>Criar Post</h1>
        <div className="input-group">
          <label>Título: </label>
          <input placeholder="Coloque um título" onChange={(event) => {
            setTitle(event.target.value);
          }}/>
        </div>
        <div className="input-group">
          <label>Post: </label>
          <textarea placeholder="Escreva seu texto aqui" onChange={(event) => {
            setPostText(event.target.value);
          }}/>
        </div>
        <button>Enviar Post</button>
      </div>
    </div>
  )
}

export default CreatePost;