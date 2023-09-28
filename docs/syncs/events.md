---
sidebar_position: 1
id: events
title: Events
sidebar_label: Events
description: "Events in smart contracts are crucial for tracking changes and updates. At DarchLabs, we provide tools to seamlessly integrate and monitor these events. This ensures that your applications can react in real-time to any changes on the blockchain. Whether it's a transaction, a state change, or any other significant activity, our system will keep you informed."
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## `Actions`

### List Events by Address

Retrieve a list of events associated with a specific smart contract address. This endpoint provides a comprehensive view of all events emitted by the contract, allowing for efficient monitoring and integration.

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

const { events } = await synchronizers.events.listEventsByAddress(
  "0x1234abcd..."
);

console.log("List of events", events);
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

const { events, pagination } = await synchronizers.events.listEventsByAddress(
  "0x1234abcd...",
  options
);

console.log("List of events", events, pagination);
```

</TabItem>

<TabItem value="ts">

#### Basic

```ts
import Darchlabs from "darchlabs";
const { synchronizers } = new Darchlabs("<YOUR_API_KEY>");

const { events } = await synchronizers.events.listEventsByAddress(
  "0x1234abcd..."
);

console.log("List of events", events);
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

const { events, pagination } = await synchronizers.events.listEventsByAddress(
  "0x1234abcd...",
  options
);

console.log("List of events", events, pagination);
```

</TabItem>
</Tabs>

#### Params

The primary identifier for the smart contract is its `address`. Alongside this, you can provide the options using the `Pagination` type. Familiarize yourself with its structure and requirements by checking out its [detailed definition here](/docs/syncs/contracts#pagination).

</TabItem>

<TabItem value="curl">

#### Basic

```bash
curl https://synchronizers.darchlabs.com/api/v1/events/{address} \
  --header 'Content-Type: application/json' \
  --header 'Authentication: Bearer <YOUR_API_KEY>'
```

#### With Pagination

```bash
curl https://synchronizers.darchlabs.com/api/v1/events/{address}?limit=10&page=1&sort=DESC \
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

#### Path Params

| Name        | Type   | Info                                                                      |
| ----------- | ------ | ------------------------------------------------------------------------- |
| **address** | string | Address of the smart contract for which you want to retrieve information. |

</TabItem>
</Tabs>

#### Response

```js
{
  events: [{
    id: string;
    network: Network;
    address: string;
    latestBlockNumber: number;
    nodeURL: string;
    status: Status;
    error: string;
    abi: [/* ABI contract json */];
    createdAt: string;
    updatedAt: string;
  },
  // ... more events
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

For more information on the available **_networks_**, please refer [here](/docs/syncs/contracts#networks). To learn about possible **_statuses_**, see [here](/docs/syncs/contracts#statuses). You can customize the results using the **_Pagination_** type, [see here](/docs/syncs/contracts#pagination).

### List Event Data

Retrieve detailed data associated with a specific event from a smart contract. This endpoint provides insights into the specific data emitted by the event, allowing for deeper analysis and integration.

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

const { datas, event } = await synchronizers.events.listEventData(
  "0x1234abcd...",
  "EventName"
);

console.log("Event datas", datas, event);
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

const { datas, event, pagination } = await synchronizers.events.listEventData(
  "0x1234abcd...",
  "EventName",
  options
);

console.log("Event datas", datas, event, pagination);
```

</TabItem>

<TabItem value="ts">

In the case of `TypeScript`, the approach is slightly nuanced. The method in question accepts a generic type parameter `<T>`, allowing you to specify the `type` of the `data` contained within. By doing so, you can provide TypeScript with more context, enhancing your development experience.

For example, if you're familiar with the ABI and know that there's an event named `Transfer`, you might see something like this in the ABI:

```json
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": true,
      "name": "from",
      "type": "address"
    },
    {
      "indexed": true,
      "name": "to",
      "type": "address"
    },
    {
      "indexed": false,
      "name": "value",
      "type": "uint256"
    }
  ],
  "name": "Transfer",
  "type": "event"
}
```

Given the above ABI, you could define a type called `TransferEvent`, and then will implement it in your code. This approach ensures that you're leveraging TypeScript's type-checking capabilities to the fullest, robust, and type-safe.

#### Basic

```ts
import Darchlabs from "darchlabs";
const { synchronizers } = new Darchlabs("<YOUR_API_KEY>");

type TransferEvent = {
  from: string;
  to: string;
  value: string;
};

const { datas, event } =
  await synchronizers.events.listEventData<TransferEvent>(
    "0x1234abcd...",
    "EventName"
  );

console.log("Event datas", datas);
```

