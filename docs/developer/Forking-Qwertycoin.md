---
title: Forking Qwertycoin
---

This is a guide on how to make your own Qwertycoin fork.

### Creator's license
Before we begin, you will see a license at the beginning of every file. It is important not to remove or alter that license statement other than how we have it detailed here.

```
// Copyright (c) 2012-2017, The CryptoNote developers, The Bytecoin developers
// Copyright (c) 2016-2018, The Karbowanec developers
// Copyright (c) 2018-2019, The Qwertycoin Developers
// Copyright (c) 2019, Your Name Goes Here
//
// Please see the included LICENSE file for more information.
```

# Steps
## Change the binary names
### ```src/CMakeLists.txt```

```
// Daemon name (coin name + d at the end)
set_target_properties(QwertycoinTools_Daemon PROPERTIES OUTPUT_NAME "qwertycoind")

// Miner name
set_target_properties(QwertycoinTools_Miner PROPERTIES OUTPUT_NAME "miner")

// Service wallet name
set_target_properties(QwertycoinTools_PaymentGateService PROPERTIES OUTPUT_NAME "walletd")

// Wallet name
set_target_properties(QwertycoinTools_SimpleWallet PROPERTIES OUTPUT_NAME "simplewallet")
```

## Change ASCII Art
### ```lib/Global/Constants.h```
This ASCII art will display on the binary programs. You can use [this generator](http://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20) to create your ASCII art. Depending on the ASCII art you choose to use, you may need to provide a different version for Windows.

```
const std::string windowsAsciiArt =
    "\n                                                              \n"
    "                         _                   _                  \n"
    "                        | |                 (_)                 \n"
    "  __ ___      _____ _ __| |_ _   _  ___ ___  _ _ __             \n"
    " / _` \\ \\ /\\ / / _ \\ '__| __| | | |/ __/ _ \\| | '_\\       \n"
    "| (_| |\\ V  V /  __/ |  | |_| |_| | (_| (_) | | | | |          \n"
    " \\__, | \\_/\\_/ \\___|_|   \\__|\\__, |\\___\\___/|_|_| |_|   \n"
    "    | |                       __/ |                             \n"
    "    |_|                      |___/                              \n"
    "                                                                \n";

const std::string nonWindowsAsciiArt =
    "\n                                                                                 \n"
    " ██████╗ ██╗    ██╗███████╗██████╗ ████████╗██╗   ██╗ ██████╗ ██████╗ ██╗███╗   ██╗\n"
    "██╔═══██╗██║    ██║██╔════╝██╔══██╗╚══██╔══╝╚██╗ ██╔╝██╔════╝██╔═══██╗██║████╗  ██║\n"
    "██║   ██║██║ █╗ ██║█████╗  ██████╔╝   ██║    ╚████╔╝ ██║     ██║   ██║██║██╔██╗ ██║\n"
    "██║▄▄ ██║██║███╗██║██╔══╝  ██╔══██╗   ██║     ╚██╔╝  ██║     ██║   ██║██║██║╚██╗██║\n"
    "╚██████╔╝╚███╔███╔╝███████╗██║  ██║   ██║      ██║   ╚██████╗╚██████╔╝██║██║ ╚████║\n"
    " ╚══▀▀═╝  ╚══╝╚══╝ ╚══════╝╚═╝  ╚═╝   ╚═╝      ╚═╝    ╚═════╝ ╚═════╝ ╚═╝╚═╝  ╚═══╝\n"
"                                                                                   \n";
```

## Change block time
### ```lib/global/CryptoNoteConfig.h```
Block time is measured in seconds. Qwertycoin has 2 minute blocks.

```
const uint64_t DIFFICULTY_TARGET                              = 120; // seconds
```

## Change wallet address prefix
### ```lib/global/CryptoNoteConfig.h```
Qwertycoin has an address prefix of QWC. Every wallet that is generated will begin with the same prefix. You can use the generator on [this page](https://cryptonotestarter.org/tools.html) to generate your prefix in hexadecimal.

```
const uint64_t CRYPTONOTE_PUBLIC_ADDRESS_BASE58_PREFIX        = 0x14820c;
```

## Change mined coins unlocked timeframe
### ```lib/global/CryptoNoteConfig.h```
Mined coins should wait about 20 minutes before being awarded to the miners. You can adjust this to suit your coin's parameters.

```
const size_t   CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW           = 60;
```

## Change money supply
### ```lib/global/CryptoNoteConfig.h```
The coin supply is measured in Atomic Units. The amount of decimal places that you have determines how many coins this number truly represents.
* ```(uint64_t)(-1)``` = 18446744073709551616 coins
* You can define number explicitly like so: ```UINT64_C(18446744073709551616)```

```
const uint64_t MONEY_SUPPLY                                   = (uint64_t)(-1);
```

## Change emission speed
### ```lib/global/CryptoNoteConfig.h```
The emission speed governs how much of the coin's total available supply is awarded to miners with each block. You can play around with the emission speed using [this tool](https://cryptonotestarter.org/tools.html).

```
const unsigned EMISSION_SPEED_FACTOR                          = 19;
```


## Change decimal points
### ```lib/global/CryptoNoteConfig.h```
Change this number to suit your needs.

```
const size_t   CRYPTONOTE_DISPLAY_DECIMAL_POINT               = 8;
```

## Change min and max transaction fees
### ```lib/global/CryptoNoteConfig.h```
Set the fees in Atomic Units for each transaction. Make sure this number isn't too low or you might run into spam transaction attacks.

```
const uint64_t MINIMUM_FEE                                    = UINT64_C(100000000);
const uint64_t MAXIMUM_FEE                                    = UINT64_C(100000000);
```

## Change remote node fee
### ```lib/global/CryptoNoteConfig.h```
This section defines the fees that the remote node will receive from the sender.

```
const double   REMOTE_NODE_FEE_FACTOR                         = 0.25; // percent
```

## Set dust limit
### ```lib/global/CryptoNoteConfig.h```
Dust is the word for the smallest pieces of a coin that are too small to be included with in a block. Any amount lower than this will not be spendable. This number is measured in Atomic Units.

```
const uint64_t DEFAULT_DUST_THRESHOLD                         = UINT64_C(100000);
```

## Set mixin level
### ```lib/global/CryptoNoteConfig.h```
Mixin determines how private transactions are. A high mixin on a new network can cause transactions to fail so it is suggested to allow zero mixin and to start off with reasonable limits and increase later.

```
const uint64_t MIN_TX_MIXIN_SIZE                              = 0;
const uint64_t MAX_TX_MIXIN_SIZE                              = 20;

const uint64_t MIN_TX_MIXIN_SIZE_V1                           = 2;
const uint64_t MAX_TX_MIXIN_SIZE_V1                           = 20;

const uint64_t MIN_TX_MIXIN_SIZE_V2                           = 2;
const uint64_t MAX_TX_MIXIN_SIZE_V2                           = 20;

const uint64_t MIN_TX_MIXIN_SIZE_V3                           = 3;
const uint64_t MAX_TX_MIXIN_SIZE_V3                           = 3;

/* The heights to activate the mixin limits at */
const uint32_t MIXIN_LIMITS_V1_HEIGHT                         = 200000;
const uint32_t MIXIN_LIMITS_V2_HEIGHT                         = 1000000;
const uint32_t MIXIN_LIMITS_V3_HEIGHT                         = 1200000;
```

## Change hashing algorithm
### ```lib/global/CryptoNoteConfig.h```
If you want to be an ASIC mined coin, make this number very high (~300000-350000). If you don't want to be ASIC mined, set this number to 3. You can also change V5 and V6 for your coin.

```
const uint32_t UPGRADE_HEIGHT_V4                              = 110520;
```

## Change coin name
### ```lib/global/CryptoNoteConfig.h```

```
const char     CRYPTONOTE_NAME[]                             = "Qwertycoin";
```

## Change P2P and RPC ports
### ```lib/global/CryptoNoteConfig.h```
Set these to personal preference.

```
const int      P2P_DEFAULT_PORT                              =  8196;
const int      RPC_DEFAULT_PORT                              =  8197;
```

## Software Update URL
### ```lib/global/CryptoNoteConfig.h```
Set this according to your preferences.

```
const char        LATEST_VERSION_URL[]                       = "https://releases.qwertycoin.org";
```

## Change seed nodes
### ```lib/global/CryptoNoteConfig.h```
Seed nodes are full daemons that serve up a copy of the blockchain data for peers just joining the network. Minimum amount is one but several are recommended.

```
const char *const SEED_NODES[] = {
    "node-00.qwertycoin.org:8196",
    "node-01.qwertycoin.org:8196",
    "node-02.qwertycoin.org:8196",
    "node-03.qwertycoin.org:8196",
    "node-04.qwertycoin.org:8196",
    "node-05.qwertycoin.org:8196",
    "198.147.30.115:8196",  //loop
    "198.147.30.116:8196"   //pool
};
```

## Remove checkpoints
### ```lib/global/Checkpoints.h```
Remove checkpoints.

```
const std::initializer_list<CheckpointData> CHECKPOINTS = {};
```

## Change CLI wallet config
### ```lib/Global/Constants.h```
Change to your personal preference.

```
namespace WalletConfig {

/*!
    The prefix your coins address starts with
*/
const uint64_t addressPrefix = 0x14820c;

/*!
    Your coins 'Ticker', e.g. Monero = XMR, Bitcoin = BTC
*/
const std::string ticker = "QWC";

/*!
    The filename to output the CSV to in save_csv
*/
const std::string csvFilename = "transactions.csv";

/*!
    The filename to read+write the address book to - consider starting with
    a leading '.' to make it hidden under mac+linux
*/
const std::string addressBookFilename = ".addressBook.json";

/*!
    The name of your deamon
*/
const std::string daemonName = "qwertycoind";

/*!
    The name to call this wallet
*/
const std::string walletName = "simplewallet";

/*!
    The name of service/walletd, the programmatic rpc interface to a wallet
*/
const std::string walletdName = "qwertycoin-service";

/*!
    The full name of your crypto
*/
const std::string coinName = std::string(CryptoNote::CRYPTONOTE_NAME);

/*!
    Where can your users contact you for support? E.g. discord
*/
const std::string contactLink = "http://chat.qwertycoin.org";
```

## Set address length
### ```lib/Global/Constants.h```
Your address length should be 95 + the number of letters in your address prefix.

```
const uint16_t standardAddressLength = 98;
```

## How to compile and deploy your coin on Linux
* [Instructions for Mac](https://github.com/qwertycoin-org/qwertycoin#apple-macos-)
* [Instructions for Windows](https://github.com/qwertycoin-org/qwertycoin#windows-10-)

### Prerequisites
* [CMake 3.10 or higher](https://github.com/qwertycoin-org/qwertycoin/wiki/E01.-Install-Cmake-3.10), build-essential, git

Example for Ubuntu

```
sudo apt-get install build-essential cmake git
```

### Building
* After installing dependencies run simple script:

```
git clone --recurse-submodules https://github.com/qwertycoin-org/qwertycoin
cd ./qwertycoin
mkdir ./build
cd ./build
cmake -DBUILD_ALL:BOOL=TRUE ..
cmake --build . --config Release
```

* If all went well, it will complete successfully, and you will find all your binaries in the ```./build/src``` directory.

### Deploy
On the seed nodes that you listed in ```src/config/CryptoNoteConfig.h```, launch your newly compiled daemons. It is suggested that you run the daemons inside of tmux to keep them running. Here's how to start the daemons inside a basic loop to relaunch the daemon if it fails.

```
tmux

while true ; do ./qwertycoind ; done
```

* Type ```control b + d``` to exit tmux

## Advanced parameters
[Coming soon...]().
