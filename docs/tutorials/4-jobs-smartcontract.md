---
sidebar_position: 3
sidebar_label: 4. Contract Automation
title: Automating Smart Contract Interactions using Jobs
---

import JobsImage1 from '@site/static/img/tutorials/contract-automation/jobs-loop.gif';
import JobsImage2 from '@site/static/img/tutorials/contract-automation/jobs-2-loop.gif';

## Introduction

In this tutorial, we'll explore how to automate smart contract interactions using the Jobs feature in DarchLabs. By setting up a job, you can schedule method calls on your smart contract at regular intervals, making it easier to automate repetitive tasks or maintain the state of your decentralized application.

## Prerequisites

- An active account on DarchLabs.
- A deployed smart contract. If you haven't deployed one yet, follow our [First Contract Deployment](/docs/tutorials/first-smartcontract) tutorial.

## Step-by-step Guide

### 1. Navigate to the Jobs Section

Start by logging into your DarchLabs account. Once logged in, head over to the "Jobs" section.

### 2. Configure new Job

1. **Selecting the Provider**: Navigate to the "Jobs" section in DarchLabs and begin by selecting the provider. For this tutorial, choose **DarchLabs** as the provider.

2. **Choosing the Network**: Select the blockchain network where your smart contract is deployed. This ensures that the job interacts with the correct network.

3. **Naming Your Job**: Provide a unique and descriptive name for your job. This helps in identifying and managing multiple jobs if you have more than one.

4. **Specifying the ABI**: If your smart contract isn't already deployed or verified on DarchLabs, you'll need to provide its ABI (Application Binary Interface). This ABI allows DarchLabs to understand and interact with your contract.

5. **Selecting Check and Action Methods**:

- **Check Method**: Choose a method from your ABI that returns a boolean. This method will determine if the action method needs to be executed.
- **Action Method**: Select the method that performs the desired action on your contract. Remember, this method will change the state of the contract and will consume gas.

6. **Setting the Cronjob**: Define the frequency at which the job should run by setting up a cron schedule. If you're unfamiliar with cron syntax, consider using [crontab.guru](https://crontab.guru/) for assistance.

7. **Review and Confirm**: Before finalizing the job setup, DarchLabs will provide a summary of the information you've entered. Review it to ensure everything is correct, then proceed to confirm.

<div style={{ display: "flex", justifyContent: "center" }}>
  <img width={"80%"} src={JobsImage1} />
</div>

### 3. **Monitoring Your Job and Verifying its Execution**

Once your job is created, it will appear in the "Jobs" section. Here, you can monitor its status, pause, resume, or delete it as needed.

To further verify the job's execution, you can navigate to the blockchain explorer specific to the network where your smart contract is deployed. By searching for your smart contract using its address, you can check the "Transactions" tab to see the method calls made by the job. Additionally, if the method triggered by the job emits an event, you can view this in the "Events" tab. This provides a transparent way to ensure that your job is correctly interacting with the smart contract.

<div style={{ display: "flex", justifyContent: "center" }}>
  <img width={"80%"} src={JobsImage2} />
</div>

## Conclusion

Congratulations! You've successfully set up a job to automate smart contract interactions with DarchLabs. This feature empowers you to maintain and automate your decentralized applications more efficiently.

Stay tuned for our next tutorial, where we'll dive deeper into the world of event-driven automation. We'll guide you through setting up a webhook server that not only listens to real-time events from your smart contract but also triggers specific methods on another deployed smart contract upon receiving a webhook. Harness the power of interconnected smart contracts with DarchLabs!

---
