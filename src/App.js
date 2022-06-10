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
import ReservationPanel from './components/ReservationPanel';

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
          <Route path='/reservations' exact element={<ReservationPanel />}/>
        </Routes>
        <Footer />
      </Router>

      <ToastContainer autoClose='4000' position='bottom-right' pauseOnHover={false}/>
    </>
  );
}

export default App;
