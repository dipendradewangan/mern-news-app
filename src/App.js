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
            <News title='general'></News>
          }></Route>
          
          <Route exact path='/business' element={
            <News title='business'></News>
          }></Route>

          <Route exact path='/entertainment' element={
            <News title='entertainment'></News>
          }></Route>


          <Route exact path='/health' element={
            <News title='health'></News>
          }></Route>

          <Route exact path='/science' element={
            <News title='science'></News>
          }></Route>

          <Route exact path='/sports' element={
            <News title='sports'></News>
          }></Route>

          <Route exact path='/technology' element={
            <News title='technology'></News>
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
