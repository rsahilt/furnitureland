import './ProductPage.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import prod1 from "../assets/prod1.png"
import AOS from 'aos'
import 'aos/dist/aos.css'

const Product = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(()=>{
    AOS.init({duration:1000});
  },[])

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

  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        const res = await axios.get("http://localhost:8080/categories")
        setCategories(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchAllCategories()
  }, []);

  const handleCategoryChange = (event) => {
    const categoryId = event.target.value;
    setSelectedCategory(categoryId === 'All' ? 'All' : categories.find(category => category.id === parseInt(categoryId)));
  };

  return (
    <>
      <Header />
      <section className='section-product'>
        <div className="category-dropdown">
          <select onChange={handleCategoryChange} value={selectedCategory.id || 'All'}>
            <option value="All">All Furnitures</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="product-cards-container">
          {products
            .filter(product => selectedCategory === 'All' || product.category_id === selectedCategory.id)
            .map(product => (
              <Card key={product.id} data-aos="fade-in" style={{ margin: '20px 10px', width: '300px', borderRadius: '0px', border: '1px solid #d1e2e3' }}>
                <Card.Img style={{ borderRadius: '0px', height: '300px' }} variant="top" src={prod1} />
                <Card.Body>
                  <Card.Title className='prod-title'>{product.name}</Card.Title>
                  <Card.Text className='prod-desc'>Brand: {product.brand_id}</Card.Text>
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
