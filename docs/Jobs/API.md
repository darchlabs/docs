---
sidebar_position: 2
---

# API

In this page you will find the **Jobs** API usage, with its endpoints, request and responses.

---

- [API](#api)
  - [**CREATE JOB**](#create-job)
    - [Request](#request)
    - [Response](#response)
  - [**GET JOBS**](#get-jobs)
    - [Response](#response-1)
  - [**START JOB**](#start-job)
    - [Response](#response-2)
  - [**STOP JOB**](#stop-job)
    - [Response](#response-3)
  - [**DELETE JOB**](#delete-job)
    - [Response](#response-4)
  - [**UPDATE JOB**](#update-job)
    - [Request](#request-1)
    - [Response](#response-5)
  - [**GET PROVIDERS**](#get-providers)
    - [Response](#response-6)

<div class="toc"></div>

---

## **CREATE JOB**

`POST /api/v1/jobs`

This endpoint creates a job with the body request info.

### Request

```json
{
  "job": {
    "name": "job-1",
    "providerId": "1",
    "network": "goerli",
    "address": "0x98f25ABE7FAeFE5bFbDB02F745D76Ce6661523fe",
    "nodeUrl": "https://eth-goerli.g.alchemy.com/v2/iBz2dSgQkpZ4zr5aDFaW_FmTCq7SDQzi",
    "privateKey": "f5d4b19c9904d78297bee9510e2cd79ab52d36294962749504ffd7fb4b7565cb",

    "abi": "[\n\t\t\t{\n\t\t\t\t\"inputs\": [],\n\t\t\t\t\"name\": \"counter\",\n\t\t\t\t\"outputs\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"internalType\": \"uint8\",\n\t\t\t\t\t\t\"name\": \"\",\n\t\t\t\t\t\t\"type\": \"uint8\"\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\t\"stateMutability\": \"view\",\n\t\t\t\t\"type\": \"function\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"inputs\": [],\n\t\t\t\t\"name\": \"getStatus\",\n\t\t\t\t\"outputs\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"internalType\": \"bool\",\n\t\t\t\t\t\t\"name\": \"\",\n\t\t\t\t\t\t\"type\": \"bool\"\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\t\"stateMutability\": \"view\",\n\t\t\t\t\"type\": \"function\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"inputs\": [],\n\t\t\t\t\"name\": \"perform\",\n\t\t\t\t\"outputs\": [],\n\t\t\t\t\"stateMutability\": \"nonpayable\",\n\t\t\t\t\"type\": \"function\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"inputs\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"internalType\": \"bool\",\n\t\t\t\t\t\t\"name\": \"status\",\n\t\t\t\t\t\t\"type\": \"bool\"\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\t\"name\": \"setStatus\",\n\t\t\t\t\"outputs\": [],\n\t\t\t\t\"stateMutability\": \"nonpayable\",\n\t\t\t\t\"type\": \"function\"\n\t\t\t}\n\t\t]",

    "type": "cronjob",
    "cronjob": " */10 *  * * *  *",
    "checkMethod": "getStatus",
    "actionMethod": "perform"
  }
}
```

### Response

```json
{
  "data": {
    "id": "A3SSnCJVg",
    "name": "job-1",
    "providerId": "1",
    "status": "running",
    "network": "goerli",
    "address": "0x98f25ABE7FAeFE5bFbDB02F745D76Ce6661523fe",
    "abi": "[\n\t\t\t{\n\t\t\t\t\"inputs\": [],\n\t\t\t\t\"name\": \"counter\",\n\t\t\t\t\"outputs\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"internalType\": \"uint8\",\n\t\t\t\t\t\t\"name\": \"\",\n\t\t\t\t\t\t\"type\": \"uint8\"\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\t\"stateMutability\": \"view\",\n\t\t\t\t\"type\": \"function\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"inputs\": [],\n\t\t\t\t\"name\": \"getStatus\",\n\t\t\t\t\"outputs\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"internalType\": \"bool\",\n\t\t\t\t\t\t\"name\": \"\",\n\t\t\t\t\t\t\"type\": \"bool\"\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\t\"stateMutability\": \"view\",\n\t\t\t\t\"type\": \"function\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"inputs\": [],\n\t\t\t\t\"name\": \"perform\",\n\t\t\t\t\"outputs\": [],\n\t\t\t\t\"stateMutability\": \"nonpayable\",\n\t\t\t\t\"type\": \"function\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"inputs\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"internalType\": \"bool\",\n\t\t\t\t\t\t\"name\": \"status\",\n\t\t\t\t\t\t\"type\": \"bool\"\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\t\"name\": \"setStatus\",\n\t\t\t\t\"outputs\": [],\n\t\t\t\t\"stateMutability\": \"nonpayable\",\n\t\t\t\t\"type\": \"function\"\n\t\t\t}\n\t\t]",
    "nodeUrl": "https://eth-goerli.g.alchemy.com/v2/iBz2dSgQkpZ4zr5aDFaW_FmTCq7SDQzi",
    "privateKey": "f5d4b19c9904d78297bee9510e2cd79ab52d36294962749504ffd7fb4b7565cb",
    "type": "cronjob",
    "cronjob": " */10 *  * * *  *",
    "checkMethod": "getStatus",
    "actionMethod": "perform",
    "createdAt": "2023-02-21T16:30:01.714953845Z",
    "updatedAt": "0001-01-01T00:00:00Z"
  },
  "meta": 200
}
```

---

## **GET JOBS**

`GET /api/v1/jobs`

This endpoint will list all created jobs.

### Response

```json
{
  "data": [
    {
      "id": "A3SSnCJVg",
      "name": "job-1",
      "providerId": "1",
      "status": "running",
      "network": "goerli",
      "address": "0x98f25ABE7FAeFE5bFbDB02F745D76Ce6661523fe",
      "abi": "[\n\t\t\t{\n\t\t\t\t\"inputs\": [],\n\t\t\t\t\"name\": \"counter\",\n\t\t\t\t\"outputs\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"internalType\": \"uint8\",\n\t\t\t\t\t\t\"name\": \"\",\n\t\t\t\t\t\t\"type\": \"uint8\"\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\t\"stateMutability\": \"view\",\n\t\t\t\t\"type\": \"function\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"inputs\": [],\n\t\t\t\t\"name\": \"getStatus\",\n\t\t\t\t\"outputs\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"internalType\": \"bool\",\n\t\t\t\t\t\t\"name\": \"\",\n\t\t\t\t\t\t\"type\": \"bool\"\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\t\"stateMutability\": \"view\",\n\t\t\t\t\"type\": \"function\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"inputs\": [],\n\t\t\t\t\"name\": \"perform\",\n\t\t\t\t\"outputs\": [],\n\t\t\t\t\"stateMutability\": \"nonpayable\",\n\t\t\t\t\"type\": \"function\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"inputs\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"internalType\": \"bool\",\n\t\t\t\t\t\t\"name\": \"status\",\n\t\t\t\t\t\t\"type\": \"bool\"\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\t\"name\": \"setStatus\",\n\t\t\t\t\"outputs\": [],\n\t\t\t\t\"stateMutability\": \"nonpayable\",\n\t\t\t\t\"type\": \"function\"\n\t\t\t}\n\t\t]",
      "nodeUrl": "https://eth-goerli.g.alchemy.com/v2/iBz2dSgQkpZ4zr5aDFaW_FmTCq7SDQzi",
      "privateKey": "f5d4b19c9904d78297bee9510e2cd79ab52d36294962749504ffd7fb4b7565cb",
      "type": "cronjob",
      "cronjob": " */10 *  * * *  *",
      "checkMethod": "getStatus",
      "actionMethod": "perform",
      "createdAt": "2023-02-21T16:30:01.714953845Z",
      "updatedAt": "0001-01-01T00:00:00Z"
    },
    {
      "id": "lXwTgj14g",
      "name": "Job 1",
      "providerId": "1",
      "status": "running",
      "network": "goerli",
      "address": "0x98f25ABE7FAeFE5bFbDB02F745D76Ce6661523fe",
      "abi": "[ \t{ \t\t\"inputs\": [], \t\t\"name\": \"counter\", \t\t\"outputs\": [ \t\t\t{ \t\t\t\t\"internalType\": \"uint8\", \t\t\t\t\"name\": \"\", \t\t\t\t\"type\": \"uint8\" \t\t\t} \t\t], \t\t\"stateMutability\": \"view\", \t\t\"type\": \"function\" \t}, \t{ \t\t\"inputs\": [], \t\t\"name\": \"getStatus\", \t\t\"outputs\": [ \t\t\t{ \t\t\t\t\"internalType\": \"bool\", \t\t\t\t\"name\": \"\", \t\t\t\t\"type\": \"bool\" \t\t\t} \t\t], \t\t\"stateMutability\": \"view\", \t\t\"type\": \"function\" \t}, \t{ \t\t\"inputs\": [], \t\t\"name\": \"perform\", \t\t\"outputs\": [], \t\t\"stateMutability\": \"nonpayable\", \t\t\"type\": \"function\" \t}, \t{ \t\t\"inputs\": [ \t\t\t{ \t\t\t\t\"internalType\": \"bool\", \t\t\t\t\"name\": \"status\", \t\t\t\t\"type\": \"bool\" \t\t\t} \t\t], \t\t\"name\": \"setStatus\", \t\t\"outputs\": [], \t\t\"stateMutability\": \"nonpayable\", \t\t\"type\": \"function\" \t} ]",
      "nodeUrl": "https://prettiest-proud-field.ethereum-goerli.discover.quiknode.pro/00d5d7ee3eb808605065f0761b6ba3f824ab177b/",
      "privateKey": "f5d4b19c9904d78297bee9510e2cd79ab52d36294962749504ffd7fb4b7565cb",
      "type": "cronjob",
      "cronjob": "*/60 * * * * *",
      "checkMethod": "getStatus",
      "actionMethod": "perform",
      "createdAt": "2023-02-21T15:07:19.565092125Z",
      "updatedAt": "0001-01-01T00:00:00Z"
    }
  ],
  "meta": 200
}
```

---

## **START JOB**

`POST /api/v1/jobs/:id/start`

This endpoint will start a stopped job.

It must be stopped.

### Response

```json
{
  "data": {
    "id": "A3SSnCJVg",
    "status": "running"
  },
  "meta": 200
}
```

---

## **STOP JOB**

`POST /api/v1/jobs/:id/stop`

This endpoint will start a started job.

It must be running.

### Response

```json
{
  "data": {
    "id": "A3SSnCJVg",
    "status": "stopped"
  },
  "meta": 200
}
```

---

## **DELETE JOB**

`DELETE /api/v1/jobs/:id`

This endpoint will delete an existing job.

### Response

```json
{
  "data": {
    "id": "A3SSnCJVg",
    "status": "Deleted"
  },
  "meta": 200
}
```

---

## **UPDATE JOB**

`PATCH /api/v1/jobs:id`

This endpoint will update an existing job on one or more of the body request params.
You have to change at least one of the current job fields for the response to succeed. If you don’t update anything, or all the fields that you are updating are the same than what the current job already has, it will fail.

### Request

```json
{
  "job": {
    "network": "",
    "nodeUrl": "https://eth-goerli.g.alchemy.com/v2/nfM2qwPux6hXMQyMxtd4FNSTo5MKmjPi",
    "privateKey": "",
    "address": "",
    "cronjob": "*/20 * * * * *",
    "name": "updated job"
  }
}
```

### Response

```json
{
  "data": {
    "job": {
      "id": "4RdQnCJVR",
      "name": "jaja",
      "providerId": "1",
      "status": "running",
      "network": "goerli",
      "address": "0x98f25ABE7FAeFE5bFbDB02F745D76Ce6661523fe",
      "abi": "[\n\t\t\t{\n\t\t\t\t\"inputs\": [],\n\t\t\t\t\"name\": \"counter\",\n\t\t\t\t\"outputs\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"internalType\": \"uint8\",\n\t\t\t\t\t\t\"name\": \"\",\n\t\t\t\t\t\t\"type\": \"uint8\"\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\t\"stateMutability\": \"view\",\n\t\t\t\t\"type\": \"function\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"inputs\": [],\n\t\t\t\t\"name\": \"getStatus\",\n\t\t\t\t\"outputs\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"internalType\": \"bool\",\n\t\t\t\t\t\t\"name\": \"\",\n\t\t\t\t\t\t\"type\": \"bool\"\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\t\"stateMutability\": \"view\",\n\t\t\t\t\"type\": \"function\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"inputs\": [],\n\t\t\t\t\"name\": \"perform\",\n\t\t\t\t\"outputs\": [],\n\t\t\t\t\"stateMutability\": \"nonpayable\",\n\t\t\t\t\"type\": \"function\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"inputs\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t\"internalType\": \"bool\",\n\t\t\t\t\t\t\"name\": \"status\",\n\t\t\t\t\t\t\"type\": \"bool\"\n\t\t\t\t\t}\n\t\t\t\t],\n\t\t\t\t\"name\": \"setStatus\",\n\t\t\t\t\"outputs\": [],\n\t\t\t\t\"stateMutability\": \"nonpayable\",\n\t\t\t\t\"type\": \"function\"\n\t\t\t}\n\t\t]",
      "nodeUrl": "https://eth-goerli.g.alchemy.com/v2/iBz2dSgQkpZ4zr5aDFaW_FmTCq7SDQzi",
      "privateKey": "f5d4b19c9904d78297bee9510e2cd79ab52d36294962749504ffd7fb4b7565cb",
      "type": "cronjob",
      "cronjob": "*/20 * * * * *",
      "checkMethod": "getStatus",
      "actionMethod": "perform",
      "createdAt": "2023-02-21T16:39:53.400958716Z",
      "updatedAt": "2023-02-21T16:40:37.895163959Z",
      "logs": ["INVALID_CLIENT"]
    }
  },
  "meta": 200
}
```

---

## **GET PROVIDERS**

`GET /api/v1/providers`

This endpoint will return the current providers implemented with its supported networks in Jobs. The providers could be DL Keepers, Chainlink Keepers, etc.

### Response

```json
{
  "data": [
    {
      "id": "1",
      "name": "Darch Labs Keepers",
      "networks": ["ethereum", "polygon", "goerli"]
    },
    {
      "id": "2",
      "name": "Chainlink Keepers",
      "networks": []
    }
  ],
  "meta": 200
}
```

---
