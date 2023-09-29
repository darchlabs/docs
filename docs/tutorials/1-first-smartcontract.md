---
sidebar_position: 0
sidebar_label: 1. First Contract Deployment
title: Setting Up and Deploying Your First Contract with DarchLabs
---

import Step2 from '@site/static/img/tutorials/first-smartcontract/step-2-loop.gif';
import Step3 from '@site/static/img/tutorials/first-smartcontract/step-3-loop.gif';
import Step4 from '@site/static/img/tutorials/first-smartcontract/step-4-loop.gif';
import Step5 from '@site/static/img/tutorials/first-smartcontract/step-5-loop.gif';
import Step6 from '@site/static/img/tutorials/first-smartcontract/step-6-loop.gif';
import Step7 from '@site/static/img/tutorials/first-smartcontract/step-7-loop.gif';

## Introduction

In this tutorial, we'll guide you through the process of setting up and deploying your first smart contract using DarchLabs. By the end of this guide, you'll have a deployed contract on the Ethereum network and will be able to interact with it.

## Prerequisites

- An active account on DarchLabs.
- [MetaMask](https://metamask.io/) browser extension installed and set up.
- Basic understanding of Ethereum and smart contracts.

## Step-by-step Guide

### 1. Obtain Your API Key from DarchLabs

Before you can interact with the DarchLabs API, you'll need an API key. This API key authenticates your requests and links them to your DarchLabs account.

**How to get your API key:**

[Watch this video tutorial](#) to understand how to obtain your API key from the DarchLabs admin panel. _(Note: Replace the `#` with the actual link to your video.)_

### 2. Set Up Your Workspace on Remix

1. Navigate to [Remix Ethereum IDE](https://remix.ethereum.org/).
2. Click on the input de Workspaces para create a new workspace.
3. Select the template _Blank_" and mame your workspace "DarchLabs" and OK.

<div style={{ display: "flex", justifyContent: "center" }}>
  <img width={"80%"} src={Step2} />
</div>

### 3. Connect to GitHub and Import the Contract

1. In Remix, on the left sidebar, click in home, **Load from: GitHub** option.
2. Import the contract from the following URL: [Here](https://github.com/darchlabs/demo-integration-starter-kit/blob/main/demo-storage-contract/storage.sol).

<div style={{ display: "flex", justifyContent: "center" }}>
  <img width={"80%"} src={Step3} />
</div>

### 4. Compile the Contract

1. In Remix, click on the "Solidity Compiler" icon (it looks like a clipboard).
2. Ensure the correct contract and version are selected.
3. Click on the green "Compile" button.

<div style={{ display: "flex", justifyContent: "center" }}>
  <img width={"80%"} src={Step4} />
</div>

### 5. Deploy the Contract

1. Switch to the "Deploy & Run Transactions" tab (it looks like a play button).
2. Ensure your environment is set to "Injected Web3" (this will use MetaMask).
3. Click on the "Deploy" button.
4. A MetaMask popup will appear. Confirm the transaction.
5. Once the transaction is confirmed, you'll see your deployed contract in the lower left panel of Remix.

<div style={{ display: "flex", justifyContent: "center" }}>
  <img width={"80%"} src={Step5} />
</div>

### 6. Interact with Your Deployed Contract

1. In the lower left panel of Remix, you'll see your deployed contract. Click on it to expand its functions.
2. You can now interact with your contract's functions directly from Remix.

<div style={{ display: "flex", justifyContent: "center" }}>
  <img width={"80%"} src={Step6} />
</div>

### 7. Verify Your Contract on Etherscan

1. Once your contract is deployed, Remix will provide a link to view your contract on Etherscan.
2. Click on the link to view your contract's initial details and transactions on Etherscan.
3. To verify your contract, navigate to the "Contract" tab on Etherscan.
4. Here, you'll need to provide several details:

   - **Contract Address**: This should be auto-filled based on the contract you're viewing.
   - **Compiler Type**: Select the compiler you used in Remix.
   - **Compiler Version**: Choose the version that matches the one you used.
   - **License Type**: Specify the type of license for your contract.

5. On the next page, you'll be asked for the contract's source code. Paste the entire code of your smart contract here.

6. For the "Constructor Arguments ABI-encoded", if your contract's constructor had parameters when it was deployed, you'll need to provide the ABI-encoded version of those arguments. If you're unsure about this value:

   - You can generate the ABI-encoded arguments using tools like [ABI Hashex](https://abi.hashex.org/).
   - For the example contract we've been using, the constructor didn't have any parameters, so this field can be left empty.

7. Click **Verify and Publish** to submit the details.

8. After a brief waiting period, Etherscan will confirm the verification. You can then revisit the contract's page on Etherscan to see a verification checkmark, indicating that the contract is now verified.

<div style={{ display: "flex", justifyContent: "center" }}>
  <img width={"80%"} src={Step7} />
</div>

## Conclusion

Congratulations! You've successfully set up and deployed your first smart contract with DarchLabs. You can now interact with your contract, monitor its transactions, and integrate it with other applications using the DarchLabs API.

---
