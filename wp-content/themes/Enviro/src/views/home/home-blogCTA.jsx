// External dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import Placeholder from '../../../dist/images/placeholder.jpg';
import NotFound from '../../not-found';

class HomeHeader extends React.Component {

    render() {
        return (
          <header>
            <div className="mobilePic" style={{backgroundImage:'url(' + Placeholder + ')'}}></div>
              <div className="headerCont">

                <Link to="/products" className="btn">Find your flavor</Link>
              </div>
            <div className="headerPic" style={{backgroundImage:'url(' + Placeholder + ')'}}></div>
          </header>
        );
    }
}

export default HomeHeader;
