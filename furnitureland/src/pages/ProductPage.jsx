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
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [priceFilter, setPriceFilter] = useState('defaultvalue'); // New state for price filter
  const [currentPage, setCurrentPage] = useState(1); // State for pagination
  const productsPerPage = 9; // Number of products per page

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const fetchAllBrands = async () => {
      try {
        const res = await axios.get("http://localhost:8080/brands")
        setBrands(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchAllBrands()
  }, []);

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
    setSelectedCategory(categoryId === 'All' ? 'All' : categoryId);
    setSelectedBrand('All'); // reset selected brand
    setCurrentPage(1); // reset to first page
  };

  const handleBrandClick = (brandId) => {
    setSelectedBrand(brandId === 'All' ? 'All' : brandId);
    setSelectedCategory('All'); // reset selected category
    setCurrentPage(1); // reset to first page
  };

  const handlePriceFilterChange = (e) => {
    setPriceFilter(e.target.value);
    setCurrentPage(1); // reset to first page
  };

  const filteredProducts = products.filter(product =>
    (selectedCategory === 'All' || product.category_id === selectedCategory) &&
    (selectedBrand === 'All' || product.brand_id === selectedBrand)
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (priceFilter === 'lowtohigh') {
      return a.price - b.price;
    } else if (priceFilter === 'hightolow') {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const selectedFilterName = selectedCategory !== 'All'
    ? categories.find(category => category.id === selectedCategory)?.name || 'All Furnitures'
    : selectedBrand !== 'All'
      ? brands.find(brand => brand.id === selectedBrand)?.name || 'All Brands'
      : 'All Furnitures';

  return (
    <>
      <Header />
      <section className='section-product'>
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
                  className={selectedCategory === category.id ? 'selected-category' : ''}
                >
                  {category.name}
                </li>
              ))}
            </ul>

            <ul>
              <li>Brands</li>
              <li
                onClick={() => handleBrandClick('All')}
                className={selectedBrand === 'All' ? 'selected-brand' : ''}
              >
                All Brands
              </li>
              {brands.map(brand => (
                <li
                  key={brand.id}
                  onClick={() => handleBrandClick(brand.id)}
                  className={selectedBrand === brand.id ? 'selected-brand' : ''}
                >
                  {brand.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="prod-main-content">

          <div className="category-menu" style={{ margin: '0 auto', width: '100%', fontSize: '1.3em', padding: '10px' }}>
            <div className='rectangle-triangle'>Furnitures</div>
            <div className='triangle-rectangle'>{selectedFilterName}</div>
          </div>
          <div style={{ margin: '0 auto', width: '95%', fontSize: '1.3em', padding: '10px' }}>
            <h6>Showing {sortedProducts.length} item(s) in <strong>{selectedFilterName}</strong></h6>
          </div>

          <div style={{ fontSize: '0.9em', width:'98%', backgroundColor:'red'}}>
            <select name="" id="" style={{ padding: '5px 15px', float:'right' }} value={priceFilter} onChange={handlePriceFilterChange}>
              <option value="defaultvalue" disabled>Filter by price</option>
              <option value="lowtohigh">Price : Low to High</option>
              <option value="hightolow">Price : High to Low</option>
            </select>
          </div>

          <div className="product-cards-container">
            {currentProducts.map(product => (
              <Card key={product.id} data-aos="fade-in" style={{ margin: '10px 0 10px 0', width: '300px', borderRadius: '0px', border: '1px solid #d1e2e3' }}>
                <Card.Img style={{ borderRadius: '0px', height: '300px', margin:'0' }} variant="top" src={prod1} />
                <Card.Body>
                  <Card.Title className='prod-title' style={{margin:'0', padding:'0'}}>{product.name}</Card.Title>
                  <Card.Text className='prod-desc' style={{margin:'0', padding:'0'}}>Brand: {brands.find(brand => brand.id === product.brand_id)?.name}</Card.Text>
                  <Card.Text className='prod-price' style={{margin:'0', padding:'0'}}>${product.price}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>

          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
              id="paginationbutton"
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={ currentPage === index + 1 ? 'active' : ''}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Product;
