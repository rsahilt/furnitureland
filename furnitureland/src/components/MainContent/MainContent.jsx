import './MainContent.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import prod1 from '../../assets/prod1.png';
import prod2 from '../../assets/prod2.png';
import prod3 from '../../assets/prod3.png';
import bannerimage from '../../assets/banner.jpeg'
import instabanner from '../../assets/instabanner.png'
import insta1 from '../../assets/insta1.png'
import insta2 from '../../assets/insta2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faHammer } from '@fortawesome/free-solid-svg-icons'




const MainContent = () => {

  return (
    <section>
        <div className='heading-container'>
            <h1 className='sectionh1'>Best Seller</h1>
            <p className='heading-desc'>Uncover the undeniable allure of our top-selling furniture pieces, where timeless craftsmanship meets unparalleled comfort, creating an enduring appeal.</p>
        </div>

        <div className="prod-container">    
            <Card style={{width: '30%', borderRadius: '0px' , border:'1px solid #d1e2e3'}}>
                <Card.Img style={{borderRadius: '0px', height:'280px'}} variant="top" src={prod1} />
                <Card.Body>
                    <Card.Title className='prod-title'>Premium L-shaped Sofa</Card.Title>
                    <Card.Text className='prod-price'>$5,000</Card.Text>
                </Card.Body>
            </Card>

            <Card style={{width: '30%', borderRadius: '0px', border:'1px solid #d1e2e3'}}>
                <Card.Img style={{borderRadius: '0px', height:'280px'}} variant="top" src={prod2} />
                <Card.Body>
                    <Card.Title className='prod-title'>Garden Ratten Set</Card.Title>
                    <Card.Text className='prod-price'>$9,000</Card.Text>
                </Card.Body>
            </Card>

            <Card style={{width: '30%', borderRadius: '0px', border:'1px solid #d1e2e3'}}>
                <Card.Img style={{borderRadius: '0px', height:'280px'}} variant="top" src={prod3} />
                <Card.Body>
                    <Card.Title className='prod-title'>Marble Dining Set</Card.Title>
                    <Card.Text className='prod-price'>$6,000</Card.Text>
                </Card.Body>
            </Card>
        </div>

        <div className="banner banner-bg">
            <div className="banner-image">
                <img src={bannerimage} alt="Banner Image" className='image-banner'/>
            </div>
            
            <div className="banner-text">
                <h1 className="bannertexth1">MOST TRUSTED INTERNATIONAL BRANDS</h1>
                <p className='bannertextp'>
                    Indulge in the elegance of international brands' furniture and elevate your living space to new heights of sophistication.
                </p>

                <p className='bannertextp'>
                    Transform your home into a sanctuary of style with exquisite furniture from renowned international brands.
                </p>

                <p className='bannertextp'>
                    <Button className="button-discover" variant="primary">Discover</Button>
                </p>

            </div>
        </div>

        <div className="banner">
            <div className="insta-banner" style={{marginRight:'10%'}}>
                <FontAwesomeIcon icon={faInstagram} className='insta-icon' />
                <h1 className="bannertexth1" style={{paddingTop:'30px'}}>Check us out on instagram</h1>
                <img src={instabanner} style={{width:'100%', padding: '10px 20px 0 40px'}} alt="" />
            </div>
            <div className="insta-post">
                <img src={insta1} style={{width:'100%', height:'100%'}} alt="insta picture" />
            </div>
            <div className="insta-post">
                <img src={insta2} style={{width:'100%', height:'100%'}} alt="insta picture" />
            </div>
        </div>

        <div className="message">MESSAGE FROM THE DIRECTOR</div>

        <div className="summary">
            <div className="summaryitem">
                <FontAwesomeIcon icon={faTruck} className='summary-icon'/>  
                <br /><br /><br />
                <p className='summary-text'>Free Delivery Inside Valley</p>
                <p>We offer free delivery service inside the kathmandu valley</p>
            </div>

            <div className="summaryitem">
                <FontAwesomeIcon icon={faCreditCard} className='summary-icon'/>  
                <br /><br /><br />
                <p className='summary-text'>Secure Payment</p>
                <p>We accept secure online payment via bank transfers and mobile wallets</p>
            </div>

            <div className="summaryitem">
                <FontAwesomeIcon icon={faBuilding} className='summary-icon'/>  
                <br /><br /><br />
                <p className='summary-text'>Multiple Locations</p>
                <p>Visit is in every state of the country in 5 different locations</p>
            </div>

            <div className="summaryitem">
                <FontAwesomeIcon icon={faHammer} className='summary-icon'/>  
                <br /><br /><br />
                <p className='summary-text'>Free Installation</p>
                <p>We provide free installation service all over the nation</p>
            </div>
        </div>
    </section>
  )
}

export default MainContent