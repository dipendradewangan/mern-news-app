import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from './components/pages/News'
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
            <News></News>
          }></Route>
          
          <Route exact path='/business' element={
            <News></News>
          }></Route>

          <Route exact path='/entertainment' element={
            <News></News>
          }></Route>

          <Route exact path='/general' element={
            <News></News>
          }></Route>

          <Route exact path='/health' element={
            <News></News>
          }></Route>

          <Route exact path='/science' element={
            <News></News>
          }></Route>

          <Route exact path='/sports' element={
            <News></News>
          }></Route>

          <Route exact path='/technology' element={
            <News></News>
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
