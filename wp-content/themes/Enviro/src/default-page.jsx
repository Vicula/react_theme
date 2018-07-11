import React from 'react';
import { Link } from 'react-router-dom';
import LoadingIcon from '../dist/images/loading-icon.gif';


class DefaultPage extends React.Component {

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

        return (

                <div className="container default-page">
                  <p>Default page</p>
                </div>


        );
    }
}

export default DefaultPage;
