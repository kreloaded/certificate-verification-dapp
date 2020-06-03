import React, { Component } from 'react';

import './HowItWorks.css';

class HowItWorks extends Component {
    render () {
        return (
            <div className="how-it-works">
                <div className="title">
                    <h1>How it works..!</h1>
                    <h3>Few things to remember</h3>
                </div>
                <div className="section">
                    <section>
                        <p>1. As of now, only <b>Metamask</b> is supported. You must have Metamask
                            extension installed on your browser.
                        </p>
                    </section>
                    <section>
                        <p>2. Must logged in to Metamask.</p>
                    </section>
                    <section>
                        <p>3. As of now, <b>Rinkeby</b> ethereum testnet is used.
                            You must have sufficient Rinkeby ethers to perform transactions.
                        </p>
                    </section>
                    <section>
                        <p>
                            4. Make sure you are connected to Rinkeby testnet in Metamask.
                        </p>
                    </section>
                </div>
            </div>
        );
    };
}

export default HowItWorks;
