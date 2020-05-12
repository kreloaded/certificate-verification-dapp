import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/other/Navbar';
import Home from './components/other/Home';
import AddCertificate from './components/certificate/add/AddCertificate';
import ViewCertificate from './components/certificate/view/ViewCertificate';

import Modal from './components/other/Modal';

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
