/* React */
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
/* Firebase */
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../firebase-config";
/* Styles */
import "./styles.css";

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate('/');
  };

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, []);

  return (
    <div className="create-post-page">
      <div className="container">
        <h1>Criar Post</h1>
        <div className="input-group">
          <label>Título: </label>
          <input
            placeholder="Coloque um título"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="input-group">
          <label>Post: </label>
          <textarea
            placeholder="Escreva seu texto aqui"
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button onClick={createPost}>Enviar Post</button>
      </div>
    </div>
  );
}

export default CreatePost;
