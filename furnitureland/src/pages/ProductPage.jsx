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
  const [selectedCategory, setSelectedCategory] = useState(null);

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

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === 'All' ? null : category);
  };

  return (
    <>
      <Header />
      <section className='section-product'>
        <div className="category-list">
          <ul>
            <li 
              onClick={() => handleCategoryClick('All')}
              className={selectedCategory === null ? 'selected-category' : ''}
            >
              All
            </li>
            {categories.map(category => (
              <li 
                key={category.id} 
                onClick={() => handleCategoryClick(category)}
                className={selectedCategory && selectedCategory.id === category.id ? 'selected-category' : ''}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="product-cards-container">
          {products
            .filter(product => !selectedCategory || (selectedCategory === null || product.category_id === selectedCategory.id))
            .map(product => (
              <Card key={product.id} data-aos="slide-up" style={{ margin: '20px 10px', width: '20%', borderRadius: '0px', border: '1px solid #d1e2e3' }}>
                <Card.Img style={{ borderRadius: '0px', height: '200px' }} variant="top" src={prod1} />
                <Card.Body>
                  <Card.Title className='prod-title'>{product.name}</Card.Title>
                  <Card.Text className='prod-desc'>Brand: {product.brand_id}</Card.Text>
                  <Card.Text className='prod-desc'>Dimension: {product.dimension}</Card.Text>
                  <Card.Text className='prod-desc'>Material: {product.materials}</Card.Text>
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
