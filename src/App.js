import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => <h1>Home Page</h1>;
const Login = () => <h1>Login Page</h1>;
const Register = () => <h1>Register Page</h1>;
const NotFound = () => <h1>404 - Not Found</h1>;

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
