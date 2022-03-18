import React, { useState, useEffect  } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase-config';

function Home() {
  const [postLists, setPostLists] = useState([]);
  const postsCollectionRef = collection(db, 'posts');

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostLists(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    getPosts();
  }, []);
  return (
    <div className="home-page">
      { postLists.map((post) => {
        return (
          <div className="post">
            <div className="post-header">
              <div className="post-header__title">
                <h1>{ post.title }</h1>
              </div>
            </div>
            <div className="post-text__container">
              { post.postText }
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Home;