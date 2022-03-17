import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create-post">Create Post</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/create-post' element={<CreatePost />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </Router>
  )
}

export default App;
