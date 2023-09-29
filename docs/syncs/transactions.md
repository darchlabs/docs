---
sidebar_position: 2
id: transactions
title: Transactions
sidebar_label: Transactions
description: "Transactions are the backbone of any blockchain, representing the actions taken on the network. With DarchLabs, you can easily fetch and monitor transactions related to specific smart contracts. Whether you're interested in successful transactions or those that have failed, our system provides a comprehensive view."
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## `Actions`

### List Transactions by Address

Retrieve a list of transactions associated with a specific smart contract address. This endpoint provides a detailed view of all transactions related to the contract, ensuring you have all the data you need.

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

const { transactions } = await synchronizers.transactions.listTransactions(
  "0x1234abcd..."
);

console.log("List of transactions", transactions);
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

const { transactions, pagination } =
  await synchronizers.transactions.listTransactions("0x1234abcd...", options);

console.log("List of transactions", transactions, pagination);
```

</TabItem>

<TabItem value="ts">

#### Basic

```ts
import Darchlabs from "darchlabs";
const { synchronizers } = new Darchlabs("<YOUR_API_KEY>");

const { transactions } = await synchronizers.transactions.listTransactions(
  "0x1234abcd..."
);

console.log("List of transactions", transactions);
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

const { transactions, pagination } =
  await synchronizers.transactions.listTransactions("0x1234abcd...", options);

console.log("List of transactions", transactions, pagination);
```

</TabItem>

</Tabs>

#### Params

The primary identifier for the smart contract is its `address`. Alongside this, you can provide the options using the `Pagination` type. Familiarize yourself with its structure and requirements by checking out its [detailed definition here](/docs/syncs/contracts#pagination).

</TabItem>

<TabItem value="curl">

#### Basic

```bash
curl https://synchronizers.darchlabs.com/api/v1/transactions/{address} \
  --header 'Content-Type: application/json' \
  --header 'Authentication: Bearer <YOUR_API_KEY>'
```

#### With Pagination

```bash
curl https://synchronizers.darchlabs.com/api/v1/transactions/{address}?limit=10&page=1&sort=DESC \
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

| Name        | Type   | Info                                                                       |
| ----------- | ------ | -------------------------------------------------------------------------- |
| **address** | string | Address of the smart contract for which you want to retrieve transactions. |

</TabItem>
</Tabs>

#### Response

```js
{
  transactions: [{
    id: string;
    contract_id: string;
    hash: string;
    chain_id: string;
    block_number: string;
    from: string;
    from_balance: string;
    from_is_whale: string;
    value: string;
    contract_balance: string;
    gas: string;
    gas_price: string;
    gas_used: string;
    cumulative_gas_used: string;
    confirmations: string;
    is_error: string;
    tx_receipt_status: string;
    function_name: string;
    timestamp: string;
    created_at: string;
    updated_at: string;
  },
  // ... more transactions
  ],
  pagination: {
    limit: number;
    page: number;
    sort: "DESC" | "ASC";
    totalElements: number;
    totalPages: number;
  }
}
```

### List Failed Transactions by Address

Retrieve a list of failed transactions associated with a specific smart contract address. This endpoint provides insights into transactions that didn't go through, helping you diagnose and understand potential issues.

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

const { transactions } =
  await synchronizers.transactions.listTransactionsFailed("0x1234abcd...");

console.log("List of failed transactions", transactions);
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

const { transactions, pagination } =
  await synchronizers.transactions.listTransactionsFailed(
    "0x1234abcd...",
    options
  );

console.log("List of failed transactions", transactions, pagination);
```

</TabItem>

<TabItem value="ts">

#### Basic

```ts
import Darchlabs from "darchlabs";
const { synchronizers } = new Darchlabs("<YOUR_API_KEY>");

const { transactions } =
  await synchronizers.transactions.listTransactionsFailed("0x1234abcd...");

console.log("List of failed transactions", transactions);
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

const { transactions, pagination } =
  await synchronizers.transactions.listTransactionsFailed(
    "0x1234abcd...",
    options
  );

console.log("List of failed transactions", transactions, pagination);
```

</TabItem>
</Tabs>

#### Params

The primary identifier for the smart contract is its `address`. Alongside this, you can provide the options using the `Pagination` type. Familiarize yourself with its structure and requirements by checking out its [detailed definition here](/docs/syncs/contracts#pagination).

</TabItem>

<TabItem value="curl">

#### Basic

```bash
curl https://synchronizers.darchlabs.com/api/v1/transactions/failed/{address} \
  --header 'Content-Type: application/json' \
  --header 'Authentication: Bearer <YOUR_API_KEY>'
