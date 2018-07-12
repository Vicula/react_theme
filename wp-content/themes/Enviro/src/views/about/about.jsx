import React from 'react';
import { Link } from 'react-router-dom';

import LoadingIcon from '../../../dist/images/loading-icon.gif';
import AboutHeader from './about-header';
import AboutSubHeader from './about-subheader';
import AboutRefreshing from './about-refreshing';
import AboutCocktail from './about-cocktail';
import AboutFooter from './about-footer';
import AboutInfo from './about-info';

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
                  <AboutHeader cf={this.props.pageDets.custom_fields}/>
                  <AboutSubHeader cf={this.props.pageDets.custom_fields}/>
                  <AboutRefreshing cf={this.props.pageDets.custom_fields}/>
                  <AboutInfo cf={this.props.pageDets.custom_fields}/>
                  <AboutCocktail cf={this.props.pageDets.custom_fields}/>
                  <AboutFooter cf={this.props.pageDets.custom_fields}/>
                </div>

        );
    }
}

export default About;
