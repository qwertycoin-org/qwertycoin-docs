---
title: Local Testnet
---

The Qwertycoin testnet is your sandbox where the sustainability of your coin and network can be put to test before the launch of a major update. Generally, you wouldn't want to roll out a feature, which might jeopardize your user's experience or your network's health.

Qwertycoin testnet tool ignores the real network by skipping its checkpoints and peer lists.
It additionally generates a brand new genesis block on startup. By doing so you create a new blockchain for your network which can be used for testing purposes. This tool can even be helpful for pool homeowners deploying a brand new feature associated with mining since their testnet does not need to vie with external miners for the blocks during testing.

1. Post binaries compilation process.
First of all, you should start the daemon with the ```--testnet``` and ```--data-dir``` arguments:

Example:

```
./qwertycoind --testnet --data-dir=new/path/to/blockchain
```

* `--testnet` argument forces daemon to start a new testing network.
* `--data-dir` argument ought to diverge from the default folder so the testnet does not interfere with the important network's blockchain and peer pools. When you launch a brand new testnet, be sure to provide it with a new folder.

2. Launching a testnet simplewallet is easy.
It needs solely the `--testnet` argument to attach to the testnet daemon:

Example:

```
./simplewallet --testnet
```

3. In case you need to create a testnet that consists of more than 1 node, you should connect each of the new daemons to the previously launched testnet through the `--add-exclusive-node` argument:
Example:

```
./qwertycoind --testnet --data-dir=new/path/to/blockchain --add-exclusive-node=testnet.node.ip:port
```
