import React, { useState, useEffect  } from 'react';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import { db, auth } from '../firebase-config';

function Home( isAuth ) {
  const [postLists, setPostLists] = useState([]);
  const postsCollectionRef = collection(db, 'posts');

  const deletePost = async (id) => {
    const postDoc = doc(db, 'posts', id);
    await deleteDoc(postDoc);
  }

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostLists(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    getPosts();
  }, [deletePost]);
  return (
    <div className="home-page">
      { postLists.map((post) => {
        return (
          <div className="post">
            <div className="post-header">
              <div className="post-header__title">
                <h1>{ post.title }</h1>
              </div>
              <div className="delete-post">
                {isAuth && (
                  <button onClick={() => {deletePost(post.id)}}>&#128465; </button>
                ) }
              </div>
            </div>
            <div className="post-text__container">
              { post.postText }
            </div>
            <h3>@{ post.author.name }</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Home;