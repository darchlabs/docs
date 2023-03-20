---
sidebar_position: 2
---

# Client

- [Client](#client)
  - [Introduction](#introduction)
  - [How to use](#how-to-use)
    - [Setup](#setup)
    - [Create Synchronizer](#create-synchronizer)
    - [Get Event](#get-event)
    - [Get Events By Address](#get-events-by-address)
    - [Get Data From Event](#get-data-from-event)

<div class="toc"></div>

## Introduction

Synchronizer is the Darchlabs module in charge of getting the data from the events of a given contract. With this tool, you can access the logs and do whatever you need, for example inserting the historical data of an event into a database.

In this client tutorial, we will be using the [sync-template](https://github.com/darchlabs/template-sync/blob/main/index.ts) template file.

## How to use

### Setup

Initialize a typescript repo using _npm:_

```jsx
npm init -y
```

Install the **_synchronizer_, _ethers_** (for getting a contract instance) and **_dotenv_** (for using values from the `.env` file) libraries from _npm_:

```jsx
npm install -i synchronizer-v2 dotenv ethers
```

Now we are going to create the 2 files that we will use `.env` and `index.ts`:

```
touch .env index.ts
```

Once you have setup your **Darchlabs** instance, you will need to get your _APP DNS (Domain Name SERVER)._ You can get it from the URL of your browser:

![URL DNS](../../static/img/overview.png)

Where _[ec2-78-925-65-19.compute-1.amazonaws.com](http://ec2-78-925-65-19.compute-1.amazonaws.com/)_ would be the APP DNS in this example.

Now that you have the DNS, you will need a node provider URL. You can get a key from the nodes module, or you could get some from your custom node provider.

With that obtained, let’s update the variables in your `.env` file:

```
APP_DNS=[ec2-78-925-65-19.compute-1.amazonaws.com](http://ec2-78-925-65-19.compute-1.amazonaws.com/)
NODE_URL=[ec2-78-925-65-19.compute-1.amazonaws.com](http://ec2-78-925-65-19.compute-1.amazonaws.com/)/nodes/jsonrpc/23e3ba45-39a0-415a-906e-a94307294019
```

Now that we setup the `.env` file, let’s create a file for getting the ABI of a smart contract (will be useful for creating a synchronizer)

```tsx
touch abi.ts
```

Copy the following code corresponding to the ABI, inside the `abi.ts` file:

<details>
<summary>ABI</summary>

```tsx
// abi.ts

export const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "poolId",
        type: "uint256",
      },
    ],
    name: "Delete",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "poolId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint24",
        name: "poolFee",
        type: "uint24",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "poolId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint24",
        name: "poolFee",
        type: "uint24",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "DEADLINE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "poolFee",
        type: "uint24",
      },
    ],
    name: "addPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "poolId",
        type: "uint256",
      },
    ],
    name: "collectAllFees",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "poolId",
        type: "uint256",
      },
      {
        internalType: "uint128",
        name: "percentageAmm",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "maxSlip",
        type: "uint256",
      },
    ],
    name: "decreasePosition",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "deposits",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "initialized",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "poolId",
        type: "uint256",
      },
    ],
    name: "getOwnerInfo",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint128",
            name: "liquidity",
            type: "uint128",
          },
          {
            internalType: "uint256",
            name: "amount0",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount1",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "initialized",
            type: "bool",
          },
        ],
        internalType: "struct SupplyUni.OwnerDeposit",
        name: "deposit",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "poolId",
        type: "uint256",
      },
    ],
    name: "getPool",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token0",
            type: "address",
          },
          {
            internalType: "address",
            name: "token1",
            type: "address",
          },
          {
            internalType: "uint24",
            name: "poolFee",
            type: "uint24",
          },
          {
            internalType: "bool",
            name: "isActive",
            type: "bool",
          },
        ],
        internalType: "struct SupplyUni.Pool",
        name: "pool",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "poolId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountAdd0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountAdd1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxSlip",
        type: "uint256",
      },
    ],
    name: "increasePosition",
    outputs: [
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "poolId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amm0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amm1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxSlip",
        type: "uint256",
      },
    ],
    name: "mintNewPosition",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nonfungiblePositionManager",
    outputs: [
      {
        internalType: "contract INonfungiblePositionManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "pools",
    outputs: [
      {
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "poolFee",
        type: "uint24",
      },
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "poolId",
        type: "uint256",
      },
    ],
    name: "retrieveNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
```

</details>

We will import the libraries and the ABI in addition to get the env values:

```tsx
// index.ts

import synchronizer from "synchronizer-v2";
import { ethers } from "ethers";
import dotenv from "dotenv";
import { abi } from "./supply-uni-abi";

dotenv.config();

const { APP_DNS, NODE_URL } = process.env;

(async () => {
	if (!APP_DNS || APP_DNS == "") {
    throw new Error("the dns of your server is required");
  }

  if (!NODE_URL || NODE_URL == "") {
    throw new Error("the node provider url is required");
  }

  console.log(APP_DNS);
  console.log(NODE_URL);
}
```

You should see the same _APP_DNS_ and _NODE_URL_ values that you set inside the `.env` file as the output.

Finally, we will instance a new _**synchronizer**_, a node provider, define the contract address, the event name and the network where the contract is deployed in order to finish the setup.

```tsx
// New Synchronizer instance
const sync = new synchronizer(APP_DNS);

// Get the node provider
const provider = new ethers.JsonRpcProvider(NODE_URL);

// Address and event name from one of the configured events
const address = "0xC9Fc250Ab92a802fCc96719eBE17c9c831aDF264";
const eventName = "Deposit";

// Event insertion
const network = "polygon";
```

### Create Synchronizer

This method is for creating a **_synchronizer_**. A **_synchronizer_** will get the logs of a given contract event, and will return it.

Notice that you need to insert and instance of BaseContract from the ethers library as argument for contract.

```tsx
// Get an ethers instance of the contract
const parsedAbi = JSON.stringify(abi);
const contract = new ethers.BaseContract(address, parsedAbi, provider);

// Interact with the api for inseting an event
const insertEventRes = await sync.InsertEvent(
  network,
  contract,
  eventName,
  NODE_URL
);
```

### Get Event

This method returns all the events that are being synced by the sinchronizer.

```tsx
// All events
const events = await sync.GetEvents();
console.log("All events: ", events);
```

### Get Events By Address

This method returns all the events of an address.

```tsx
// All events of a given address
const eventsByAddress = await sync.GetEventsByAddress(address);
console.log("eventsByAddress: ", eventsByAddress);
```

### Get Data From Event

This method returns all of the logs of an event.

```tsx
// Get the data from the events
const eventData = await sync.GetEventData(address, eventName);
console.log("depositEventData: ", eventData.data);
```
