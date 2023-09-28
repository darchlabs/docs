---
sidebar_position: 2
sidebar_label: 3. Webhooks Essentials
title: "Webhooks: Setting Up, Listening, and Processing"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### Introduction

In this tutorial, we'll guide you through setting up a simple HTTP server to listen for webhooks from DarchLabs. By the end of this guide, you'll be able to receive and process events emitted by your smart contract.

### Prerequisites

- Basic understanding of the programming language of your choice (Node.js, Python, Go).
- An active account on DarchLabs with a [configured synchronizer](docs/tutorials/chain-data-sync).

### Step-by-step Guide

#### Setting Up Your Webhook Listener

Depending on your preferred programming language, follow the instructions below:

<Tabs
groupId="language"
defaultValue="nodejs"
values={[
{ label: 'Node.js', value: 'nodejs', },
{ label: 'Python', value: 'python', },
{ label: 'Golang', value: 'go', },
]}>
<TabItem value="nodejs">

1. **Setup**:

- Ensure you have Node.js installed.
- Create a new directory for your project and navigate into it.
- Run `npm init -y` to initialize a new Node.js project.
- Install the required packages with `npm install darchlabs`.

:::info

For this example, we'll use the `ListenServer` implementation from the [DarchLabs Node.js library](https://www.npmjs.com/package/darchlabs). However, remember you can utilize any framework or tool you're familiar with, such as [Express](https://expressjs.com/) for Node.js

:::

<Tabs
groupId="language-example"
defaultValue="js"
values={[
{ label: 'JavaScript', value: 'js', },
{ label: 'TypeScript', value: 'ts', },
]}>
<TabItem value="js">

2. **Code**:

- Create a new file named `webhook.js`.
- Add the following code to `webhook.js`:

```js
const { Util } = require("darchlabs");

Util.ListenServer(3000, "/api/v1/webhook", (wh) => {
  console.log(`Received webhook with ID: ${wh.id}`);
});
```

3. **Run**:

- Execute the server with the command: `node webhook.js`.

</TabItem>

<TabItem value="ts">

2. **Code**:

- We recommend install the [**ts-node**](https://typestrong.org/ts-node/) interpreter.
- Create a new file named `webhook.ts`.
- Add the following code to `webhook.ts`:

```ts
import { Util, type Webhook } from "darchlabs";

Util.ListenServer(3000, "/api/v1/webhook", (wh: Webhook) => {
  console.log(`Received webhook with ID: ${wh.id}`);
});
```

3. **Run**:

- Execute the server with the command: `node webhook.ts`.

</TabItem>
</Tabs>

</TabItem>

<TabItem value="python">

1. **Setup**:

- Ensure you have Python installed.
- Install Flask using pip: `pip install Flask`.

2. **Code**:

- Create a new file named `webhook.py`.
- Add the following code to `webhook.py`:

```python
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/v1/webhook', methods=['POST'])
def webhook_listener():
    webhook = request.json
    print("Received Webhook:", webhook)
    return jsonify({"message": "Webhook received!"}), 200

if __name__ == '__main__':
    app.run(port=5000)
```

3. **Run**:

- Execute the server with the command: `python webhook.py`.

</TabItem>
<TabItem value="go">

1. **Setup**:

- Ensure you have Go installed.

2. **Code**:

- Create a new file named `webhook.go`.
- Add the following code to `webhook.go`:

```go
package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func webhookHandler(w http.ResponseWriter, r *http.Request) {
	body, _ := ioutil.ReadAll(r.Body)
	fmt.Println("Received Webhook:", string(body))
	w.WriteHeader(http.StatusOK)
}

func main() {
	http.HandleFunc("/api/v1/webhook", webhookHandler)
	http.ListenAndServe(":5000", nil)
}
```

3. **Run**:

- Execute the server with the command: `go run webhook.go`.

</TabItem>

</Tabs>

### Conclusion

Congratulations! You've successfully set up a server to listen for webhooks from DarchLabs. With this setup, you can now process events from your smart contract in real-time.

Stay tuned for our next tutorial, where we'll guide you through automating smart contract method calls using cron jobs.

---
