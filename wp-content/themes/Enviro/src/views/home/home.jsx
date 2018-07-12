import React from 'react';
import { Link } from 'react-router-dom';

import LoadingIcon from '../../../dist/images/loading-icon.gif';
import HomeHeader from './home-header';
import LongCTA from './home-longCTA';
import DuoCTA from './home-duoCTA';
import BlogCTA from './home-blogCTA';

class Home extends React.Component {

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

                <div className="container homePage">
                  <HomeHeader cf={this.props.pageDets.custom_fields}/>
                  <LongCTA cf={this.props.pageDets.custom_fields}/>
                  <DuoCTA cf={this.props.pageDets.custom_fields}/>
                  <BlogCTA cf={this.props.pageDets.custom_fields}/>
                </div>

        );
    }
}

export default Home;
