import './ProductPage.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import prod1 from "../assets/prod1.png"


const Product = () => {

  const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get("http://localhost:8080/products");
                setProducts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchProducts();
    }, []);

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

        <div className="product-cards-container">
        {products.map(product => (
            <Card key={product.id} style={{ margin:'20px 10px', width: '25%', borderRadius: '0px', border: '1px solid #d1e2e3' }}>
                <Card.Img style={{ borderRadius: '0px', height: '280px' }} variant="top" src={prod1} />
                <Card.Body>
                    <Card.Title className='prod-title'>{product.name}</Card.Title>
                    <Card.Text className='prod-price'>${product.price}</Card.Text>
                </Card.Body>
            </Card>
        ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Product;