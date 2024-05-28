import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>   
      <Header />

      <Carousel />

      <MainContent />

      <Footer />
      
    </div>
  )
}

export default App