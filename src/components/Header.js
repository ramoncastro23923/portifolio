import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <h1 className="logo">Meu Portfólio</h1>
                <ul className="nav-links">
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#skills">Habilidades</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
