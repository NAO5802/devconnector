import { Fragment } from 'react';
import './App.css';
import { Navbar } from './components/layout/Navbar';
import { Landing } from './components/layout/Landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './components/layout/auth/Login';
import { Register } from './components/layout/auth/Register';

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Fragment>
  </BrowserRouter>
);

export default App;
