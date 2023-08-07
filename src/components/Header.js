import React from 'react';
import logo from './logo.svg';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
      <div className="header">
        <div className="header__inner">
            <div className="header__logo">
                <a href="#">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className="header__menu">
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Главная</NavLink>
                        </li>
                        
                        <li>
                            <NavLink to="/about">О компании</NavLink>
                        </li>
                        
                        <li>
                            <NavLink to="/profile">Profile</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dialogs">Диалоги</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
      </div>
    );
  }
  
  export default Header;
  