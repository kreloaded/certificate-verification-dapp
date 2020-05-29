import React, { Component } from 'react';

import web3 from '../../../getWeb3';
// import CertificateContract from '../../../contracts/Certificate.json';
import FailedBlockchain from '../../other/error/failed/Failed';

import CertificateContract from '../../../contracts/Contract.json';

import './ViewCertificate.css';

class ViewCertificate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            certificateId: '',
            web3: null,
            contract: null,
            account: null,
            fname: '',
            lname: '',
            courseName: '',
            issuingAuthority: '',
            issueDate: '',
            fullName: '',
            isFetched: false,
            isConnected: false,
        }

        this.loadBlockchain = this.loadBlockchain.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.loadBlockchain();
    }

    async loadBlockchain() {
        console.log('web3 provider ::::', await web3.givenProvider);
        const givenProvider = await web3.givenProvider;

        if(givenProvider !== null) {
            this.setState({
                isConnected: true,
            });
        }

        if(this.state.isConnected) {
            const accounts = await web3.eth.getAccounts();
            console.log('accounts :-', accounts);

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
        this.setState({
            certificateId: event.target.value,
        });
    }

    async handleSubmit(event) {
        event.preventDefault();

        const getCertificateParams = {
            account: this.state.account,
            id: this.state.certificateId,
        };

        const contract = this.state.contract;

        const certificateDetailsResponse = await contract.methods.getCertificate(
            getCertificateParams.account,
            getCertificateParams.id,
        ).call();

        if(certificateDetailsResponse !== undefined) {
            this.setState({
                isFetched: true,
            });
        }
        this.setCertificateDetails(certificateDetailsResponse);
    }

    setCertificateDetails(certificateDetails) {
        const date = new Date(Number(certificateDetails[3])).toDateString()

        this.setState({
            fullName: certificateDetails[0],
            issuingAuthority: certificateDetails[1],
            courseName: certificateDetails[2],
            issueDate: date,
        });
    }

    render () {
        if(!this.state.isConnected) {
            return (
                <FailedBlockchain error="Please check your Metamask !" />
            );
        } else {
            return (
                <div className="view-certificate">
                    <div className="account-address">
                        <dl className="dl-horizontal row">
                            <dt className="col-5">Ethereum Account Address: </dt>
                            <dd className="col-7">{this.state.account}</dd>
                        </dl>
                    </div>
                    <form className="form">
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
                    <div className="certificate-details">
                        {this.state.isFetched ?
                            <div className="details">
                                <h2 className="title">Certificate Details</h2>
                                <dl className="dl-horizontal row">
                                    <dt className="col-4">Full Name: </dt>
                                    <dd className="col-8">{this.state.fullName}</dd>
                                    <dt className="col-4">Certificate ID: </dt>
                                    <dd className="col-8">{this.state.certificateId}</dd>
                                    <dt className="col-4">Course Name: </dt>
                                    <dd className="col-8">{this.state.courseName}</dd>
                                    <dt className="col-4">Issuing Authority: </dt>
                                    <dd className="col-8">{this.state.issuingAuthority}</dd>
                                    <dt className="col-4">Issue Date: </dt>
                                    <dd className="col-8">{this.state.issueDate}</dd>
                                </dl>
                                <div className="extra-spacing-div"></div>
                            </div>
                             : null}
                    </div>
                </div>
            );
        }
    };
};

export default ViewCertificate;
