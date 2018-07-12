// External dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import Placeholder from '../../../dist/images/placeholder.jpg';
import NotFound from '../../not-found';
import * as pageActions from '../../actions/pageActions';

class AboutCocktail extends React.Component {
  constructor(props) {

      super(props);
      this.goGetImage = this.goGetImage.bind(this);
      this.state = {
        section_2_pic:''
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

          that.setState({ section_1_pic: results['source_url'] });
           return results['source_url'];
       }).catch(function (error) {
           console.log('There has been a problem with your fetch operation: ' + error.message);
       });
 }
  componentWillMount() {
    this.goGetImage(this.props.cf.section_2_pic[0]);

  }

    render() {
        return (
          <section id="cocktail">
        		<div className="sectionPic" style={{backgroundImage:'url(' + this.state.section_2_pic + ')'}}></div>
        		<div>
        			<section dangerouslySetInnerHTML={{__html:this.props.cf.section_2_content}}></section>
        		</div>
        	</section>
        );
    }
}

export default AboutCocktail;
