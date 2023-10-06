---
sidebar_position: 4
sidebar_label: 5. Event-Driven Contract Triggers
title: Automating Smart Contracts using Event-Driven Techniques with DarchLabs
---

<!-- import EventDrivenTrigger from '@site/static/img/tutorials/event-driven-trigger/step-1-loop.gif'; -->

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Introduction

In this tutorial, we'll expand upon our previous exploration of webhooks to delve into event-driven smart contract automation using DarchLabs. By combining the power of webhooks with event-driven triggers, you can create a responsive system that automates actions in response to smart contract events.

## Prerequisites

- An active account on DarchLabs.
- A deployed smart contract. If you haven't deployed one yet, follow our [First Contract Deployment](/docs/tutorials/first-smartcontract) tutorial.
- A basic understanding of webhooks. If you're new to this, check out our [Webhooks Essentials](/docs/tutorials/webhooks-essentials) tutorial.

## Step-by-step Guide

### 1. Setting Up the Webhook Server

Begin by setting up a webhook server to listen for events, as we did in the [Webhooks Essentials](/docs/tutorials/webhooks-essentials) tutorial. For this example, we'll use the `ListenServer` implementation from the [DarchLabs Node.js library](https://www.npmjs.com/package/darchlabs). However, remember you can utilize any framework or tool you're familiar with, such as [Express](https://expressjs.com/) for Node.js, or even switch to a different programming language like Python or Golang.

<Tabs
groupId="language-setup"
defaultValue="js"
values={[
{ label: 'JavaScript', value: 'js', },
{ label: 'TypeScript', value: 'ts', },
]}>
<TabItem value="js">

```js
const { server } = require("darchlabs");

server.ListenServer(3000, "/api/v1/webhook", (wh) => {
  console.log(`received webhook with ID: ${wh.id}`);
});
```

</TabItem>
<TabItem value="ts">

```ts
import { server, type Webhook } from "darchlabs";

server.ListenServer(3000, "/api/v1/webhook", (wh: Webhook) => {
  console.log(`received webhook with ID: ${wh.id}`);
});
```

</TabItem>
</Tabs>

### 2. Integrating the Event-Driven Trigger

Now, within the webhook listener, we'll integrate the event-driven trigger. This trigger will respond to incoming webhooks by invoking a method on another smart contract.

<Tabs
groupId="language-integration"
defaultValue="js"
values={[
{ label: 'JavaScript', value: 'js', },
{ label: 'TypeScript', value: 'ts', },
]}>
<TabItem value="js">

```js
const { server } = require("darchlabs");
const dotenv = require("dotenv");

dotenv.config();

server.ListenServer(3000, "/api/v1/webhook", async (wh) => {
  console.log(`received webhook with ID: ${wh.id}`);

  // do anything with the webhook ...

  // trigger the method on the smart contract in response to the webhook
  const tx = await server.TriggerEVMMethod({
    network: "mumbai",
    nodeUrl: process.env.NODE_URL!,
    abi: [/* ABI contract json */],
    address: "0x1234abcd...", // replace with your contract address
    privateKey: process.env.PRIVATE_KEY!,
    methodName: "increment",
  });

  console.log(`transaction successful with hash: ${tx.hash}`);
});
```

</TabItem>
<TabItem value="ts">

```ts
import { server, type Webhook } from "darchlabs";
import dotenv from "dotenv";

dotenv.config();

server.ListenServer(3000, "/api/v1/webhook", async (wh: Webhook) => {
  console.log(`received webhook with ID: ${wh.id}`);

  // do anything with the webhook ...

  // trigger the method on the smart contract in response to the webhook
  const tx = await server.TriggerEVMMethod({
    network: "mumbai",
    nodeUrl: process.env.NODE_URL!,
    abi: [
      /* contract ABI here */
    ],
    address: "0x1234abcd...", // replace with your contract address
    privateKey: process.env.PRIVATE_KEY!,
    methodName: "increment",
  });

  console.log(`transaction successful with hash: ${tx.hash}`);
});
```

</TabItem>
</Tabs>

:::info

The `server.TriggerEVMMethod` method is implement ed using the [ethers.js library](https://docs.ethers.io/v5/). You can view its implementation [here](https://github.com/darchlabs/client-nodejs/blob/main/src/server/evm-trigger-method.ts). The `increment` method is from our demo Solidity contract, which can be found [here](https://github.com/darchlabs/demo-integration-starter-kit/blob/main/demo-storage-contract/storage.sol).

:::

### 3. Responding to Events and Verifying Triggers

With the event-driven trigger integrated into the webhook server, your application can now automatically respond to events. For instance, if one smart contract emits an `Increment` event, your webhook server can catch this event and trigger another contract's method in response.

To verify that the webhook trigger is functioning correctly, especially if the triggered method emits an event, you can:

1. Navigate to the blockchain explorer specific to the network where your smart contract is deployed.
2. Search for your smart contract using its address.
3. Go to the "Events" section of the contract's page.

Here, you should see that every time a webhook is received, the `increment` method is triggered, subsequently emitting an event. This provides a clear and transparent way to ensure that your event-driven triggers are working as intended.

<!-- <div style={{ display: "flex", justifyContent: "center" }}>
  <img width={"80%"} src={EventDrivenTrigger} />
</div> -->

## Conclusion

Congratulations! You've successfully integrated event-driven smart contract automation into your webhook server with DarchLabs. This layered approach allows your decentralized applications to be more dynamic and responsive, reacting automatically to events in the blockchain ecosystem.

---
