import logo from './logo.svg';
import './App.scss';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/layout';
import Candidates from './components/candidates/candidates';

function App() {

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  console.log(isLoggedIn)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={isLoggedIn && <Dashboard />} />
            <Route path="/candidates" element={isLoggedIn && <Candidates />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
