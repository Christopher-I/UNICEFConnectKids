# UNICEF Challenge: Reducing the divide

**Version 1.0.0**

A Dapp that manages internet connectivity across various schools in a fair, transparent and self sustaining way.

-   [ Click here to use working version](1Clickheretovisitdeployedversion)

## Table Of Content

1. [Installation](#Installation)

2. [Documentation](#Documentation)

    - [Scope and Overview](#ScopeandOverview)
    - [Assumptions](#Assumptions)
    - [Additional Mechanisms](#AdditionalMechanisms)
    - [Tech Stack and Tools](#TechStackandTools)
    - [Smart Contract Architecture](#SmartContractArchitecture)
    - [Improvements](#Improvements)

3. [Thanks](#Thanks)

-   [Copyright and license](Copyrightandlicense)

<h2 name="Installation">Installation</h2>

    - git clone https://github.com/Christopher-I/UNICEFConnectKids
    - cd UNICEFConnectKids
    - npm run i
    - $ npm run dev

<h2 name="Documentation">Documentation</h2>

<h3 name="ScopeandOverview">Scope and Overview</h3>

    -Country: Nigeria.

    -Participants: The General Public / Donors, ISPs and Schools.

    -Sample size : 3 schools and 3 ISPs.

<h3 name="Assumptions">Assumptions</h3>

    - Payments to ISPs are in ETH/ERC20

    - Connectivity information such as upload/download speed is received via a solidity smart contract from ISPs and Schools.

    - An average mean upload /download speed and data size provision are sent every day from the schools and ISPs.

    - One ISP at a time is responsible for providing connectivity to all schools within a country(future iterations will allow multiple ISPs to manage different schools within a country).

    -ISPs and Schools apply to be part of the Dapp and are approved by an admin (to prevent spamming of the network and ensure all participants are real).

<h3 name="Additional Mechanisms">Additional Mechanisms</h3>

    -The current ISP provider is chosen by a bidding system via a smart contract based on quality of service it promises to provide( faster download/upload speeds) and its previous history of perfomance. This way the best service providers over time will have a bidding advantage.

    -ISP perfomance are graded at the end of an appriopriate cycle period(example 30 days) and payments are made after grading depending on ISP grade.

    -After every succesful grade at the end of cycle, ISP recieve 'consistency points' which are a positive factor when bidding for future ISP opportunities.

<h3 name="TechStackandTools">Tech Stack and Tools</h3>

    -Blockchain protocol - Ethereum(Rinkeby Network).

    -Front End - JavaScript, React, Html, CSS.

    -Back End - Solidity, Node.js, NextJs.

    -Other Libraries and Tools - ETH Timer, Truffle, Web3.

<h3 name="SmartContractArchitecture">Smart Contract Architecture</h3>

Inline-style:
![alt text](https://previews.dropbox.com/p/thumb/AAiO7j26iI0EViZ1Wl4wvqEbYEIUfE7uKiTC-R_sDkQF96mxxv3wCMCtu7YYkI3qpicWG6xn5oYpMbCwvgJGL7ZVGNHPpBpKpw-9NNkew50ZcQOF7KdNUR8N777gBTK8D3g4EEen7ajNOXhjgOkW42GIhR6VAQLMAQ19RQ61OqX7Z8d-rDqzV6RWtEuDDWspHQ-ayD-xgOGwwA2K7SMnjurdeHf_rc6VjZDKf12ePPSQ5nVIAYEj2Ss-omgxeAR6n-pKy6DPhEveGEG9SmYpSbGAYgpphE4VvwNOtpNA_vFLPmnBVusMRiuZufNHwVUPGwmRzLNie-CRp9gVhR0zjOdl/p.png?fv_content=true&size_mode=5 "Dapp Architecture")

Inline-style:
![alt text]("https://github.com/Christopher-I/UNICEFConnectKids/raw/master/img/brazil.png" "Dapp Architecture")

Inline-style:
![alt text]("https://github.com/Christopher-I/UNICEFConnectKids/tree/master/img/brazil.png" "Dapp Architecture")

<h3 name="Improvements">Improvements</h3>

<a name="Thanks"></a>
A big thank you to UNICEF and gitcoin for providing this opportunity to create a Dapp that can benefit communities across that world that are in need of assistance. The project created with a lot passion for its cause and I hope we can continue the great work!

© Christopher Igbojekwe
