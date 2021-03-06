import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux'
import Header from './views/header/header';
import Home from './views/home/home';
import About from './views/about/about';
import Footer from './views/footer/footer';
import Posts from './posts';
import Post from './post';
import Products from './products';
import Product from './product';
import DefaultPage from './default-page';
import NotFound from './not-found';
import LoadingIcon from '../dist/images/loading-icon.gif';
import Placeholder from '../dist/images/placeholder.jpg';

var pages;

const store = configureStore();

var component_holder = {
  'Home': Home,
  'Default': DefaultPage,
  'About': About
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

function furtherConstruction(){

  const App = () => (
      <div id="page-inner">
          <Header />
          <div id="content">
              <Switch>
                  {pages.map((r,i) => {
                      var routeUrl = r.link.split('.com/');
                      var str = routeUrl[1]
                      str = str.replace(/\s/g, '');
                      var Comp = component_holder[r.custom_fields.themeTemplate];
                      if(!Comp){
                        Comp = component_holder['Default'];
                      }
                      return <Route exact path={EnviroSettings.path + str } key={i} render={(props) => <Comp pageDets={r} key={i} {...props} />} />
                  })}
                  <Route path="*" component={NotFound} />
              </Switch>
          </div>
          <Footer />
      </div>
  );

  // Routes
  const routes = (
    <Provider store={store}>
      <Router>
          <Route path="/" component={App} />
      </Router>
      </Provider>
  );

  render(

      (routes), document.getElementById('page')
  );
}
