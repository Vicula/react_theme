// External dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import Placeholder from '../../../dist/images/placeholder.jpg';
import NotFound from '../../not-found';
import * as pageActions from '../../actions/pageActions';

class AboutFooter extends React.Component {

    render() {
        return (
          <footer>
        		<section dangerouslySetInnerHTML={{__html:this.props.cf.footer_content}}></section>
        	</footer>
        );
    }
}

export default AboutFooter;
