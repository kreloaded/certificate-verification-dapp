import React, { Component } from 'react';

import web3 from '../../../getWeb3';
import CertificateContract from '../../../contracts/Certificate.json';

import './ViewCertificate.css';

class ViewCertificate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            certificateId: '',
        }
        this.loadBlockchain = this.loadBlockchain.bind(this);
    }

    componentDidMount() {
        this.loadBlockchain();
    }

    async loadBlockchain() {
        const accounts = await web3.eth.getAccounts();
        console.log('accounts :-', accounts);

        const networkId = await web3.eth.net.getId();
        const deployedNetwork = CertificateContract.networks[networkId];
        const instance = new web3.eth.Contract(
            CertificateContract.abi,
            deployedNetwork && deployedNetwork.address,
        );

        this.setState({
            web3,
            account: accounts[0],
            contract: instance
        });

        console.log('contract instance :-', this.state.contract);
    }

    handleChange(event) {
        this.setState({
            certificateId: event.target.value,
        });
    }

    async handleSubmit(event) {
        event.preventDefault();

    }
    render () {
        return (
            <div className="view-certificate">
                <form>
                    <div className="form-group row">
                        <label htmlFor="certificateId" className="col-sm-4 col-form-label">Enter Certificate ID: </label>
                        <div className="col-sm-6">
                            <input
                                type="text"
                                className="form-control"
                                name="certificateId"
                                value={this.state.certificateId}
                                onChange={this.handleChange} />
                        </div>
                    </div>
                </form>
                <div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={this.handleSubmit}>
                            Get Certificate
                    </button>
                </div>
            </div>
        );
    };
};

export default ViewCertificate;
