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

    componentWillUnmount() {

    }

    componentDidMount() {
        var that = this;
        window.onbeforeunload = function () { window.scrollTo(0, 0); }


    }



    componentDidUpdate() {

    }

    render() {
      console.log(this);
        return (

                <div className="container homePage">
                  <HomeHeader/>
                  <LongCTA/>
                  <DuoCTA/>
                  <BlogCTA/>
                </div>


        );
    }
}

export default Home;
