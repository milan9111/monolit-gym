import React from "react";
import { Link } from "react-scroll";
import logo from './../sources/images/logo192.png';
import './../styles/header.css';

const Header = (props) => {
    return(
        <header className="header" id="home-scroll">
            <nav className="header__navbar">
                <Link className="header__item" activeClass="active" to="home-scroll" spy={true} smooth={true} duration={1000} delay={100}>Главная</Link>
                <Link className="header__item" activeClass="active" to="photo-scroll" spy={true} smooth={true}  duration={1000} delay={100}>Фотогалерея</Link>
                <Link className="header__item" activeClass="active" to="home-scroll" spy={true} smooth={true} duration={1000} delay={100}><img src={logo} alt='Logo'></img></Link>
                <Link className="header__item" activeClass="active" to="price-scroll" spy={true} smooth={true} duration={1000} delay={100}>Прайс</Link>
                <Link className="header__item" activeClass="active" to="contacts-scroll" spy={true} smooth={true} offset={100} duration={1000} delay={100}>Контакты</Link>
            </nav>
        </header>
    );
}

export default Header;
