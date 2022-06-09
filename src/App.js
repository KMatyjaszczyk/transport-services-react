import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import About from './components/About'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <Routes>
        <Route path='/*' exact element={<About />}/>
        <Route path='/about' exact element={<About />}/>
        <Route path='/login' exact element={<Login />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
