import './ProductPage.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { useEffect, useState } from 'react'


const Product = () => {
  return (
    <>
      <Header />
      <section className='section-product'>
        <div className="category-list">
          <ul>
            <li>Living</li>
            <li>Dining</li>
            <li>Bedroom</li>
            <li>Kitchen</li>
            <li>Garden</li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Product;