#### With Pagination

```ts
import Darchlabs, { Pagination } from "darchlabs";
const { synchronizers } = new Darchlabs("<YOUR_API_KEY>");

const option: Pagination = {
  limit: 10,
  page: 1,
  sort: "DESC",
};

type TransferEvent = {
  from: string;
  to: string;
  value: string;
};

const { datas, event, pagination } =
  await synchronizers.events.listEventData<TransferEvent>(
    "0x1234abcd...",
    "EventName",
    options
  );

console.log("Event datas", datas, event, pagination);
```

</TabItem>
</Tabs>

#### Params

The primary identifier for the smart contract is its `address`. If you're looking to fetch specific event data, you'll also need the `eventName`, which corresponds to the name of the event from which you want to obtain the data. Alongside these, you can provide additional options using the `Pagination` type. Familiarize yourself with its structure and requirements by checking out its [detailed definition here](/docs/syncs/contracts#pagination).

</TabItem>

<TabItem value="curl">

```bash
curl https://synchronizers.darchlabs.com/api/v1/events/{address}/{event_name}/data \
  --header 'Content-Type: application/json' \
  --header 'Authentication: Bearer <YOUR_API_KEY>'
```

#### Headers

| Name              | Value              | Info                                                                               |
| ----------------- | ------------------ | ---------------------------------------------------------------------------------- |
| **Content-Type**  | `application/json` | Specifies the format of the request body.                                          |
| **Authorization** | `Bearer <TOKEN>`   | Token for accessing the API. If you don't have one, see [here](/docs/quick-start). |

#### Path Params

| Name           | Type   | Info                                                                      |
| -------------- | ------ | ------------------------------------------------------------------------- |
| **address**    | string | Address of the smart contract for which you want to retrieve information. |
| **event_name** | string | The name of the event for which you want to obtain details.               |

</TabItem>
</Tabs>

#### Response

```js
{
  datas: [{
    id: string;
    eventId: string;
    tx: string;
    blockNumber: string;
    data: T;
    createdAt: string;
  },
  // ... more data entries
  ],
  event: {
    id: string;
    network: Network;
    address: string;
    latestBlockNumber: number;
    nodeURL: string;
    status: Status;
    error: string;
    abi: [/* ABI contract json */];
    createdAt: string;
    updatedAt: string;
  },
  pagination: {
    limit: number;
    page: number;
    sort: "DESC" | "ASC";
    totalElements: number;
    totalPages: number;
  }
]
```

For more information on the available **_networks_**, please refer [here](/docs/syncs/contracts#networks). To learn about possible **_statuses_**, see [here](/docs/syncs/contracts#statuses). You can customize the results using the **_Pagination_** type, [see here](/docs/syncs/contracts#pagination).

## `Interfaces`

### Status

This type represents the various statuses an event can have during its lifecycle.

```ts
type Status = "synching" | "running" | "stopped" | "error";
```

The following table explains each status:

| Status       | Description                                                    |
| ------------ | -------------------------------------------------------------- |
| **synching** | The event is synchronizing with the blockchain.                |
| **running**  | The event is active and emitting data.                         |
| **stopped**  | The event has been halted, either manually or due to an error. |
| **error**    | An error occurred, and the event has stopped emitting data.    |

### Event

This type represents the main structure of an event in the system.

```ts
type Event = {
  id: string;
  network: Network;
  address: string;
  latestBlockNumber: number;
  nodeURL: string;
  status: Status;
  error: string;
  abi: [/* ABI contract json */];
  createdAt: string;
  updatedAt: string;
};
```

#### Example

Here's an example of an `Event` in JSON format:

```json
{
  "id": "event123",
  "network": "ethereum",
  "address": "0x1234abcd...",
  "latestBlockNumber": 1200000,
  "nodeURL": "https://node.example.com",
  "status": "running",
  "error": "",
  "abi": {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  "createdAt": "2023-09-22T00:00:00Z",
  "updatedAt": "2023-09-22T00:00:00Z"
}
```

### EventData

This type represents the data emitted by an event.

```ts
type EventData<T> = {
  id: string;
  eventId: string;
  tx: string;
  blockNumber: string;
  data: T;
  createdAt: string;
};
```

#### Example

Here's an example of `EventData` in JSON format:

```json
{
  "id": "data123",
  "eventId": "event123",
  "tx": "0x5678efgh...",
  "blockNumber": "1200100",
  "data": {
    "from": "0xabcd1234...",
    "to": "0xefgh5678...",
    "value": "1000000000000000000"
  },
  "createdAt": "2023-09-22T00:05:00Z"
}
```

---
