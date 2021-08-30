const RippleAPI = require('ripple-lib').RippleAPI;
const mainnet = new RippleAPI({
    server: 'wss://s.altnet.rippletest.net/'
  });
  
  (async function(api) {
    await api.connect();
  
    let response = await api.getLedger({
      includeTransactions: true
    });
    console.log(response);
  
  })(mainnet);