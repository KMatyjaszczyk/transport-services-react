import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false)

  return (
    <>
      <Router>
        <Navbar userIsLoggedIn={userIsLoggedIn} setUserIsLoggedIn={setUserIsLoggedIn} />
        <Header />
        <Routes>
          <Route path='/*' exact element={<About />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/login' exact element={<Login userIsLoggedIn={userIsLoggedIn} setUserIsLoggedIn={setUserIsLoggedIn} />} />
          <Route path='/register' exact element={<Register/>} />
        </Routes>
        <Footer />
      </Router>

      <ToastContainer autoClose='4000' position='bottom-right'/>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"></script> {/* TODO it doesn't work here - with nav is hidden */}
    </>
  );
}

export default App;
