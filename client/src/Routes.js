import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import AddCertificate from './components/AddCertificate';
import ViewCertificate from './components/ViewCertificate';

class Routes extends Component {
  render () {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={ Home } />
        <Route path="/add-certificate" component={ AddCertificate } />
        <Route path="/view-certificate" component={ ViewCertificate } />
      </BrowserRouter>
    );
  };
};

export default  Routes;
