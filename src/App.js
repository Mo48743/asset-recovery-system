import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // 🔹 Make sure this line is included

const Home = () => <h2>Welcome to USIU-Africa Lost & Found</h2>;
const Login = () => <h2>Login to Report or Claim</h2>;
const Register = () => <h2>Create Your Account</h2>;

function App() {
  return (
    <Router>
      <header>
        <h1>USIU-Africa Lost & Found Portal</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <footer>
        &copy; {new Date().getFullYear()} USIU-Africa | All Rights Reserved
      </footer>
    </Router>
  );
}

export default App;
