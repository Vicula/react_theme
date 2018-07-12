// External dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import Placeholder from '../../../dist/images/placeholder.jpg';
import NotFound from '../../not-found';
import * as pageActions from '../../actions/pageActions';

class AboutSubHeader extends React.Component {
  constructor(props) {

      super(props);
      this.goGetImage = this.goGetImage.bind(this);
      this.state = {
        logo:''
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

          that.setState({ logo: results['source_url'] });
           return results['source_url'];
       }).catch(function (error) {
           console.log('There has been a problem with your fetch operation: ' + error.message);
       });
 }
  componentWillMount() {
    this.goGetImage(this.props.cf.logo[0]);

  }

    render() {
        return (
          <section className="subHeader">
        		<div className="holder">
        			<div className="logo" style={{backgroundImage:'url(' + this.state.logo + ')'}}></div>
        			<span dangerouslySetInnerHTML={{__html:this.props.cf.header_content}}></span>
        		</div>
        	</section>
        );
    }
}

export default AboutSubHeader;
