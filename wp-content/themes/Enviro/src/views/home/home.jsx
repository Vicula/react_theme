import React from 'react';
import { Link } from 'react-router-dom';
import LoadingIcon from '../../../dist/images/loading-icon.gif';


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
            <div>
                <div className="container">
                    <h1 className="posts-title">HOMEPAGE</h1>
                    
                </div>

            </div>
        );
    }
}

export default Home;
