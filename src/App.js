import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import './App.css';
import Navbar from './components/Navbar';
import BookingForm from './pages/BookingForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie" element={<Movie/>}/>
        <Route path="/bookingform" element={<BookingForm/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
