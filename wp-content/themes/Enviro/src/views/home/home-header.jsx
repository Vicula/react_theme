// External dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import Placeholder from '../../../dist/images/placeholder.jpg';
import NotFound from '../../not-found';
import GetImage from '../../funcs/getImage.js';

class HomeHeader extends React.Component {

    render() {

        return (
          <header>
            <div className="mobilePic" style={{backgroundImage:'url(' + GetImage(this.props.cf.header_pic) + ')'}}></div>
              <div className="headerCont" dangerouslySetInnerHTML={{__html:this.props.cf.header_content}}>
                
                <Link to="/products" className="btn">Find your flavor</Link>
              </div>
            <div className="headerPic" style={{backgroundImage:'url(' + GetImage(this.props.cf.header_pic) + ')'}}></div>
          </header>
        );
    }
}

export default HomeHeader;
