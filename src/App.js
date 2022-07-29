import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Pages
import Home from './pages/Home.js';
import Upload from './pages/Upload.js';
import Image from './pages/Image';

//Components
import Navbar from './components/Navbar';


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/image' element={<Image/>}/>
      </Routes>
    </Router>
  );
}

export default App;
