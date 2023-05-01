const ethers = require('ethers');

const provider = new ethers.JsonRpcProvider("https://mainnet.infura.io/v3/*insert your infura key here*");
const walletAddress = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045';

provider.getBalance(walletAddress).then((balance) => {
  // Convert the balance from wei to Ether
  const etherBalance = parseFloat(ethers.formatEther(balance));

  // Format the balance to one decimal place
  const formattedBalance = etherBalance.toFixed(1);

  console.log(`The balance of ${walletAddress} is ${formattedBalance} ETH`);

});
