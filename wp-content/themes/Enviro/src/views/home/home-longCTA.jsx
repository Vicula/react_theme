// External dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import Placeholder from '../../../dist/images/placeholder.jpg';
import NotFound from '../../not-found';

class LongCTA extends React.Component {

    render() {
        return (
          <section className="ctaLong" style={{backgroundImage:'url(' + Placeholder + ')'}}>
        		<div className="arrowTab"><span>&#8902;</span></div>
        		<div className="content"><Link className="btn" to="">Learn more</Link></div>
        	</section>
        );
    }
}

export default LongCTA;
