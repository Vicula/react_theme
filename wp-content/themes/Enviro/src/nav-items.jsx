// External dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import Placeholder from '../dist/images/placeholder.jpg';
import NotFound from './not-found';

class NavItems extends React.Component {

    renderItems() {
        return this.props.menuItems.map((item, i) => {
          var baseurl = item.url;
          var cutUrl = baseurl.split('.com/');
            return (
                <li key={i} id={'menu-item-' + item.ID} className={'menu-item menu-item-type-post_type menu-item-object-page menu-item-' + item.ID} >
                <Link to={cutUrl[1]}>{item.title}</Link>
                </li>

            )
        });
    }

    renderEmpty() {
        return (
            <NotFound />
        )
    }

    render() {
        if (!this.props.menuItems) {
            return null;
        }

        return (
            <ul className="menu" id="menu-primary-menu">
                {this.props.menuItems.length ?
                    this.renderItems() :
                    this.renderEmpty()
                }
            </ul>
        );
    }
}

export default NavItems;
