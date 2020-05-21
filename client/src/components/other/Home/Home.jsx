import React, { Component } from 'react';

import './Home.css';

class Home extends Component {
    render () {
        return (
            <div className="home">
                <h1 className="head-title">
                    Prizma : A Blockchain Based Certificate Verfication Dapp
                </h1>
                <div className="introduction">
                    <dl className="dl-horizontal row">
                        <dt className="ethereum-image col-3"/>
                        <dd className="col-8">
                            <div className="introduction-text">
                                <p>
                                    Prizma is completely based on Ethereum's Ropsten test network for
                                    transactions. Ethereum is a decentralized blockchain platform for
                                    "<b>building unstoppable applications</b>", while Ether is the
                                    cryptocurrency used on this platform. Ethereum can be used for virtually
                                    any kind of transaction or agreement.
                                </p>
                            </div>

                        </dd>
                    </dl>
                </div>
                <div className="sections">
                    <section className="heading-section">
                        <div>
                            <h1>Key Features of the Technology</h1>
                        </div>
                    </section>
                    <section className="section-1">
                        <div>
                            <h1>Decentralized</h1><br />
                            <p>
                                The network is decentralized meaning it doesn’t have any governing authority or a
                                single person looking after the framework. Rather a group of nodes maintains the
                                network making it decentralized.
                            </p>
                        </div>
                    </section>
                    <section className="section-2">
                        <div>
                            <h1>Cannot be Corrupted</h1><br />
                            <p>
                                The basic philosophy of the blockchain technology is that, once the transaction
                                blocks get added on the ledger, no one can just go back and change it. Thus, any
                                user on the network won’t be able to edit, delete or update it.
                            </p>
                        </div>
                    </section>
                    <section className="section-3">
                        <div>
                            <h1>Enhanced Security</h1><br />
                            <p>
                                Cryptography lays another layer of protection for users.
                                Cryptography is a rather complex mathematical algorithm
                                that acts as a firewall for attacks.
                            </p>
                        </div>
                    </section>
                </div>
            </div>

        );
    };
};

export default Home;
