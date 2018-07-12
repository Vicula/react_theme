// External dependencies
import React from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import Placeholder from '../../../dist/images/placeholder.jpg';
import NotFound from '../../not-found';


class BlogCTA extends React.Component {
  constructor(props) {

      super(props);
      this.goGetImage = this.goGetImage.bind(this);
      this.state = {
        blogPic:''

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
    this.goGetImage(this.props.cf.blog_pic[0],'blogPic');



  }
    render() {
        return (

          <section className="blogCTA">
            <LazyLoad height={200} offset={100}>
        		  <div className="blogPic" style={{backgroundImage:'url(' + this.state.blogPic + ')'}}></div>
            </LazyLoad>
        		<div className="blogCont">
        			<div className="holder">
        				<span className="star">&#8902;</span>
        				<section><h2 dangerouslySetInnerHTML={{__html:this.props.cf.main_blog_text}}></h2><div><span dangerouslySetInnerHTML={{__html:this.props.cf.blog_cursive}}></span></div></section>
        				<p dangerouslySetInnerHTML={{__html:this.props.cf.blog_sub_text}}></p>
        				<Link className="btn" to={EnviroSettings.path + this.props.cf.blog_link }>Read post</Link>
        			</div>
        		</div>
        	</section>
        );
    }
}

export default BlogCTA;
