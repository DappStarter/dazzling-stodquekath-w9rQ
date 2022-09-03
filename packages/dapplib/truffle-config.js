require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remind hub hunt castle front skate'; 
let testAccounts = [
"0xadc948361a42a621d071789cb57c53e09e647944776d4232c63ab2d6098fe9ab",
"0x4bb7ae7b62a2a16212c626bc5bd4cf0fc50bff15cf5f3a922ae67e679b0d51e8",
"0x5ae07632b26deb00e11ab1ff15dfcd1bd84bc681b252be3eefa86fd9a8cf9180",
"0xfad9b92a446fa3c327480f20b980d637bc37ab166c5b689bbf5724d667d26494",
"0x76d0438ac02f7aab5d30f93f4855514136daaa582ac89f4a94696226cfd640e8",
"0x209141b2e6470634e58b81ca5b7bcb6972905e1425b789fb78dbed555d4080a7",
"0xc39ab47213f0b6dc5395fa8138541c969a5a65e4ac75732de59de95a6d3bbffb",
"0xbbb220e43d96d0cdc1db70af7f263e253b79d2e84907194b4892e0075ea3cc6b",
"0xcf03dbd7a89640f916abc476275612b0dd3c266ad7415dd7805da33986478e45",
"0x921f436dabb9827ec2dc4676179b20450a554ce6f788b59e4b230872d75e8bc2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

