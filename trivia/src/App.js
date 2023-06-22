import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Trivia from './trivia/trivia';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Login from './login/login';
function App() {
  return (
    <div className="header">
      <h1 className="headerTitle"> Welcome to Trivia </h1>    
    <BrowserRouter >
      <Routes>
        <Route path="/trivia" element={<Trivia/>}/>
        <Route path="/" element={<Login />}/>                                                        
        <Route path="/card/:id" element={<Trivia />}/>                                                
      </Routes>
    </BrowserRouter>    
    </div>

  )
}

export default App;
