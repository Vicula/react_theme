// External dependencies
import React from 'react';
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
  goGetImage(id,id2){
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
       fetch(EnviroSettings.URL.api + "/media/"+id2)
         .then(function (response) {

             if (!response.ok) {
                 throw Error(response.statusText);
             }

             return response.json();
         })
         .then(function (results) {

            that.setState({ ctaPic2: results['source_url'] });
             return results['source_url'];
         }).catch(function (error) {
             console.log('There has been a problem with your fetch operation: ' + error.message);
         });
 }
  componentWillMount() {
    this.goGetImage(this.props.cf.cta_2_pic[0],this.props.cf.cta_3_pic[0]);

  }
    render() {
        return (
          <section className="ctaHolder">
        		<div className="cta cta1" style={{backgroundImage:'url(' + Placeholder + ')'}}>
        			<div className="arrowTab"><span>&#8902;</span></div>
        			<div className="overlay"></div>
        			<div className="content content1"><Link to=""><span className="btn btn1">Read more</span></Link></div>
        		</div>
        		<div className="cta cta2" style={{backgroundImage:'url(' + Placeholder + ')'}}>
        			<div className="arrowTab"><span>&#8902;</span></div>
        			<div className="overlay"></div>
        			<div className="content content2"><Link to=""><span className="btn btn2">Read more</span></Link></div>
        		</div>
        	</section>
        );
    }
}

export default DuoCTA;
