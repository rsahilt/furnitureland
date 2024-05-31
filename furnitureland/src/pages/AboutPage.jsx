import './AboutPage.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import dirimage1 from '../assets/dirimage.png'
import dirimage2 from '../assets/dirimage2.jpeg'

const about = () => {
  return (
    <>
      <Header />

      <section className="about-section">
        <div className="board">
            We are proud of being one of the largest furniture retailers and importers in Nepal. With four showrooms and two warehouses we have been supplying furniture to our customers to better suit their lifestyle since 2001. We import high quality furniture from Thailand, China, Vietnam, Malaysia and many other countries. We keep the largest stock of furniture so that we can supply large quantities when needed. We strongly believe that we are our customers ,so, we train our staffs to be the best in providing our customers with long term commitment, prompt delivery, professional advice and give the best customer satisfaction possible.
        </div>

        <div className="aboutheading">
          <h1>Board Members</h1>
        </div>
        
        <div className="board">
          <div className="image-member">
            <img src={dirimage2} alt="director image" style={{width:'180px', height:'180px', borderRadius:'50%'}}/>
          </div>
          <div className="text-member">
            <h5 className="member-name">Madan Lal Joshi</h5>
            <p className='member-title'>Chairperson</p>
            <p className='member-message'>Our commitment to excellence and customer satisfaction drives us to continuously enhance our offerings and services. We are dedicated to exceeding your expectations and transforming your spaces into beautiful, comfortable homes. Thank you for being a part of our journey and for placing your trust in Furniture Land Store.</p>
          </div>
        </div>

        <div className="board">
          <div className="image-member">
            <img src={dirimage1} alt="director image" style={{width:'180px', height:'180px', borderRadius:'50%'}}/>
          </div>
          <div className="text-member">
            <h5 className="member-name">Saurav Joshi</h5>
            <p className='member-title'>Managing Director</p>
            <p className='member-message'>
            Welcome to Furniture Land Store, where quality meets innovation in every piece of furniture we create. We have established a reputation for excellence and customer-centric service. Our mission is to provide sustainable and stylish furniture that enhances the beauty and functionality of your home. 
            </p>
          </div>
        </div>

        

      </section>
 
      <Footer />
    </>
  )
}

export default about