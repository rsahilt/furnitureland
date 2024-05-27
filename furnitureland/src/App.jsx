import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import MainContent from './components/MainContent/MainContent';

const App = () => {
  return (
    <div>   
      <Header />

      <Carousel />

      <MainContent />
      
    </div>
  )
}

export default App