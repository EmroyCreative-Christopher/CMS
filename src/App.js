import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashNavbar from './components/Navbar'
import OverviewTable from './components/OverviewTable'
import ProductShowcase from './components/ProductShowcase'
import { SecureRoute, Security, ImplicitCallback } from '@okta/okta-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Tester from './components/Tester'
import Home from './Home';



const config = {
  issuer: 'https://dev-493904.oktapreview.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '0oai9gwg86y6bzzft0h7'
}


class App extends Component {
  


  render() {

   
    return (
      <div className="App">

        <Router>
          <Security issuer={config.issuer} client_id={config.client_id} redirect_uri={config.redirect_uri}>
            <Route path='/' exact={true} component={Home} />
            <Route path='/implicit/callback' component={ImplicitCallback} />
            <SecureRoute path='/dashboard' exact={true} component={DashNavbar} />
            <SecureRoute path='/dashboard' exact={true} component={OverviewTable} />
            <SecureRoute path='/productshowcase' exact={true} component={ProductShowcase} />
            {/* <SecureRoute path='/tester' exact={true} component={Tester} /> */}
          </Security>
        </Router>

      </div>
    );
  }
}

export default App;
