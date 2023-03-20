---
sidebar_position: 3
---

# API

These docs describe the endpoints of nodes API.

---

- [API](#api)
  - [**Create Node**](#create-node)
    - [Request](#request)
    - [Response](#response)
  - [**Get Nodes**](#get-nodes)
    - [Response](#response-1)
  - [**DELETE Node**](#delete-node)
    - [Request](#request-1)
    - [Response](#response-2)
  - [**Get Nodes Metrics**](#get-nodes-metrics)
    - [Response](#response-3)

<div class="toc"></div>

---

## **Create Node**

`POST /api/v1/nodes`

This endpoint will creates a new **development** node given arbitraty supported blockchain.

### Request

```json
{
  "network": "ethereum", // can be either "ethereum", "polygon"
  "fromBlockNumber": 15569350 // since which block you want to fork mainnet
}
```

### Response

```json
{
	"id": "5c354f61-ebce-4be1-b851-7163837b90bf",
	"name": "sharing-mastermind",
	"chain": "ethereum",
	"port": xxxx,
	"status": "running",
	"createdAt": "2023-02-23T21:57:56.108034793Z"
}
```

---

## **Get Nodes**

`GET /api/v1/nodes/status`

This endpoint will fetch the entire nodes list

```json

```

### Response

```json
{
	"nodes": [
		{
			"id": "5c354f61-ebce-4be1-b851-7163837b90bf",
			"name": "sharing-mastermind",
			"chain": "ethereum",
			"port": xxxx,
			"status": "running",
			"createdAt": "2023-02-23T21:57:56.108034793Z"
		},{
			"id": "0s8334f61-ebce-4be1-b851-720337b390bz9",
			"name": "unstoppable-gladiator",
			"chain": "polygon",
			"port": xxxx,
			"status": "running",
			"createdAt": "2023-02-23T21:57:56.108034793Z"
		},
	]
}
```

---

## **DELETE Node**

`/api/v1/nodes`

This endpoint will delete a nove given a node_id.

### Request

```json
{
  "node_id": "d0e143c4-df31-49d1-83e6-52d50934c1ea"
}
```

### Response

```json
null
```

---

## **Get Nodes Metrics**

`GET /api/v1/nodes/metrics`

This endpoint will fetch the metrics of all nodes running

### Response

```json
{
	"Metrics": {
		"8832e088-7909-4a31-bcae-6039db63eed2": [
			{
				"method": "eth_getBalance",
				"count": 0
			},
			{
				"method": "eth_getTransactionByBlockHashAndIndex",
				"count": 0
			},
			{
				"method": "eth_getTransactionByBlockNumberAndIndex",
				"count": 0
			},
			{
				"method": "eth_subscribe",
				"count": 0
			},
			{
				"method": "eth_syncing",
				"count": 0
			},
			{
				"method": "eth_getBlockByHash",
				"count": 0
			},
			{
				"method": "eth_getTransactionCount",
				"count": 0
			},...
		], ...
	}
}
```

---
