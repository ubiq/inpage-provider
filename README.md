# Sparrow Inpage Provider

The inpage Ethereum provider object injected by Sparrow into web pages.
Contains a lot of implementation details specific to Sparrow, and is probably
not suitable for out-of-the-box use with other wallets.

## Installation

`yarn add sparrow-inpage-provider`

## Usage

```javascript
import { initProvider } from 'sparrow-inpage-provider'

// Create a stream to a remote provider:
const sparrowStream = new LocalMessageDuplexStream({
  name: 'inpage',
  target: 'contentscript',
})

// this will initialize the provider and set it as window.ethereum
initProvider({
  connectionStream: sparrowStream,
})

const { ethereum } = window
```

### Do Not Modify the Provider

The Provider object should not be mutated by consumers under any circumstances.
The maintainers of this package will neither fix nor take responsbility for bugs caused by third parties mutating the provider object.
