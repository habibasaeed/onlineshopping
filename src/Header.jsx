import { Link } from 'react-router-dom';
import { useContext } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const gohome=()=>{

}

export const Header = () => {
    return (  
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div><h1>ZARA</h1></div>

 <ul>
      <li><Link to="/Home">Home</Link></li> 
      <li><Link to="/contactus">Contact us</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/men">Men</Link></li>
      <li><Link to="/women">Women</Link></li>

        <li><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} />

</Link></li>

    </ul>
        </nav>
        );
    }
