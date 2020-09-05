module.exports = {
  errors: {
    disconnected: () => `Sparrow: Lost connection to Sparrow background process.`,
    sendSiteMetadata: () => `Sparrow: Failed to send site metadata. This is an internal error, please report this bug.`,
    unsupportedSync: (method) => `Sparrow: The Sparrow Web3 object does not support synchronous methods like ${method} without a callback parameter.`,
    invalidDuplexStream: () => 'Must provide a Node.js-style duplex stream.',
    invalidOptions: (maxEventListeners, shouldSendMetadata) => `Invalid options. Received: { maxEventListeners: ${maxEventListeners}, shouldSendMetadata: ${shouldSendMetadata} }`,
    invalidRequestArgs: () => `Expected a single, non-array, object argument.`,
    invalidRequestMethod: () => `'args.method' must be a non-empty string.`,
    invalidRequestParams: () => `'args.params' must be an object or array if provided.`,
    invalidLoggerObject: () => `'args.logger' must be an object if provided.`,
    invalidLoggerMethod: (method) => `'args.logger' must include required method '${method}'.`,
  },
  warnings: {
    // TODO:deprecation:remove
    autoRefreshDeprecation: `Sparrow: Sparrow will soon stop reloading pages on network change.\nFor more information, see: https://docs.metamask.io/guide/ethereum-provider.html#ethereum-autorefreshonnetworkchange \nSet 'ethereum.autoRefreshOnNetworkChange' to 'false' to silence this warning.`,
    // deprecated methods
    enableDeprecation: `Sparrow: 'ethereum.enable()' is deprecated and may be removed in the future. Please use the 'eth_requestAccounts' RPC method instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1102`,
    sendDeprecation: `Sparrow: 'ethereum.send(...)' is deprecated and may be removed in the future. Please use 'ethereum.sendAsync(...)' or 'ethereum.request(...)' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
    // deprecated events
    events: {
      chainIdChanged: `Sparrow: The event 'chainIdChanged' is deprecated and WILL be removed in the future. Please use 'chainChanged' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
      close: `Sparrow: The event 'close' is deprecated and may be removed in the future. Please use 'disconnect' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
      data: `Sparrow: The event 'data' is deprecated and may be removed in the future.`,
      networkChanged: `Sparrow: The event 'networkChanged' is deprecated and may be removed in the future. Please use 'chainChanged' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
      notification: `Sparrow: The event 'notification' is deprecated and may be removed in the future. Please use 'message' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193`,
    },
    // misc
    experimentalMethods: `Sparrow: 'ethereum._metamask' exposes non-standard, experimental methods. They may be removed or changed without warning.`,
    publicConfigStore: `Sparrow: The property 'publicConfigStore' is deprecated and WILL be removed in the future.`,
  },
}
