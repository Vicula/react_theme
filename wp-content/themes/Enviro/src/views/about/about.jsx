import React from 'react';
import { Link } from 'react-router-dom';

import LoadingIcon from '../../../dist/images/loading-icon.gif';


class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }



    componentDidMount() {
        var that = this;
        window.onbeforeunload = function () { window.scrollTo(0, 0); }
        jQuery('.loading-panel').addClass('hide');
    }

    componentDidUpdate() {

    }

    render() {
        return (

                <div className="container aboutHolder">
                  <HomeHeader cf={this.props.pageDets.custom_fields}/>
                  <LongCTA cf={this.props.pageDets.custom_fields}/>
                  <DuoCTA cf={this.props.pageDets.custom_fields}/>
                  <BlogCTA cf={this.props.pageDets.custom_fields}/>
                  <DuoCTA cf={this.props.pageDets.custom_fields}/>
                  <LongCTA cf={this.props.pageDets.custom_fields}/>
                  <div className="parallaxImg"><img src="http://newcobblehill.wpengine.com/wp-content/uploads/2018/07/Untitled-2.jpg" /></div>
                </div>

        );
    }
}

export default Home;
