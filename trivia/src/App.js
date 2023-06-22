import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Trivia from './trivia/trivia';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="header">
      <h1 className="headerTitle"> Welcome to trivia </h1>    
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Trivia />}/>                                                
        <Route path="/card/:id" element={<Trivia />}/>                                                
      </Routes>
    </BrowserRouter>    
    </div>

  )
}

export default App;
