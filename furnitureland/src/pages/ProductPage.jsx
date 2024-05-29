import './ProductPage.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { useEffect, useState } from 'react'
import axios from 'axios';


const Product = () => {

  const[category, setCategory] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8081')
    .then(res =>setCategory(res.data))
    .catch(err => console.log(err));
  },[])

  return (
    <>
      <Header />
      <section className='section-product'>
        
        <table>

          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>

          <tbody>
          {
              category.map((data, i) => (
                <tr key={i}>
                  <td>{data.Name}</td>
                </tr>
              ))
            }
            
          </tbody>

        </table>

      </section>
      <Footer />
    </>
  );
}

export default Product;