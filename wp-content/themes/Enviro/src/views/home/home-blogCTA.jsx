// External dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import Placeholder from '../../../dist/images/placeholder.jpg';
import NotFound from '../../not-found';

class BlogCTA extends React.Component {

    render() {
        return (
          
          <section className="blogCTA">
        		<div className="blogPic" style={{backgroundImage:'url(' + Placeholder + ')'}}></div>
        		<div className="blogCont">
        			<div className="holder">
        				<span className="star">&#8902;</span>
        				<section><h2></h2><div><span>James</span></div></section>
        				<p></p>
        				<Link className="btn" to="">Read post</Link>
        			</div>
        		</div>
        	</section>
        );
    }
}

export default BlogCTA;
