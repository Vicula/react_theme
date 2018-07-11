// External dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import Placeholder from '../../../dist/images/placeholder.jpg';
import NotFound from '../../not-found';
import * as pageActions from '../../actions/pageActions';

class HomeHeader extends React.Component {
  constructor(props) {

      super(props);
      this.goGetImage = this.goGetImage.bind(this);
      this.state = {
        headerPic:''
      }
        this.goGetImage = this.goGetImage.bind(this);
  }
  goGetImage(id){
    var that = this;
     fetch(EnviroSettings.URL.api + "/media/"+id)
       .then(function (response) {

           if (!response.ok) {
               throw Error(response.statusText);
           }

           return response.json();
       })
       .then(function (results) {

          that.setState({ headerPic: results['source_url'] });
           return results['source_url'];
       }).catch(function (error) {
           console.log('There has been a problem with your fetch operation: ' + error.message);
       });
 }
  componentWillMount() {
    this.goGetImage(this.props.cf.header_pic[0]);

  }

    render() {
        return (
          <header>
            <div className="mobilePic" style={{backgroundImage:'url(' + this.state.headerPic + ')'}}></div>
              <div className="headerCont" >
                <span dangerouslySetInnerHTML={{__html:this.props.cf.header_content}}></span>
                <Link to="/products" className="btn">Find your flavor</Link>
              </div>
            <div className="headerPic" style={{backgroundImage:'url(' + this.state.headerPic + ')'}}></div>
          </header>
        );
    }
}

export default HomeHeader;
