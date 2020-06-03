import React, { Component } from 'react';

import web3 from '../../../getWeb3';
// import CertificateContract from '../../../contracts/Certificate.json';
import FailedBlockchain from '../../other/error/failed/Failed';
import CertificateContract from '../../../contracts/Contract.json';
import Loader from '../../other/loader/Loader';

import './AddCertificate.css';

const GAS_LIMIT = 3000000;

class AddCertificate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fname: '',
            lname: '',
            certificateId: '',
            courseName: '',
            issuingAuthority: '',
            issueDate: '',
            web3: null,
            account: '',
            receipt: null,
            isReceiptGenerated: false,
            isLoading: false,
        }
        this.loadBlockchain = this.loadBlockchain.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.loadBlockchain();
    }

    async loadBlockchain() {
        const givenProvider = await web3.givenProvider;
        console.log('web3  ::::', web3);

        if(givenProvider !== null) {
            this.setState({
                isConnected: true,
            });
        }

        if(this.state.isConnected) {
            const accounts = await web3.eth.getAccounts();

            if(accounts === undefined) {
                this.setState({
                    isFailed: true
                });
            }
            console.log('metamask account :-', accounts[0]);
            await web3.eth.accounts.wallet.add(accounts[0]);

            // const networkId = await web3.eth.net.getId();
            // const deployedNetwork = CertificateContract.networks[networkId];
            // const instance = new web3.eth.Contract(
            //     CertificateContract.abi,
            //     deployedNetwork && deployedNetwork.address,
            // );

            const instance = new web3.eth.Contract(
                CertificateContract.abi,
                CertificateContract.address,
            );

            this.setState({
                web3,
                account: accounts[0],
                contract: instance
            });
        }
    }

    handleChange(event) {
        let change = {};
        change[event.target.name] = event.target.value;
        this.setState(change);
    }

    async handleSubmit(event) {
        event.preventDefault();

        this.setState({
            isLoading: true,
        });

        const contract = this.state.contract;

        const addCertificateParams = {
            userName: this.state.fname + ' ' + this.state.lname,
            id: this.state.certificateId,
            courseName: this.state.courseName,
            issuingAuthority: this.state.issuingAuthority,
            issueDate: Date.parse(this.state.issueDate),
            accountAddress: this.state.account,
        }

        console.log('add cert params :-', addCertificateParams);
        const txReceipt = await contract.methods.addCertificate(
            addCertificateParams.userName,
            addCertificateParams.id,
            addCertificateParams.courseName,
            addCertificateParams.issuingAuthority,
            addCertificateParams.issueDate,
            addCertificateParams.accountAddress
        ).send({
            from: this.state.account,
            gas: GAS_LIMIT
         });

        console.log('tx receipt :-', JSON.stringify(txReceipt));

        const receiptData = {
            transactionHash: txReceipt.transactionHash,
            blockHash: txReceipt.blockHash,
            blockNumber: txReceipt.blockNumber,
            from: txReceipt.from,
            to: txReceipt.to,
            gasUsed: txReceipt.gasUsed,
            cumulativeGasUsed: txReceipt.cumulativeGasUsed
        }

        this.setState({
            isReceiptGenerated: true,
            receipt: receiptData
        });

        this.setState({
            isLoading: false,
        });
    }

    render () {
        if(!this.state.isConnected) {
            return (
                <FailedBlockchain error="Please check your Metamask is working and you are logged in !"/>
            );
        }

        if(this.state.isLoading) {
            return (
                <Loader />
            );
        }

        else {
            return (
                <div>
                    <div className="account-address">
                        <dl className="dl-horizontal row">
                            <dt className="col-5">Ethereum Account Address: </dt>
                            <dd className="col-7">{this.state.account}</dd>
                        </dl>
                    </div>
                    <div className="form-title">
                        <h1>Certificate Details</h1>
                    </div>
                        <p>Wait for at least 15 seconds after submitting the details.</p>
                    <form className="form">
                        <div className="form-group row">
                            <label htmlFor="fname" className="col-sm-4 col-form-label">Enter First Name: </label>
                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="fname"
                                    value={this.state.fname}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="lname" className="col-sm-4 col-form-label">Enter Last Name: </label>
                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="lname"
                                    value={this.state.lname}
                                    onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="certificateId" className="col-sm-4 col-form-label">Certificate ID: </label>
                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="certificateId"
                                    value={this.state.certificateId}
                                    onChange={this.handleChange}
                                    placeholder="e.g. 12ac-df4g-gh7t"
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="courseName" className="col-sm-4 col-form-label">Course Name: </label>
                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="courseName"
                                    value={this.state.courseName}
                                    onChange={this.handleChange}
                                    placeholder="e.g. Computer Security"
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="issuingAuthority" className="col-sm-4 col-form-label">Issuing Authority: </label>
                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="issuingAuthority"
                                    value={this.state.issuingAuthority}
                                    onChange={this.handleChange}
                                    placeholder="e.g. Offensive Security"
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="issueDate" className="col-sm-4 col-form-label">Issue Date: </label>
                            <div className="col-sm-6">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="issueDate"
                                    value={this.state.issueDate}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div><br />
                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit Certificate</button>
                    </form>
                    <div>
                        {this.state.isReceiptGenerated ?
                            <div className="receipt">
                                <h1 className="table-title">Transaction Receipt</h1>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Transaction Hash </td>
                                            <td>{this.state.receipt.transactionHash}</td>
                                        </tr>
                                        <tr>
                                            <td>Block Hash </td>
                                            <td>{this.state.receipt.blockHash}</td>
                                        </tr>
                                        <tr>
                                            <td>Block Number </td>
                                            <td>{this.state.receipt.blockNumber}</td>
                                        </tr>
                                        <tr>
                                            <td>From Account</td>
                                            <td>{this.state.receipt.from}</td>
                                        </tr>
                                        <tr>
                                            <td>To Account</td>
                                            <td>{this.state.receipt.to}</td>
                                        </tr>
                                        <tr>
                                            <td>Gas Used</td>
                                            <td>{this.state.receipt.gasUsed}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                             : null}
                    </div>
                </div>
            );
        }
    };
};

export default AddCertificate;
