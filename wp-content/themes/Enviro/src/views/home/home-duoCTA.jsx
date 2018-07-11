// External dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import Placeholder from '../../../dist/images/placeholder.jpg';
import NotFound from '../../not-found';

class DuoCTA extends React.Component {

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
