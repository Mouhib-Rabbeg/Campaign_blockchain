import Web3 from 'web3'

let web3;
if(typeof window !== "undefined" && typeof window.ethereum != "undefined"){
    window.ethereum.send('eth_requestAccounts').then(
        web3 = new Web3(window.ethereum)
    );
}
else{
    const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/271868cae9cd49a4bdc728af8fe72693')
    web3 = new Web3(provider)
}


export default web3;