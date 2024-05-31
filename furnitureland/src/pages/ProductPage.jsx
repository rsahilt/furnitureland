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

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId === 'All' ? 'All' : categories.find(category => category.id === categoryId));
  };

  const filteredProducts = products.filter(product => selectedCategory === 'All' || product.category_id === selectedCategory.id);

  return (
    <>
      <Header />
      <section className='section-product' >
        <div className="product-sidebar">
          <div className="category-list">
            <ul>
              <li>Furnitures</li>
              <li 
                onClick={() => handleCategoryClick('All')}
                className={selectedCategory === 'All' ? 'selected-category' : ''}
              >
                All Furnitures
              </li>
              {categories.map(category => (
                <li 
                  key={category.id} 
                  onClick={() => handleCategoryClick(category.id)}
                  className={selectedCategory.id === category.id ? 'selected-category' : ''}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="prod-main-content">

        <div className="category-menu " style={{ margin: '0 auto', width: '95%', fontSize: '1.3em', padding: '10px' }}>
          <div className='rectangle-triangle'>
            Furnitures 
          </div>
          &nbsp; &nbsp;
          <div className='triangle-rectangle'>
            {selectedCategory === 'All' ? 'All Furnitures' : selectedCategory.name}
          </div>
        </div>
          <div style={{margin:'0 auto', width:'95%', fontSize:'1.3em', padding:'10px'}}>
            <h6>Showing {filteredProducts.length} item(s) in <strong>{selectedCategory === 'All' ? 'All Furnitures' : selectedCategory.name}</strong></h6>
          </div>

          <div className="product-cards-container">
            {filteredProducts.map(product => (
              <Card key={product.id} data-aos="fade-in" style={{ margin: '10px 10px', width: '300px', borderRadius: '0px', border: '1px solid #d1e2e3' }}>
                <Card.Img style={{ borderRadius: '0px', height: '300px' }} variant="top" src={prod1} />
                <Card.Body>
                  <Card.Title className='prod-title'>{product.name}</Card.Title>
                  <Card.Text className='prod-desc'>Brand: {product.brand_id}</Card.Text>
                  <Card.Text className='prod-price'>${product.price}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Product;
