const ethers = require('ethers');

const provider = new ethers.JsonRpcProvider("https://mainnet.infura.io/v3/*insert your infura key here*");
const walletAddress = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045';

provider.getBalance(walletAddress).then((balance) => {
  // format to one decimal place in ether notation
  console.log(`The balance of ${walletAddress} is ${ethers.formatEther(balance)} ETH`);

});
