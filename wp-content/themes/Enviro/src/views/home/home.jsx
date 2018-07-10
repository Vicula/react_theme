import React from 'react';
import { Link } from 'react-router-dom';
import LoadingIcon from '../../../dist/images/loading-icon.gif';
import HomeHeader from './home-header';
import LongCTA from './home-longCTA';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            page: 0,
            getPosts: true,
            controller: false
        }

    }

    componentWillUnmount() {

    }

    componentDidMount() {
        var that = this;
        window.onbeforeunload = function () { window.scrollTo(0, 0); }


    }



    componentDidUpdate() {

    }

    render() {

        return (

                <div className="container homePage">
                  <HomeHeader/>
                  <LongCTA/>
                </div>


        );
    }
}

export default Home;
