// External dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import Placeholder from '../../../dist/images/placeholder.jpg';
import NotFound from '../../not-found';

class HomeHeader extends React.Component {

    render() {

        return (
          <header>
            <div className="mobilePic" style="background-image: url('<?php the_field('header_pic') ?>')"></div>
              <div className="headerCont">

                <Link to="/products" className="btn">Find your flavor</Link>
              </div>
            <div className="headerPic" style="background-image: url('<?php the_field('header_pic') ?>')"></div>
          </header>
        );
    }
}

export default HomeHeader;
