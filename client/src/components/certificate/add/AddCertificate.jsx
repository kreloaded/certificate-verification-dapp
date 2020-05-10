import React, { Component } from 'react';
import './AddCertificate.css';

class AddCertificate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fname: '',
            lname: '',
            certificateId: '',
            courseName: '',
            issuingAuthority: '',
            issueDate: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let change = {};
        change[event.target.name] = event.target.value;
        this.setState(change);
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(`Submit clicked with ${JSON.stringify(this.state)}`);
    }

    render () {
        return (
            <div>
                <div className="form-title">
                    <h1>Certificate Details</h1>
                </div>
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
            </div>
        );
    };
};

export default AddCertificate;
