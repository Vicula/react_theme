import React from 'react';
import { Link } from 'react-router-dom';
import NavItems from './nav-items';
console.log(EnviroSettings.menu);
const Header = () => (
    <div className="container">
        <header id="masthead" className="site-header" role="banner">
            <nav className="navbar nav navbar-expand-lg navbar-light" >
                <h1 className="site-title navH1"><Link to={EnviroSettings.path} ><span className="acc">NavyHill</span></Link></h1>
                <div className="menu-primary-menu-container">

                <NavItems menuItems={EnviroSettings.menu} />

                </div>
                <Link to={EnviroSettings.path}><i className="fa fa-shopping-cart" aria-hidden="true"></i></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link active" to={EnviroSettings.path} >Home <span className="sr-only">(current)</span></Link>
                        <Link className="nav-item nav-link" to={EnviroSettings.path + "products/"} >Products</Link>
                    </div>
                </div>
            </nav>
        </header>
    </div>
);

export default Header;
