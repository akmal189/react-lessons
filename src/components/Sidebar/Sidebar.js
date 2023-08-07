import React from 'react';
import classes from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className={classes.sideBar}>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={navData => navData.isActive ? classes.active : classes.item}>Главная</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={navData => navData.isActive ? classes.active : classes.item}>О компании</NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile" className={navData => navData.isActive ? classes.active : classes.item}>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs" className={ navData => navData.isActive ? classes.active : classes.item }>Диалоги</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs2" className={ navData => navData.isActive ? classes.active : classes.item }>Диалоги 2</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;
