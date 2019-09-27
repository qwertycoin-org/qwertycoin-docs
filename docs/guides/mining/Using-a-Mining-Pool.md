---
title: Using a Mining Pool
---

## Choose a mining pool
There are several official and alternative Qwertycoin mining pools to choose from with varying fees and minimum payouts. For this guide we will be using [pool.qwertycoin.org](http://pool.qwertycoin.org/).

### Official Qwertycoin Mining Pools
* [pool.qwertycoin.org](http://pool.qwertycoin.org/)
* [loop.qwertycoin.org](http://loop.qwertycoin.org/)

### Alternative Qwertycoin Mining Pools
* [qwc.superpools.online](http://qwc.superpools.online/)
* [qwertycoin.spdns.org](http://qwertycoin.spdns.org/)
* [superblockchain.con-ip.com/qwc](http://superblockchain.con-ip.com/qwc)
* [easyhash.pro/qwc](http://easyhash.pro/qwc)
* [youpool.io/qwc](http://youpool.io/qwc)
* [cryptoknight.cc/qwerty](http://cryptoknight.cc/qwerty)

For this guide we will be using [pool.qwertycoin.org](http://pool.qwertycoin.org/).

![qwcpool-main](https://github.com/blockinator/qwertycoin-wiki-images/blob/master/mining/usingpool/qwcpool-main.png)

## Download Mining Software
Two of the best software programs to mine Qwertycoin with are [XMR-Stak](https://www.xmrstak.com/) and [XMRig](https://xmrig.com/).

Guides on setting up the mining software can be found here:
* [XMR-Stak](XMR-Stak)
* [XMRig](XMRIG)

## Connecting to the Mining Pool

![qwcpool-gettingstarted](https://github.com/blockinator/qwertycoin-wiki-images/blob/master/mining/usingpool/qwcpool-gettingstarted.png)

When connecting your mining software to your mining pool of your choice, you need to input the mining pool address and choose a port to mine to.[Pool.qwertycoin.org](http://pool.qwertycoin.org/)'s mining address is:

```
pool.qwertycoin.org
```

[Pool.qwertycoin.org](http://pool.qwertycoin.org/) also provides a variety of ports to connect to depending on your mining rig. There are options for CPUs, GPUs, ASICs and Nicehash. Those options are:

#### CPU ports
* 2222
* 3333

#### GPU ports
* 4444
* 5555

#### Nicehash ports
* 6666
* 7777

#### ASIC port
* 8888

* Here is an example mining pool address and port for a high end GPU rig

```
pool.qwertycoin.org:5555
```

* Enter that into your mining software config to connect to the mining pool.

## Viewing Miner Stats
You can view your miner stats by clicking the 'Miner Statistics' button on the left side of the webpage.

Enter your Qwertycoin wallet address and click 'Lookup'. It can take a few minutes for your miners to register with the pool.

From the 'Miner Statistics' page you will be able to see your miners hash rates as well as pending and paid balances.

![qwcpool-stats](https://github.com/blockinator/qwertycoin-wiki-images/blob/master/mining/usingpool/qwcpool-stats.png)
