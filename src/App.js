import React from 'react';
import './App.css';
import MySidenav from './components/MySidenav';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <MySidenav/>
      <Routes>
        <Route path='/community' element={<community/>} />
        <Route path='/gif' element={<gif/>} />
        <Route path='/history' element={<history/>} />
        <Route path='/images' element={<images/>} />
      </Routes>
    </Router>
  );
}

export default App;
