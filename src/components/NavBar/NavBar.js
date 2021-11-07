import './NavBar.scss';
import logo from './logo.svg';
import {CartWidget} from '../CartWidget/CartWidget';



const NavBar = () => {

    return (
      <header>
        <div className="logo">
            <img src={logo} alt="" />
            <h1>TIENDA REACT</h1>
        </div>
        <nav>
          <ul>
            <li><a href="./index.html"> Home </a> </li>
            <li><a href="./index.html"> Nosotros</a> </li>
            <li><a href="./index.html"> Tienda </a></li>
            <li><a href="./index.html"> Contacto</a> </li>
          </ul>
        </nav>
        <CartWidget/>
      </header>
    );

}

export default NavBar;