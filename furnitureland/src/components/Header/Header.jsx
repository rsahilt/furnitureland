import './Header.css'
import logo from '../../assets/furniturelandlogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  return (
    <header>
        <div className="logo">
            <img src={logo} alt="Furniture Land Logo" className='image-logo'/>
        </div>

        <div className="nav">
            <div className="utility-bar">
                Login | Register
            </div>

            <div className="menubar">

                <nav class="navbar navbar-expand-lg ms-5 ps-5">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Home</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">Showroom</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">Products</a>
                            </li>


                            <li class="nav-item">
                                <a class="nav-link" href="#">About Us</a>
                            </li>


                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact Us</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">Brands</a>
                            </li>
                            
                            
                        </ul>
                        
                        <form class="d-flex" role="search">
                            <input class="form-control me-2 searchbox" type="search" placeholder="Search Products" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">
                                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                            </button>
                        </form>

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header