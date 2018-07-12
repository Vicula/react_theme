// External dependencies
import React from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import Placeholder from '../../../dist/images/placeholder.jpg';
import NotFound from '../../not-found';

class DuoCTA extends React.Component {
  constructor(props) {

      super(props);
      this.goGetImage = this.goGetImage.bind(this);
      this.state = {
        ctaPic1:'',
        ctaPic2:''
      }
        this.goGetImage = this.goGetImage.bind(this);
  }
  goGetImage(id,prop){
    var that = this;
     fetch(EnviroSettings.URL.api + "/media/"+id)
       .then(function (response) {

           if (!response.ok) {
               throw Error(response.statusText);
           }

           return response.json();
       })
       .then(function (results) {
         var returnObj = {};
         returnObj[prop] = results['source_url'];
          that.setState(returnObj);
           return results['source_url'];
       }).catch(function (error) {
           console.log('There has been a problem with your fetch operation: ' + error.message);
       });

 }
  componentWillMount() {
    this.goGetImage(this.props.cf.cta_2_pic[0],'ctaPic1');
    this.goGetImage(this.props.cf.cta_3_pic[0],'ctaPic2');


  }
    render() {
        return (
          <section className="ctaHolder">
          <LazyLoad offset={200}>
        		<div className="cta cta1" style={{backgroundImage:'url(' + this.state.ctaPic1 + ')'}}>
        			<div className="arrowTab"><span>&#8902;</span></div>
        			<div className="overlay"></div>
        			<div className="content content1"><span dangerouslySetInnerHTML={{__html:this.props.cf.cta_2}}></span><Link to={EnviroSettings.path + this.props.cf.cta_2_link }><span className="btn btn1">Read more</span></Link></div>
        		</div>
            </LazyLoad>
            <LazyLoad offset={200}>
        		<div className="cta cta2" style={{backgroundImage:'url(' + this.state.ctaPic2 + ')'}}>
        			<div className="arrowTab"><span>&#8902;</span></div>
        			<div className="overlay"></div>
        			<div className="content content2"><span dangerouslySetInnerHTML={{__html:this.props.cf.cta_3}}></span><Link to={EnviroSettings.path + this.props.cf.cta_3_link}><span className="btn btn2">Read more</span></Link></div>
        		</div>
            </LazyLoad>
        	</section>
        );
    }
}

export default DuoCTA;
