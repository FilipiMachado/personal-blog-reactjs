/* React */
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
/* Firebase */
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
/* Components */
import Home from "./pages/Home/Home";
import CreatePost from "./pages/CreatePost/CreatePost";
import Login from "./pages/Login/Login";
/* Styles */
import "./App.css";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const logOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          {!isAuth ? (
            <Link to="/login">Login</Link>
          ) : (
            <>
              <Link to="/create-post">Criar Post</Link>
              <button class="login-btn" onClick={logOut}>Sair</button>
            </>
          )}
        </nav>
        <Routes>
          <Route path="/" element={<Home isAuth={isAuth}/>} />
          <Route path="/create-post" element={<CreatePost isAuth={isAuth}/>} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
