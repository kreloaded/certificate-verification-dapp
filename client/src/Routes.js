import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/other/Navbar';
import Home from './components/other/Home/Home';
import AddCertificate from './components/certificate/add/AddCertificate';
import ViewCertificate from './components/certificate/view/ViewCertificate';
import GetTransactionDetails from './components/certificate/transaction/GetTransactionDetails';
import Page404 from './components/other/error/page-not-found/Page404';
import Footer from './components/other/footer/Footer';

class Routes extends Component {
  render () {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/add-certificate" component={ AddCertificate } />
          <Route path="/view-certificate" component={ ViewCertificate } />
          <Route path="/get-transaction-details" component={ GetTransactionDetails } />
          <Route component={ Page404 } />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  };
};

export default  Routes;
