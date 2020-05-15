import React, { Component } from 'react';

import web3 from '../../../getWeb3';
import CertificateContract from '../../../contracts/Certificate.json';

import './GetTransactionDetails.css';

class GetTransactionDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            transactionHash: '',
            transactionDetails: null,
            isFetched: false,
        }

        this.loadBlockchain = this.loadBlockchain.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setTransactionDetails = this.setTransactionDetails.bind(this);
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
        this.setTransactionDetails(transaction);
    }

    setTransactionDetails(params) {
        // TODO: set transaction details to state variables
        const transactionDetails = {
            blockNumber: params.blockNumber,
            to: params.to,
            from: params.from,
            gas: params.gas,
            gasPrice: params.gasPrice,
            hash: params.hash,
            nonce: params.nonce,
            r: params.r,
            s: params.s,
            v: params.v,
            transactionIndex: params.transactionIndex
        }

        this.setState({
            transactionDetails: transactionDetails,
            isFetched: true,
        })
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
                <div>
                    {this.state.isFetched ?
                        <div className="transaction-details">
                            <h1 className="table-title">Transaction Details</h1>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Transaction Hash </td>
                                        <td>{this.state.transactionHash}</td>
                                    </tr>
                                    <tr>
                                        <td>Block Number </td>
                                        <td>{this.state.transactionDetails.blockNumber}</td>
                                    </tr>
                                    <tr>
                                        <td>From Account</td>
                                        <td>{this.state.transactionDetails.from}</td>
                                    </tr>
                                    <tr>
                                        <td>To Account</td>
                                        <td>{this.state.transactionDetails.to}</td>
                                    </tr>
                                    <tr>
                                        <td>Gas Used</td>
                                        <td>{this.state.transactionDetails.gas}</td>
                                    </tr>
                                    <tr>
                                        <td>Gas Price</td>
                                        <td>{this.state.transactionDetails.gasPrice}</td>
                                    </tr>
                                    <tr>
                                        <td>Hash</td>
                                        <td>{this.state.transactionDetails.hash}</td>
                                    </tr>
                                    <tr>
                                        <td>Nonce</td>
                                        <td>{this.state.transactionDetails.nonce}</td>
                                    </tr>
                                    <tr>
                                        <td>R</td>
                                        <td>{this.state.transactionDetails.r}</td>
                                    </tr>
                                    <tr>
                                        <td>S</td>
                                        <td>{this.state.transactionDetails.s}</td>
                                    </tr>
                                    <tr>
                                        <td>V</td>
                                        <td>{this.state.transactionDetails.v}</td>
                                    </tr>
                                    <tr>
                                        <td>Transaction Index</td>
                                        <td>{this.state.transactionDetails.transactionIndex}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                         : null}
                </div>
            </div>
        )
    }
}

export default GetTransactionDetails;
