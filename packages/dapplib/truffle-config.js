require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clinic blue trip fan recipe noble solid hockey inflict supply gift'; 
let testAccounts = [
"0xa33e7abf6140b1104d396e36a2eeebba0f961836349daa19810dc03e25a6e17d",
"0x1c6da51ad46a9828caffb1a9c4225fe711abdfbce63efe38234edd8af8bf0c77",
"0xbe78959186346e796df54b467c623c353aa2dd84846aede7f3591ff8afca77a0",
"0xc943da9de40d295e5b84df519fbb8593f6b7f07a31f253704a0d236b9863e830",
"0x52008382ab90ae8f0662e712787b25fc63a6586b360770e7b498003d36947bc1",
"0xc0cbc20b3e165464913a9e3ba3bbb8d99d327732075d81eabfd07cb70df2aaba",
"0xad1b47fd6651506f46bfeccdc108ded7d2024d581e7d49cc24a9a2913a8d95ad",
"0xfb2c2b5da972be12f626cc6ba05378af2c79917dc467ff6b7d89481d216b8b4c",
"0xad97ce9421b9b9d8bb1f5dccf801fcb13d15f6cbb75cfa4c9b7ede0d13f5fe2c",
"0x3c3efc832581ec746b0935abe5618588862b4975b893c0bef1e40e92754e6d45"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


