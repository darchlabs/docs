---
sidebar_position: 0
id: contracts
title: Contracts
sidebar_label: Contracts
description: "Smart contracts are autonomous programs on the blockchain that execute when predefined conditions are met. At DarchLabs, these contracts are foundational. They enable real-time synchronization of events, setting up of webhooks for instant notifications, and extraction of valuable metrics. They form the bedrock upon which many of our services are built, facilitating dynamic interaction and monitoring within the blockchain ecosystem."
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## `Actions`

### Create contract

Add a new smart contract to your synchronized list. This endpoint facilitates the integration of new contracts into the DarchLabs ecosystem, ensuring seamless monitoring and interaction right from the moment of creation.

<Tabs
groupId="language"
defaultValue="nodejs"
values={[
{ label: 'Node.js', value: 'nodejs', },
{ label: 'cURL', value: 'curl', }
]}>
<TabItem value="nodejs">

:::info
Before proceeding, ensure you have the [DarchLabs library](https://www.npmjs.com/package/darchlabs) properly installed. Refer to the [Quick Start](/docs/quick-start) section for more details. Also, make sure you have a valid API key.
:::

<Tabs
groupId="language-example"
defaultValue="js"
values={[
{ label: 'JavaScript', value: 'js', },
{ label: 'TypeScript', value: 'ts', },
]}>
<TabItem value="js">

```js
const Darchlabs = require("darchlabs");
const { synchronizers } = new Darchlabs("<YOUR_API_KEY>");

const created = await synchronizers.contracts.createContract({
  name: "MyContract",
  network: "ethereum",
  address: "0x1234abcd...",
   abi: [/* ABI contract json */];
});

console.log("created contract", created);

```

</TabItem>

<TabItem value="ts">

```ts
import Darchlabs from "darchlabs";
const { synchronizers } = new Darchlabs("<YOUR_API_KEY>");

const created = await synchronizers.contracts.createContract({
  name: "MyContract",
  network: "ethereum",
  address: "0x1234abcd...",
   abi: [/* ABI contract json */];
});

console.log("created contract", created);
```

</TabItem>
</Tabs>

#### Params

This data is represented by the `ContractInput` type. Familiarize yourself with its structure and requirements by checking out its [detailed definition here](/docs/syncs/contracts#contractinput).

</TabItem>

<TabItem value="curl">

```bash
curl https://synchronizers.darchlabs.com/api/v1/smartcontracts \
  --header 'Content-Type: application/json' \
  --header 'Authentication: Bearer <YOUR_API_KEY>' \
  --data '{
      "smartcontract": {
          "name": "MyContract",
          "network": "ethereum",
          "address": "0x1234abcd...",
          "abi": [/* abi contract */]
      }
  }'
```

#### Headers

| Name              | Value              | Info                                                                               |
| ----------------- | ------------------ | ---------------------------------------------------------------------------------- |
| **Content-Type**  | `application/json` | Specifies the format of the request body.                                          |
| **Authorization** | `Bearer <TOKEN>`   | Token for accessing the API. If you don't have one, see [here](/docs/quick-start). |

#### Request

| Name        | Type    | Info                                                          |
| ----------- | ------- | ------------------------------------------------------------- |
| **name**    | string  |                                                               |
| **network** | Network | _see the available networks list._                            |
| **address** | string  | _make sure the contract is properly deployed on the network._ |
| **webhook** | string  | _check the guide to set up your webhooks server._             |
| **abi**     | string  |                                                               |

</TabItem>
</Tabs>

#### Response

```js
{
  id: string;
  name: string;
  network: Network;
  status: Status;
  lastTxBlockSynced: number;
  error?: string;
  nodeURL: string;
  address: string;
  webhook?: string;
  events: Event[];
  createdAt: string;
  updatedAt: string;
}
```

For more information on the available **_networks_**, please refer [here](/docs/syncs/contracts#networks). To learn about possible **_statuses_**, see [here](/docs/syncs/contracts#statuses).

### List Contracts

Retrieve a list of smart contracts you've synchronized with the DarchLabs ecosystem. This endpoint provides a comprehensive view of all your contracts, allowing for efficient management and monitoring.

<Tabs
groupId="language"
defaultValue="nodejs"
values={[
{ label: 'Node.js', value: 'nodejs', },
{ label: 'cURL', value: 'curl', }
]}>
<TabItem value="nodejs">

:::info
Before proceeding, ensure you have the [DarchLabs library](https://www.npmjs.com/package/darchlabs) properly installed. Refer to the [Quick Start](/docs/quick-start) section for more details. Also, make sure you have a valid API key.
:::

<Tabs
groupId="language-example"
defaultValue="js"
values={[
{ label: 'JavaScript', value: 'js', },
{ label: 'TypeScript', value: 'ts', },
]}>
<TabItem value="js">

#### Basic

```js
const Darchlabs = require("darchlabs");
const { synchronizers } = new Darchlabs("<YOUR_API_KEY>");

const { contracts } = await synchronizers.contracts.listContracts();

console.log("List of contracts", contracts);
```

#### With Pagination

```js
const Darchlabs = require("darchlabs");
const { synchronizers } = new Darchlabs("<YOUR_API_KEY>");

const options = {
  limit: 10,
  page: 1,
  sort: "DESC",
};

const { contracts } = await synchronizers.contracts.listContracts(options);

console.log("List of contracts", contracts);
```

</TabItem>

<TabItem value="ts">

#### Basic

```ts
import Darchlabs from "darchlabs";
const { synchronizers } = new Darchlabs("<YOUR_API_KEY>");

const { contracts } = await synchronizers.contracts.listContracts();

console.log("List of contracts", contracts);
```

#### With Pagination

```ts
import Darchlabs, { Pagination } from "darchlabs";
const { synchronizers } = new Darchlabs("<YOUR_API_KEY>");

const options: Pagination = {
  limit: 10,
  page: 1,
  sort: "DESC",
};

const { contracts } = await synchronizers.contracts.listContracts(options);

console.log("List of contracts", contracts);
```

</TabItem>
</Tabs>

#### Params

You can customize the options using the `Pagination` type. Familiarize yourself with its structure and requirements by checking out its [detailed definition here](/docs/syncs/contracts#pagination).

</TabItem>

<TabItem value="curl">

#### Basic

```bash
curl https://synchronizers.darchlabs.com/api/v1/smartcontracts \
  --header 'Content-Type: application/json' \
  --header 'Authentication: Bearer <YOUR_API_KEY>'
```

#### With Pagination

```bash
curl https://synchronizers.darchlabs.com/api/v1/smartcontracts?limit=10&page=1&sort=DESC \
  --header 'Content-Type: application/json' \
  --header 'Authentication: Bearer <YOUR_API_KEY>'
```

#### Headers

| Name              | Value              | Info                                                                               |
| ----------------- | ------------------ | ---------------------------------------------------------------------------------- |
| **Content-Type**  | `application/json` | Specifies the format of the request body.                                          |
| **Authorization** | `Bearer <TOKEN>`   | Token for accessing the API. If you don't have one, see [here](/docs/quick-start). |

#### Query Params

| Name      | Type   | Default | Info                                             |
| --------- | ------ | ------- | ------------------------------------------------ |
| **limit** | number | 10      | Optional: Number of contracts per page.          |
| **page**  | number | 1       | Optional: Page number to retrieve.               |
| **sort**  | string | "DESC"  | Optional: Sorting order. Can be "ASC" or "DESC". |

</TabItem>
</Tabs>

#### Response

```js
{
  contracts: [{
    id: string;
    name: string;
    network: Network;
    status: Status;
    lastTxBlockSynced: number;
    error?: string;
    nodeURL: string;
    address: string;
    webhook?: string;
    events: Event[];
    createdAt: string;
    updatedAt: string;
  },
  // ... more contracts
  ],
  pagination: {
    limit: number;
    page: number;
    sort: "DESC" | "ASC";
    totalElements: number;
    totalPages: number;
  }
]
```

For more information on the available **_networks_**, please refer [here](/docs/syncs/contracts#networks). To learn about possible **_statuses_**, see [here](/docs/syncs/contracts#statuses).

### Update Contract

Modify the details of an existing smart contract in your synchronized list. This endpoint allows you to update specific attributes of a smart contract, ensuring that your records are always up-to-date within the DarchLabs ecosystem.

<Tabs
groupId="language"
defaultValue="nodejs"
values={[
{ label: 'Node.js', value: 'nodejs', },
{ label: 'cURL', value: 'curl', }
]}>
<TabItem value="nodejs">

:::info
Before proceeding, ensure you have the [DarchLabs library](https://www.npmjs.com/package/darchlabs) properly installed. Refer to the [Quick Start](/docs/quick-start) section for more details. Also, make sure you have a valid API key.
:::

<Tabs
groupId="language-example"
defaultValue="js"
values={[
{ label: 'JavaScript', value: 'js', },
{ label: 'TypeScript', value: 'ts', },
]}>
<TabItem value="js">

```js
const Darchlabs = require("darchlabs");
const { synchronizers } = new Darchlabs("<YOUR_API_KEY>");

await synchronizers.contracts.updateContract("0x1234abcd...", {
  name: "UpdatedContractName",
});

console.log("Contract updated successfully");
```

</TabItem>

<TabItem value="ts">

```ts
import Darchlabs from "darchlabs";
const { synchronizers } = new Darchlabs("<YOUR_API_KEY>");

await synchronizers.contracts.updateContract("0x1234abcd...", {
  name: "UpdatedContractName",
});

console.log("Contract updated successfully");
```

</TabItem>
</Tabs>

#### Params

The primary identifier for the smart contract is its `address`. Alongside this, you can provide the new `name` for the smart contract.

</TabItem>

<TabItem value="curl">

```bash
curl -X PATCH https://synchronizers.darchlabs.com/api/v1/smartcontracts/{address} \
  --header 'Content-Type: application/json' \
  --header 'Authentication: Bearer <YOUR_API_KEY>' \
  --data '{
      "smartcontract": {
          "name": "UpdatedContractName"
      }
  }'
```

#### Headers

| Name              | Value              | Info                                                                               |
| ----------------- | ------------------ | ---------------------------------------------------------------------------------- |
| **Content-Type**  | `application/json` | Specifies the format of the request body.                                          |
| **Authorization** | `Bearer <TOKEN>`   | Token for accessing the API. If you don't have one, see [here](/docs/quick-start). |

#### Path Params

| Name        | Type   | Info                                              |
| ----------- | ------ | ------------------------------------------------- |
| **address** | string | Address of the smart contract you wish to update. |

#### Request

| Name     | Type   | Info                                                   |
| -------- | ------ | ------------------------------------------------------ |
| **name** | string | The new name you want to assign to the smart contract. |

#### Response

Upon successful update, the server will return a status code of `200 OK` with an empty body `{}`.

</TabItem>
</Tabs>

### Delete Contract

Remove an existing smart contract from your synchronized list. This endpoint allows you to delete a smart contract from the DarchLabs ecosystem, ensuring that you maintain a clean and relevant list of contracts.

<Tabs
groupId="language"
defaultValue="nodejs"
values={[
{ label: 'Node.js', value: 'nodejs', },
{ label: 'cURL', value: 'curl', }
]}>
<TabItem value="nodejs">

:::info
Before proceeding, ensure you have the [DarchLabs library](https://www.npmjs.com/package/darchlabs) properly installed. Refer to the [Quick Start](/docs/quick-start) section for more details. Also, make sure you have a valid API key.
:::

<Tabs
groupId="language-example"
defaultValue="js"
values={[
{ label: 'JavaScript', value: 'js', },
{ label: 'TypeScript', value: 'ts', },
]}>

<TabItem value="js">

```js
import Darchlabs from "darchlabs";
const { synchronizers } = new Darchlabs("<YOUR_API_KEY>");

await synchronizers.contracts.deleteContractByAddress("0x1234abcd...");

console.log("Contract deleted successfully.");
```

</TabItem>

<TabItem value="ts">

```ts
import Darchlabs from "darchlabs";
const { synchronizers } = new Darchlabs("<YOUR_API_KEY>");

await synchronizers.contracts.deleteContractByAddress("0x1234abcd...");

console.log("Contract deleted successfully.");
```

</TabItem>

</Tabs>

#### Params

The primary identifier for the smart contract you wish to delete is its `address`.

</TabItem>

<TabItem value="curl">

```bash
curl -X DELETE https://synchronizers.darchlabs.com/api/v1/smartcontracts/{address} \
  --header 'Content-Type: application/json' \
  --header 'Authentication: Bearer <YOUR_API_KEY>'
```

#### Headers

| Name              | Value              | Info                                                                               |
| ----------------- | ------------------ | ---------------------------------------------------------------------------------- |
| **Content-Type**  | `application/json` | Specifies the format of the request body.                                          |
| **Authorization** | `Bearer <TOKEN>`   | Token for accessing the API. If you don't have one, see [here](/docs/quick-start). |

#### Path Params

| Name        | Type   | Info                                              |
| ----------- | ------ | ------------------------------------------------- |
| **address** | string | Address of the smart contract you wish to update. |

#### Response

Upon successful update, the server will return a status code of `200 OK` with an empty body `{}`.

</TabItem>
</Tabs>

## `Interfaces`

### Network

This type defines the blockchain networks that are supported by the Synchronizers API.

```ts
type Network = "ethereum" | "polygon" | "mumbai";
```

The following table lists the available networks:

| Network      | Description                                            | Explorer                       |
| ------------ | ------------------------------------------------------ | ------------------------------ |
| **ethereum** | Ethereum mainnet network.                              | https://etherscan.io           |
| **polygon**  | Polygon (previously Matic) mainnet network.            | https://polygonscan.com        |
| **mumbai**   | Mumbai testnet, which is Polygon's testnet equivalent. | https://mumbai.polygonscan.com |

### Status

This type represents the various statuses a smart contract can have during its lifecycle.

```ts
type Status =
  | "idle"
  | "running"
  | "synching"
  | "stopped"
  | "error"
  | "quota_exceeded";
```

The following table explains each status:

| Status             | Description                                                        |
| ------------------ | ------------------------------------------------------------------ |
| **idle**           | The contract is inactive and not performing any operations.        |
| **running**        | The contract is active and processing transactions.                |
| **synching**       | The contract is synchronizing with the blockchain.                 |
| **stopped**        | The contract has been halted, either manually or due to an error.  |
| **error**          | An error occurred, and the contract has stopped processing.        |
| **quota_exceeded** | The contract has reached its processing limit and needs attention. |

### Contract

This type represents the main structure of a smart contract in the system.

```ts
type Contract = {
  id: string;
  name: string;
  network: Network;
  status: Status;
  lastTxBlockSynced: number;
  error: string;
  address: string;
  webhook: string;
  events: Event[];
  createdAt: string;
  updatedAt: string;
};
```

For more information on the available **_networks_**, please refer [here](/docs/syncs/contracts#networks). To learn about possible **_statuses_**, see [here](/docs/syncs/contracts#statuses).

#### Example

Here's an example of a `Contract` in JSON format:

```json
{
  "id": "contract123",
  "name": "MyContract",
  "network": "ethereum",
  "status": "running",
  "lastTxBlockSynced": 1200000,
  "nodeURL": "https://node.example.com",
  "address": "0x1234abcd...",
  "webhook": "https://webhook.endpoint.com",
  "events": [],
  "createdAt": "2023-09-22T00:00:00Z",
  "updatedAt": "2023-09-22T00:00:00Z"
}
```

### ContractInput

This type represents the essential data required to create a new smart contract in the system.

```ts
type ContractInput = {
  name: string;
  network: Network;
  address: string;
  abi: [/* ABI contract json */];
};
```

- `name`: A descriptive name for the smart contract.
- `network`: The blockchain network where the smart contract resides. For more information on the available **_networks_**, please refer [here](/docs/syncs/contracts#networks).
- `address`: The blockchain address of the smart contract.
- `abi`: The Application Binary Interface (ABI) of the smart contract. If the contract is already validated within the system, this field is optional.

#### Example

Here's an example of a `ContractInput` in JSON format:

```json
{
  "name": "MyContract",
  "network": "ethereum",
  "address": "0x1234abcd...",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
    // ... other ABI entries ...
  ]
}
```

For more information on the available **_networks_**, please refer [here](/docs/syncs/contracts#networks).

This example showcases how to structure the input when creating a new smart contract. Ensure that the ABI is accurate and corresponds to the smart contract's actual functions and properties.

### Pagination

The `Pagination` type defines the structure of the response associated with paginated requests. Typically, this is used when querying actions that return a list of results.

```ts
export type Pagination = {
  limit: number;
  page: number;
  sort: "DESC" | "ASC";
  totalElements: number;
  totalPages: number;
};
```

Below is a detailed explanation of each attribute:

| Attribute         | Type   | Default | Description                                                                                           |
| ----------------- | ------ | ------- | ----------------------------------------------------------------------------------------------------- |
| **limit**         | number | 10      | Specifies the number of results per page.                                                             |
| **page**          | number | 1       | Indicates the page number to retrieve.                                                                |
| **sort**          | string | "DESC"  | Determines the sorting order of the results. Accepts either "ASC" (ascending) or "DESC" (descending). |
| **totalElements** | number | -       | Represents the total number of elements across all pages.                                             |
| **totalPages**    | number | -       | Indicates the total number of pages available based on the `limit` and `totalElements`.               |

---
