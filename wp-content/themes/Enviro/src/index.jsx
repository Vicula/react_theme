import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './header';
import Home from './views/home/home';
import Footer from './footer';
import Posts from './posts';
import Post from './post';
import Products from './products';
import Product from './product';
import DefaultPage from './default-page';
import NotFound from './not-found';
import LoadingIcon from '../dist/images/loading-icon.gif';
import Placeholder from '../dist/images/placeholder.jpg';

var pages;

var component_holder = {
  'Home': Home,
  'Default': DefaultPage
}

// Load the Sass file
require('./style.scss');
function getThosePages(){
  var that = this;
  var totalPages;
  fetch(EnviroSettings.URL.api + "/pages")
      .then(function (response) {

          if (!response.ok) {
              throw Error(response.statusText);
          }

          return response.json();
      })
      .then(function (results) {

          var allPages=[];

          for(var i=0;i < results.length; i++){
            allPages.push(results[i]);
          }

          pages = allPages;
          furtherConstruction();
      }).catch(function (error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
      });
}
getThosePages();
const AddPropsToRoute = (WrappedComponent, passedProps)=>{
    return (
        class Route extends React.Component{
            render(){
                let props = Object.assign({}, this.props, passedProps)
                return  <WrappedComponent {...props} />
            }
        }
    )
}
function furtherConstruction(){

  const App = () => (
      <div id="page-inner">
          <Header />
          <div id="content">
              <Switch>
                  {pages.map((r) => {
                      var routeUrl = r.link.split('.com/');
                      var str = routeUrl[1]
                      str = str.replace(/\s/g, '');

                      return <Route exact path={EnviroSettings.path + str } component={component_holder[r.custom_fields.themeTemplate]} />
                  })}
                  <Route path="*" component={NotFound} />
              </Switch>
          </div>
          <Footer />
      </div>
  );

  // <Route exact path={EnviroSettings.path} render={(props) => <Home pageDets={pages[0]} {...props} />}/>
  // <Route exact path={EnviroSettings.path + 'posts'} component={Posts} />
  // <Route exact path={EnviroSettings.path + 'posts/:slug'} component={Post} />
  // <Route exact path={EnviroSettings.path + 'products'} component={Products} />
  // <Route exact path={EnviroSettings.path + 'products/:product'} component={Product} />
  // Routes
  const routes = (
      <Router>
          <Route path="/" component={App} />
      </Router>
  );

  render(

      (routes), document.getElementById('page')
  );
}
