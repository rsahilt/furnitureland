import './ProductPage.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { useEffect, useState } from 'react'
import axios from 'axios'


const Product = () => {
  const [categories, setCategories] = useState([])

  useEffect(()=>{
    const fetchAllCategories = async ()=>{
      try{
        const res = await axios.get("http://localhost:8080/categories")
        setCategories(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchAllCategories()
  },[])

  return (
    <>
      <Header />
      <section className='section-product'>
        <div className="category-list">
          
          <ul>
            {categories.map(category=>(
              <li>{category.name}</li>
            ))}
            
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Product;