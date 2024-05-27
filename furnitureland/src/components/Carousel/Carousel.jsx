import './Carousel.css'
import dining from '../../assets/dining.jpeg'
import living from '../../assets/living.jpeg'
import bedroom from '../../assets/bedroom.jpeg'
import Carousel from 'react-bootstrap/Carousel';


const Content = () => {
  return (  
    <Carousel>
        <Carousel.Item>
            <img
                style={{height:'88.5vh'}}
                className="d-block w-100 carousel-image"
                src={dining}
                alt="Slider Image"
            />
            <Carousel.Caption>
                <h5 className='text-shadow'>Dine in Style</h5>
                <p className='text-shadow'>Whether you're hosting a dinner party or enjoying a quiet family meal, our furniture combines style and functionality to create the perfect setting. Discover timeless designs and contemporary pieces that cater to every taste, ensuring your dining room is both inviting and refined. </p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                style={{height:'88.5vh'}}
                className="d-block w-100 carousel-image"
                src={living}
                alt="Slider Image"
            />
            <Carousel.Caption>
                <h5 className='text-shadow'>Make Your Living Room Live</h5>
                <p className='text-shadow'>Transform your living room into a stylish sanctuary with our exquisite collection of furniture. From plush sofas and elegant coffee tables to chic entertainment units, our pieces are designed to blend comfort with sophistication. </p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                style={{height:'88.5vh'}}
                className="d-block w-100 carousel-image"
                src={bedroom}
                alt="Slider Image"
            />
            <Carousel.Caption>
                <h5 className='text-shadow'>Discover Serenity</h5>
                <p className='text-shadow'>Create your perfect retreat with our luxurious bedroom furniture collection. Featuring stylish bed frames, spacious dressers, and cozy nightstands, our pieces are designed to blend comfort and elegance seamlessly. </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}

export default Content