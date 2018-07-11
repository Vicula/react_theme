import React from 'react';
import { Link } from 'react-router-dom';
import NavItems from './nav-items';
console.log(EnviroSettings.menu);
const Header = () => (
    <div className="container">
        <header id="masthead" className="site-header" role="banner">
            <nav className="navbar nav navbar-expand-lg navbar-light" >
                <Link to={EnviroSettings.path} ><h1 className="site-title navH1"><span className="acc">NavyHill</span></h1></Link>
                <div className="menu-primary-menu-container">
                  <NavItems menuItems={EnviroSettings.menu} />
                </div>
                <Link to={EnviroSettings.path}><i className="fa fa-shopping-cart" aria-hidden="true"></i></Link>

            </nav>
        </header>
    </div>
);

export default Header;
