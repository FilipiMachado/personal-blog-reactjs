import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useEffect } from "react/cjs/react.development";

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
              <button onClick={logOut}>Sair</button>
            </>
          )}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost isAuth={isAuth}/>} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
