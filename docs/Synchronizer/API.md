---
sidebar_position: 0
---

# API

In this page you will find the **_Synchronizer_** API usage, with its endpoints, request and responses.

---

- [API](#api)
  - [**Create Event**](#create-event)
    - [Request](#request)
    - [Response](#response)
  - [**List Events**](#list-events)
    - [Response](#response-1)
  - [**List Events By Address**](#list-events-by-address)
    - [Response](#response-2)
  - [**Get Event**](#get-event)
    - [Response](#response-3)
  - [**Get Event Data**](#get-event-data)
    - [Response](#response-4)
  - [**Delete Event**](#delete-event)
    - [Response](#response-5)
  - [**Restart Event**](#restart-event)
    - [Response](#response-6)

<div class="toc"></div>

---

## **Create Event**

`POST /api/v1/events/:address`<a id="post-apiv1eventsaddress"></a>

This endpoint creates an event with the given address that will be synchronized.

### Request<a id="post-apiv1eventsaddress-request"></a>

```json
{
	"event": {
			"network": "ethereum",
			"address": "0x66CB5987C03BB882A0412a975E6B98Bd1f5fC9cB",
			"latestBlockNumber": 15987239,
			"abi": {
				"name": "abiName",
				"type": "abyType"
				"anonymous": true,
				"inputs": [
					{
						"indexed": false,
						"internalType": "internalInputAbiType",
						"name": "inputName",
						"type": "inputType",
					}
				]
			},
		}
}
```

### Response<a id="post-apiv1eventsaddress-response"></a>

```json
{
	"data": {
			"network": "ethereum",
			"address": "0x66CB5987C03BB882A0412a975E6B98Bd1f5fC9cB",
			"latestBlockNumber": 15987239,
			"abi": {
				"name": "abiName",
				"type": "abyType"
				"anonymous": true,
				"inputs": [
					{
						"indexed": false,
						"internalType": "internalInputAbiType",
						"name": "inputName",
						"type": "inputType",
					}
				]
			},
			"createdAt": "2009-11-10T23:00:00Z",
			"updatedAt": "2009-11-10T23:00:00Z"
		}
}
```

---

<a id="yes"></a>

## **List Events**

`GET /api/v1/events`

This endpoint will list all registered events.

### Response

```json
{
	"data": [
		{
			"id": "7ddfae08-43b1-4538-806c-5138aa76f3b2",
			"network": "ethereum",
			"address": "0x66CB5987C03BB882A0412a975E6B98Bd1f5fC9cB",
			"latestBlockNumber": 15987239,
			"abi": {
				"name": "abiName",
				"type": "abyType"
				"anonymous": true,
				"inputs": [
					{
						"indexed": false,
						"internalType": "internalInputAbiType",
						"name": "inputName",
						"type": "inputType",
					}
				]
			},
			"createdAt": "2009-11-10T23:00:00Z",
			"updatedAt": "2009-11-10T23:00:00Z"
		}
	],
	"meta": {
		"cronjob": {
			"status": "running",
			"seconds": 15
		}
	},
}
```

---

## **List Events By Address**

`GET /api/v1/events/:address`

This endpoint will return the events registered for a given address.

### Response

```json
{
	"data": [
		{
			"id": "3377e966-873f-454d-addb-be14401248ef",
			"network": "ethereum",
			"address": "0x66CB5987C03BB882A0412a975E6B98Bd1f5fC9cB",
			"latestBlockNumber": 15987239,
			"abi": {
				"name": "abiName",
				"type": "abyType"
				"anonymous": true,
				"inputs": [
					{
						"indexed": false,
						"internalType": "internalInputAbiType",
						"name": "inputName",
						"type": "inputType",
					}
				]
			},
			"createdAt": "2009-11-10T23:00:00Z",
			"updatedAt": "2009-11-10T23:00:00Z"
		}
	],
	"meta": {
		"cronjob": {
			"status": "running",
			"seconds": 15
		}
	},
}
```

---

## **Get Event**

`GET /api/v1/events/:address/:event_name`

This endpoint will return a specific event given an address and its name.

### Response

```json
{
	"data": {
			"id": "c4a5ad01-d40b-4bb6-bbb2-2aad78728538",
			"network": "ethereum",
			"address": "0x66CB5987C03BB882A0412a975E6B98Bd1f5fC9cB",
			"latestBlockNumber": 15987239,
			"abi": {
				"name": "abiName",
				"type": "abyType"
				"anonymous": true,
				"inputs": [
					{
						"indexed": false,
						"internalType": "internalInputAbiType",
						"name": "inputName",
						"type": "inputType",
					}
				]
			},
			"createdAt": "2009-11-10T23:00:00Z",
			"updatedAt": "2009-11-10T23:00:00Z"
	}
}
```

---

## **Get Event Data**

`GET /api/v1/events/:address/:event_name/data`

This endpoint returns the date of an specific event given an address.

### Response

```json
{
	"data": {
		"tx": "0x72daee182ea53ac2aec8a339e081fbc456bc8ab114d0b08465103989e8e7e680",
		"blockNumber": 12093759,
		"data": {
			"arg1": "arg1value",
			"arg2": 1224,
			"argN": true
		}
	},
	"meta": {
			"id": "c4a5ad01-d40b-4bb6-bbb2-2aad78728538",
			"network": "ethereum",
			"address": "0x66CB5987C03BB882A0412a975E6B98Bd1f5fC9cB",
			"latestBlockNumber": 15987239,
			"abi": {
				"name": "abiName",
				"type": "abyType"
				"anonymous": true,
				"inputs": [
					{
						"indexed": false,
						"internalType": "internalInputAbiType",
						"name": "inputName",
						"type": "inputType",
					}
				]
			},
			"createdAt": "2009-11-10T23:00:00Z",
			"updatedAt": "2009-11-10T23:00:00Z"
	}
}
```

---

## **Delete Event**

`DELETE /api/v1/events/:address/:event_name`

This endpoint is for deleting a synced event

### Response

```tsx
{
}
```

---

## **Restart Event**

`POST /api/v1/events/:address:event_name/restart`

This endpoint is for reseting a synced event. It will remove the error, so the cronjob will execute again the event.

### Response

```tsx
{
}
```

---
