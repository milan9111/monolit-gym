import React from "react";
import { Link } from "react-scroll";
import logo from './../sources/images/logo192.png';
import './../styles/header.css';

const Header = (props) => {
    return(
        <div className="header" id="home-scroll">
            <nav className="header__navbar">
                <Link className="header__item" activeClass="active" to="home-scroll" spy={true} smooth={true} duration={500}>Главная</Link>
                <Link className="header__item" activeClass="active" to="photo-scroll" spy={true} smooth={true}  duration={500}>Фотогалерея</Link>
                <Link className="header__item" activeClass="active" to="home-scroll" spy={true} smooth={true} duration={500}><img src={logo} alt='Logo'></img></Link>
                <Link className="header__item" activeClass="active" to="price-scroll" spy={true} smooth={true} duration={500}>Прайс</Link>
                <Link className="header__item" activeClass="active" to="contacts-scroll" spy={true} smooth={true} duration={500}>Контакты</Link>
            </nav>
        </div>
    );
}

export default Header;
