import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Business from './components/pages/Business'
import Entertainment from './components/pages/Entertainment'
import General from './components/pages/General'
import Health from './components/pages/Health'
import Science from './components/pages/Science'
import Sports from './components/pages/Sports'
import Technology from './components/pages/Technology'
import NotFound from './components/pages/NotFound'


import './App.css';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar></Navbar>
        <Routes>
          <Route exact path='/' element={
            <Home></Home>
          }></Route>
          
          <Route exact path='/business' element={
            <Business></Business>
          }></Route>

          <Route exact path='/entertainment' element={
            <Entertainment></Entertainment>
          }></Route>

          <Route exact path='/general' element={
            <General></General>
          }></Route>

          <Route exact path='/health' element={
            <Health></Health>
          }></Route>

          <Route exact path='/science' element={
            <Science></Science>
          }></Route>

          <Route exact path='/sports' element={
            <Sports></Sports>
          }></Route>

          <Route exact path='/technology' element={
            <Technology></Technology>
          }></Route>
          <Route exact path='/*' element={
            <NotFound></NotFound>
          }></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
