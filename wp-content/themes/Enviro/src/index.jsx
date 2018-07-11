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
import NotFound from './not-found';
import LoadingIcon from '../dist/images/loading-icon.gif';
import Placeholder from '../dist/images/placeholder.jpg';

var pages;

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

          var allPages;
          $.each(results,function(i,single){
            allPages.push(single);
          });
          pages = allPages;
          furtherConstruction();
      }).catch(function (error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
      });
}
getThosePages();

function furtherConstruction(){
console.log(pages);
  const App = () => (
      <div id="page-inner">
          <Header />
          <div id="content">
              <Switch>
                  <Route exact path={EnviroSettings.path} component={Home} />
                  <Route exact path={EnviroSettings.path + 'posts'} component={Posts} />
                  <Route exact path={EnviroSettings.path + 'posts/:slug'} component={Post} />
                  <Route exact path={EnviroSettings.path + 'products'} component={Products} />
                  <Route exact path={EnviroSettings.path + 'products/:product'} component={Product} />
                  <Route path="*" component={NotFound} />
              </Switch>
          </div>
          <Footer />
      </div>
  );

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
