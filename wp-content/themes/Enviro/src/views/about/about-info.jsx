// External dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import Placeholder from '../../../dist/images/placeholder.jpg';
import NotFound from '../../not-found';
import * as pageActions from '../../actions/pageActions';

class AboutInfo extends React.Component {

    getThatInfo(){
      var length = this.props.cf.specs;
    }

    render() {
        return (
          <section className="subSection">
        		<div>
        			{getThatInfo()}
        		</div>
        		<p dangerouslySetInnerHTML={{__html:this.props.cf.fine_text}}></p>
        	</section>
        );
    }
}

export default AboutInfo;
