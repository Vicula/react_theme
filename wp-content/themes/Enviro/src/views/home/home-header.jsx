// External dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import Placeholder from '../../../dist/images/placeholder.jpg';
import NotFound from '../../not-found';
import * as pageActions from '../../actions/pageActions';

class HomeHeader extends React.Component {

  componentWillMount() {
    console.log(pageActions.getImages(this.props.cf.header_pic[0]));
  }

    render() {
      console.log(this.props.cf.header_pic[0])

        return (
          <header>
            <div className="mobilePic" style={{backgroundImage:'url(' + pageActions.getImages(this.props.cf.header_pic[0]) + ')'}}></div>
              <div className="headerCont" >
                <span dangerouslySetInnerHTML={{__html:this.props.cf.header_content}}></span>
                <Link to="/products" className="btn">Find your flavor</Link>
              </div>
            <div className="headerPic" style={{backgroundImage:'url(' + pageActions.getImages(this.props.cf.header_pic[0]) + ')'}}></div>
          </header>
        );
    }
}

export default HomeHeader;
