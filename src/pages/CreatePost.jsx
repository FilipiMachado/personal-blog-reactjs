import React from 'react';

function CreatePost() {
  return (
    <div className="create-post-page">
      <div className="container">
        <h1>Criar Post</h1>
        <div className="input-group">
          <label>Título: </label>
          <input placeholder="Coloque um título" />
        </div>
        <div className="input-group">
          <label>Post: </label>
          <textarea placeholder="Escreva seu texto aqui"/>
        </div>
        <button>Enviar Post</button>
      </div>
    </div>
  )
}

export default CreatePost;