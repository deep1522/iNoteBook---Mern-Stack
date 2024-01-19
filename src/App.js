import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <>
    <NoteState>
    <BrowserRouter>
    <Navbar/>
    <Alert message=""/>
    <div className="container">
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>

      </Routes>
      </div>
    </BrowserRouter>
    </NoteState>
    </>
  );
}

export default App;
