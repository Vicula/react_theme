// External dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import Placeholder from '../../../dist/images/placeholder.jpg';
import NotFound from '../../not-found';
import GetImage from '../../funcs/getImage.js';

class HomeHeader extends React.Component {

    render() {
      console.log(this.props.cf.header_pic[0])
      console.log(GetImage(this.props.cf.header_pic[0]));
        return (
          <header>
            <div className="mobilePic" style={{backgroundImage:'url(' + GetImage(this.props.cf.header_pic[0]) + ')'}}></div>
              <div className="headerCont" >
                <span dangerouslySetInnerHTML={{__html:this.props.cf.header_content}}></span>
                <Link to="/products" className="btn">Find your flavor</Link>
              </div>
            <div className="headerPic" style={{backgroundImage:'url(' + GetImage(this.props.cf.header_pic[0]) + ')'}}></div>
          </header>
        );
    }
}

export default HomeHeader;
