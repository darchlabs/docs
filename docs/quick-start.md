---
sidebar_position: 2
sidebar_label: "🚀 Quick Start"
title: Kickstart Your DarchLabs Journey
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import ApiKeyUI from '@site/static/img/quick-start/api-key-loop.gif';

## Welcome to DarchLabs Quick Start! 🌟

If you're eager to dive into the DarchLabs ecosystem and start building, you're in the right place. This guide will help you set up and make your first calls using the DarchLabs library in no time.

### 1. Setting Up DarchLabs Library 📚

The DarchLabs library is designed to be plug-and-play for Node.js developers. Let's get it set up:

```bash
npm install darchlabs
```

### 2. Obtain Your API Key 🔑

To interact programmatically with DarchLabs, you'll need an API key.

- Sign in to your DarchLabs account.
- Navigate to Profile in sidebar, Create API Key option
- Generate a new API key. Remember to keep this secure!

<div style={{ display: "flex", justifyContent: "center" }}>
  <img width={"80%"} src={ApiKeyUI} />
</div>

### 3. Making Your First Calls 📞

With the library installed and your API key in hand, you're ready to make some calls. Here's a simple example:

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
const { Synchronizers } = new Darchlabs("<YOUR_API_KEY>");

// new contract to synchronize
const created = await Synchronizers.Contracts.createContract({
  name: "MyContract",
  network: "ethereum",
  address: "0x1234abcd...",
   abi: [/* ABI contract json */];
});
console.log("contract", created);

// list all events of a contract
const { events, pagination } = await Synchronizers.Events.listEventsByAddress(created.address);
console.log("events", events, pagination);
```

</TabItem>

<TabItem value="ts">

```ts
import Darchlabs from "darchlabs";
const { synchronizers } = new Darchlabs("<YOUR_API_KEY>");

// new contract to synchronize
const created = await synchronizers.contracts.createContract({
  name: "MyContract",
  network: "ethereum",
  address: "0x1234abcd...",
   abi: [/* ABI contract json */];
});
console.log("contract", created);

// list all events of a contract
const { events, pagination } = await Synchronizers.Events.listEventsByAddress(created.address);
console.log("events", events, pagination);
```

</TabItem>
</Tabs>

:::info

For more examples like the ones above, check out [here](https://github.com/darchlabs/demo-integration-starter-kit/blob/main/demo-npm-library/src/index.ts). Additionally, the [demo-integration-starter-kit repository](https://github.com/darchlabs/demo-integration-starter-kit) offers a plethora of resources and examples to help you get started with DarchLabs integration.

:::

### 4. Dive Deeper with the Talent Test 🧪

DarchLabs offers a talent test feature, allowing you to test out various functionalities and get a feel for how things work. It's a sandboxed environment, perfect for experimentation.

### 5. Need More Details? 🧐

While this guide is designed for a quick start, we have extensive documentation and tutorials to help you dive deeper:

- **Detailed Docs**: [DarchLabs Documentation](/docs/intro)
- **FAQs**: [Frequently Asked Questions](/docs/faq)
- **Tutorials**: Dive into our step-by-step [tutorials](/docs/tutorials/tutorials) to explore specific functionalities.

---
