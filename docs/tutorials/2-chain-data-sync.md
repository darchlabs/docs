---
sidebar_position: 1
sidebar_label: 2. Blockchain Data Sync
title: Synchronizing Blockchain Data with DarchLabs
---

import SyncData from '@site/static/img/tutorials/chain-data-sync/step-1-loop.gif';

## Introduction

In this tutorial, we'll walk you through the steps to synchronize blockchain data using DarchLabs. This process allows you to seamlessly integrate and monitor events emitted by your smart contract, making it easier to build and manage decentralized applications.

## Prerequisites

- An active account on DarchLabs.
- A deployed smart contract. If you haven't deployed one yet, follow our [First Contract Deployment](/docs/tutorials/first-smartcontract) tutorial.

## Step-by-step Guide

### 1. Navigate to the Synchronizers Section

Start by logging into your DarchLabs account. Once logged in, head over to the "Synchronizers" section.

### 2. Configure Smart Contract

1. **Select the Network**: Choose the blockchain network where your smart contract has been deployed. This ensures that DarchLabs syncs data from the correct network.
2. **Name Your Synchronizer**: Provide a unique and descriptive name for your synchronizer. This helps in identifying and managing multiple synchronizers if you have more than one.
3. **Specify the Smart Contract Address**: Enter the blockchain address of your deployed smart contract.
4. **Provide the ABI (if required)**: If your smart contract isn't verified, DarchLabs will ask for its ABI (Application Binary Interface). This ABI allows DarchLabs to understand and interact with your contract. If your contract is verified, this step will be skipped.
5. **Enter the Webhook URL (Optional):** While this step is optional, it's highly recommended if you want real-time notifications of events from your smart contract. If you're working in a local development environment, consider using tools like [ngrok](https://ngrok.com/) to expose your local server to the internet. Additionally, we have a [Tutorial: Webhooks Essentials](/docs/tutorials/webhooks-essentials) tutorial that guides you through setting up a server to receive these webhooks.

6. **Review and Confirm**: Before finalizing the synchronization process, DarchLabs will provide a summary of the information you've entered. Review it to ensure everything is correct, then proceed to confirm.

### 3. Monitor Your Synchronized Data

Once the synchronizer is set up, navigate to the "Synchronizers" view to monitor the events from your smart contract. Additionally, you can head to the "Overview" section to see metrics associated with your synchronized smart contract.

<div style={{ display: "flex", justifyContent: "center" }}>
  <img width={"80%"} src={SyncData} />
</div>

## Conclusion

Congratulations! You've successfully set up a synchronizer with DarchLabs. This tool will now keep track of all the events emitted by your smart contract, making it easier to integrate and monitor your decentralized application.

Stay tuned for our next tutorial, where we'll guide you through setting up a webhook server to listen to events emitted by your smart contract in real-time.

---
