// External dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import Placeholder from '../../../dist/images/placeholder.jpg';
import NotFound from '../../not-found';
import * as pageActions from '../../actions/pageActions';

class AboutInfo extends React.Component {

  constructor(props) {

      super(props);
      this.getThatInfo = this.getThatInfo.bind(this);
      this.state = {

      }
        this.getThatInfo = this.getThatInfo.bind(this);
  }

    getThatInfo(){
      var length = this.props.cf.specs;
      var info=[];
      for(var i = 0;i<=length;i++){
        var crntI = i + 1;
        var srNm = 'specs_'+ crntI +'_spec_text'
          info.push(<p dangerouslySetInnerHTML={{__html:this.props.cf[srNm]}}></p>)
      }
      return info;
    }

    render() {
        return (
          <section className="subSection">
        		<div>
        			{this.getThatInfo()}
        		</div>
        		<p dangerouslySetInnerHTML={{__html:this.props.cf.fine_text}}></p>
        	</section>
        );
    }
}

export default AboutInfo;
