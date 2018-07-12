// External dependencies
import React from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import Placeholder from '../../../dist/images/placeholder.jpg';
import NotFound from '../../not-found';

class LongCTA extends React.Component {
  constructor(props) {

      super(props);
      this.goGetImage = this.goGetImage.bind(this);
      this.state = {
        ctaPic:''
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

          that.setState({ ctaPic: results['source_url'] });
           return results['source_url'];
       }).catch(function (error) {
           console.log('There has been a problem with your fetch operation: ' + error.message);
       });
 }
  componentWillMount() {
    this.goGetImage(this.props.cf.cta_1_pic[0]);

  }
    render() {
        return (
          <LazyLoad offset={200}>
            <section className="ctaLong" style={{backgroundImage:'url(' + this.state.ctaPic + ')'}}>
          		<div className="arrowTab"><span>&#8902;</span></div>
          		<div className="content"><span dangerouslySetInnerHTML={{__html:this.props.cf.cta_1}}></span><Link className="btn" to={EnviroSettings.path + this.props.cf.cta_link }>Learn more</Link></div>
          	</section>
          </LazyLoad>
        );
    }
}

export default LongCTA;
