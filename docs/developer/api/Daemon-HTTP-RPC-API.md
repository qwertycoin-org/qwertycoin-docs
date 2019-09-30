---
title: Daemon HTTP RPC Commands
---

To start Daemon HTTP RPC API server you should specify a port on which server binds (additionally to standard daemon's arguments). You can choose any free port. To do that execute the following command from the command line:

 `./Qwertycoind --rpc-bind-port=8197`

If you want Daemon to be accessed from other computer not only yours you should also use a `--rpc-bind-ip 0.0.0.0` command. To do that execute the following command from the command line:

`./Qwertycoind --rpc-bind-ip=0.0.0.0 --rpc-bind-port=8197`

## Inputing commands
You can input the commands into any browser but Firefox will give you the best interface for viewing. To begin type in the IP address or domain name of your daemon followed by the rpc port and one of the commands below.

http://ip_address:rpc_port/command

For example:

https://pool.qwertycoin.org:8197/getheight

* The url above will display the current blockchain height.

## Commands

### `getinfo` - returns information related to the network and daemon connection
* Expected output

{"already_generated_coins":"96407158135.65998447",

"alt_blocks_count":53,

"block_major_version":5,

"block_minor_version":0,

"contact":"dev@qwertycoin.org",

"difficulty":91532104667,

"fee_address":"QWC1RALGaP5U8BLJskYR2YVSjr3DQEEuS5xghbtX2mm134YVXgS4RJHZGkeBvXf4BRFLWkv4zHGJ267S9pjwvVt63xwkdYPCwF,

"grey_peerlist_size":2430,

"height":388735,

"incoming_connections_count":10,

"last_block_difficulty":98871693571,

"last_block_reward":16796197998698,

"last_block_timestamp":1565818316,

"last_known_block_index":388734,

"min_tx_fee":100000000,

"outgoing_connections_count":7,

"readable_tx_fee":"1.00000000",

"rpc_connections_count":17,

"start_time":1564440874,

"status":"OK",

"top_block_hash":"009e355219f2c4647650a7d1f4f8ae81af947964859f983fbeb38e148323ab9d",

"tx_count":1058803,

"tx_pool_size":42,

"version":"5.2.1.3090 (25ffb5a)",

"white_peerlist_size":998}

### `getheight` - returns the height of the daemon and the network
* Expected output

{"height":388736,"status":"OK"}

### `gettransactions` - returns list of missed transactions
* Expected output

{"missed_tx":[],"status":"OK","txs_as_hex":[]}

### `feeaddress` - returns the address to where the nodes fees are sent
* Expected output

{"fee_address":"QWC1RALGaP5U8BLJskYR2YVSjr3DQEEuS5xghbtX2mm134YVXgS4RJHZGkeBvXf4BRFLWkv4zHGJ267S9pjwvVt63xwkdYPCwF","status":"OK"}

### `getpeers` - returns the list of peers connected to the daemon
* Expected output

{"peers":["207.180.227.215:8196",
"220.82.126.94:8196",
"185.177.59.99:8196",
"80.211.204.60:8196",
"167.86.93.173:8196", ...],"status":"OK"}

### `paymentid` - returns the paymentid of the node
* Expected output

{"payment_id":"55c1259bddceff71a370d26e09d6bc88bcc5e0db61ea758e250700792e7cc532"}
