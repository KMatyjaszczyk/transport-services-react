import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import About from './components/About'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/about' exact element={<About />}/>
        <Route path='/login' exact element={<Login />}/>
      </Routes>
    </Router>
  );
}

export default App;
