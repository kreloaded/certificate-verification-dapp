import React, { Component } from 'react';

import web3 from '../../../getWeb3';
import CertificateContract from '../../../contracts/Certificate.json';

import './GetTransactionDetails.css';

class GetTransactionDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            transactionHash: '',
        }

        this.loadBlockchain = this.loadBlockchain.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
    }

    handleChange(event) {
        this.setState({
            transactionHash: event.target.value,
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const web3 = this.state.web3;

        const transaction = await web3.eth.getTransaction(this.state.transactionHash);
        console.log('Transaction Details :-', transaction);
    }

    render () {
        return (
            <div className="get-transaction-details">
                <form className="form">
                    <div className="form-group row">
                        <label htmlFor="transactionHash" className="col-sm-4 col-form-label">Enter Transaction Hash: </label>
                        <div className="col-sm-6">
                            <input
                                type="text"
                                className="form-control"
                                name="transactionHash"
                                value={this.state.transactionHash}
                                onChange={this.handleChange} />
                        </div>
                    </div>
                </form>
                <div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={this.handleSubmit}>
                            Get Transaction Details
                    </button>
                </div>
            </div>
        )
    }
}

export default GetTransactionDetails;
