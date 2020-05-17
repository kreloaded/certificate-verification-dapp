import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/other/Navbar';
import Home from './components/other/Home';
import AddCertificate from './components/certificate/add/AddCertificate';
import ViewCertificate from './components/certificate/view/ViewCertificate';
import GetTransactionDetails from './components/certificate/transaction/GetTransactionDetails';
import Footer from './components/other/footer/Footer';

class Routes extends Component {
  render () {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={ Home } />
        <Route path="/add-certificate" component={ AddCertificate } />
        <Route path="/view-certificate" component={ ViewCertificate } />
        <Route path="/get-transaction-details" component={ GetTransactionDetails } />
        <Footer />
      </BrowserRouter>
    );
  };
};

export default  Routes;