```

#### With Pagination

```bash
curl https://synchronizers.darchlabs.com/api/v1/transactions/failed/{address}?limit=10&page=1&sort=DESC \
  --header 'Content-Type: application/json' \
  --header 'Authentication: Bearer <YOUR_API_KEY>'
```

#### Headers

| Name              | Value              | Info                                      |
| ----------------- | ------------------ | ----------------------------------------- |
| **Content-Type**  | `application/json` | Specifies the format of the request body. |
| **Authorization** | `Bearer <TOKEN>`   | Token for accessing the API. If you       |

don't have one, see [here](/docs/quick-start). |

#### Query Params

| Name      | Type   | Default | Info                                             |
| --------- | ------ | ------- | ------------------------------------------------ |
| **limit** | number | 10      | Optional: Number of contracts per page.          |
| **page**  | number | 1       | Optional: Page number to retrieve.               |
| **sort**  | string | "DESC"  | Optional: Sorting order. Can be "ASC" or "DESC". |

#### Path Params

| Name        | Type   | Info                                                                              |
| ----------- | ------ | --------------------------------------------------------------------------------- |
| **address** | string | Address of the smart contract for which you want to retrieve failed transactions. |

</TabItem>
</Tabs>

#### Response

```js
{
  transactions: [{
    id: string;
    contract_id: string;
    hash: string;
    chain_id: string;
    block_number: string;
    from: string;
    from_balance: string;
    from_is_whale: string;
    value: string;
    contract_balance: string;
    gas: string;
    gas_price: string;
    gas_used: string;
    cumulative_gas_used: string;
    confirmations: string;
    is_error: string;
    tx_receipt_status: string;
    function_name: string;
    timestamp: string;
    created_at: string;
    updated_at: string;
  },
  // ... more failed transactions
  ],
  pagination: {
    limit: number;
    page: number;
    sort: "DESC" | "ASC";
    totalElements: number;
    totalPages: number;
  }
}
```

## `Interfaces`

### Transaction

This type represents the main structure of a transaction in the system.

```ts
type Transaction = {
  id: string;
  contract_id: string;
  hash: string;
  chain_id: string;
  block_number: string;
  from: string;
  from_balance: string;
  from_is_whale: string;
  value: string;
  contract_balance: string;
  gas: string;
  gas_price: string;
  gas_used: string;
  cumulative_gas_used: string;
  confirmations: string;
  is_error: string;
  tx_receipt_status: string;
  function_name: string;
  timestamp: string;
  created_at: string;
  updated_at: string;
};
```

- `id`: Unique identifier for the transaction.
- `contract_id`: Identifier for the associated smart contract.
- `hash`: The transaction hash.
- `chain_id`: The ID of the blockchain network.
- `block_number`: The block number in which the transaction was included.
- `from`: Address that initiated the transaction.
- `from_balance`: Balance of the `from` address at the time of the transaction.
- `from_is_whale`: Indicates if the `from` address is considered a "whale" (large holder).
- `value`: Amount of cryptocurrency sent in the transaction.
- `contract_balance`: Balance of the contract at the time of the transaction.
- `gas`: Gas limit set for the transaction.
- `gas_price`: Price of gas in wei.
- `gas_used`: Amount of gas used by the transaction.
- `cumulative_gas_used`: Cumulative gas used in the block up to and including the transaction.
- `confirmations`: Number of confirmations received for the transaction.
- `is_error`: Indicates if the transaction resulted in an error.
- `tx_receipt_status`: Status of the transaction receipt (e.g., success or fail).
- `function_name`: Name of the function called in the transaction (if applicable).
- `timestamp`: Timestamp of when the transaction occurred.
- `created_at`: Timestamp of when the transaction was first recorded in the system.
- `updated_at`: Timestamp of the last update to the transaction record.

#### Example

Here's an example of a `Transaction` in JSON format:

```json
{
  "id": "tx123",
  "contract_id": "contract123",
  "hash": "0xabcdef123456...",
  "chain_id": "1",
  "block_number": "1200000",
  "from": "0x1234abcd...",
  "from_balance": "1000000000000000000",
  "from_is_whale": "false",
  "value": "1000000000000000000",
  "contract_balance": "5000000000000000000",
  "gas": "21000",
  "gas_price": "1000000000",
  "gas_used": "20000",
  "cumulative_gas_used": "500000",
  "confirmations": "10",
  "is_error": "false",
  "tx_receipt_status": "1",
  "function_name": "transfer",
  "timestamp": "2023-09-22T00:00:00Z",
  "created_at": "2023-09-22T00:00:00Z",
  "updated_at": "2023-09-22T00:05:00Z"
}
```

---
