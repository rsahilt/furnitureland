import './MainContent.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import prod1 from '../../assets/prod1.png';
import prod2 from '../../assets/prod2.png';
import prod3 from '../../assets/prod3.png';
import bannerimage from '../../assets/banner.jpeg'

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

        <div className="banner">
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
    </section>
  )
}

export default MainContent