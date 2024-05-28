import './Footer.css'
import logo from '../../assets/furniturelandlogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faViber } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <footer>
        <div className="innerfooter">
            <div className="company-links">
                <p>
                    <img src={logo} alt="company logo" style={{width:'75px', height:'75px'}}/>
                </p>
                <p className='footer-company-links'>
                    <FontAwesomeIcon icon={faEnvelope}/>&nbsp; &nbsp;furnitureland@gmail.com</p>
                <p className='footer-company-links'>
                    <FontAwesomeIcon icon={faPhone}/>&nbsp; &nbsp;01-4224797</p>
                <p className='footer-company-links'>
                    <FontAwesomeIcon icon={faLocationDot}/>&nbsp; &nbsp;Bluestar Complex, Tripureshwor, Kathmandu 44600, Nepal
                </p>

                <p className='footer-company-links social-media-icons'>
                    <FontAwesomeIcon icon={faFacebook}/>&nbsp; &nbsp;
                    <FontAwesomeIcon icon={faInstagram}/>&nbsp; &nbsp;
                    <FontAwesomeIcon icon={faViber}/>&nbsp; &nbsp;
                </p>
               
            </div>
            <div className="quicklinks">
                <h5>CONTACT</h5>
                <ul>
                    <li>Contact us</li>
                    <li>Book an appointment</li>
                    <li>Showrooms</li>
                </ul>
            </div>

            <div className="quicklinks">
                <h5>Shop by category</h5>
                <ul>
                    <li>Living</li>
                    <li>Kithcen & Dining</li>
                    <li>Bedroom</li>
                    <li>Office</li>
                    <li>Garden</li>
                    <li>Decorations</li>
                </ul>
            </div>

            <div className="quicklinks">
                <h5>Terms & Conditions</h5>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Return Policy</li>
                    <li>Terms & Conditions</li>
                    <li>FAQs</li>
                </ul>
            </div>
           
        </div>

        <div className="copyright">
            <sup>&copy;</sup>Copyright 2024, &nbsp; Furniture Land Store, &nbsp; Nepal
        </div>
    </footer>
  )
}

export default Footer