import './App.css';
import React from 'react';
import{BrowserRouter,Routes, Route} from 'react-router-dom';
import { Main } from './components/Main';
import { Details } from './components/Details';
import { Finds } from "./components/Finds";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/book/:isbn' element={<Details />}></Route>
        <Route path='/:query' element={<Finds />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
