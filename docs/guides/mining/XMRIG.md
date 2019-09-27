---
title: XMRIG
---

## Downloading and installing on Windows
XMRig has separate miners for CPU and GPU so you will have to run separate instances for each if you want to run both.

#### GPU Miners:
* [Nvidia miner](https://github.com/xmrig/xmrig-nvidia/releases)
* [AMD Miner](https://github.com/xmrig/xmrig-amd/releases)

#### CPU Miner:
* [CPU Miner](https://github.com/xmrig/xmrig/releases)

## Downloading and building on Linux (Ubuntu 16.04)
### For CPU

```
sudo apt-get install git build-essential cmake libuv1-dev libmicrohttpd-dev libssl-dev
git clone https://github.com/xmrig/xmrig.git
cd xmrig
mkdir build
cd build
cmake ..
make
```

***Optional***
You can use gcc 7 for a small performance increase.

```
sudo add-apt-repository ppa:jonathonf/gcc-7.1
sudo apt-get update
sudo apt-get install gcc-7 g++-7
```

If the command ```add-apt-repository``` is not found, install ```software-properties-common``` first.

When running the cmake manually, specify C and C++ compiler:

```cmake .. -DCMAKE_C_COMPILER=gcc-7 -DCMAKE_CXX_COMPILER=g++-7```

### For Nvidia GPU

```
sudo apt-get install git build-essential cmake libuv1-dev nvidia-cuda-dev nvidia-cuda-toolkit libmicrohttpd-dev
git clone https://github.com/xmrig/xmrig-nvidia.git
cd xmrig-nvidia
mkdir build
cd build
cmake .. -DCUDA_ARCH="20;30;50"
make
```
### For AMD GPU

```
sudo apt-get install git build-essential cmake libuv1-dev libmicrohttpd-dev libssl-dev
git clone https://github.com/xmrig/xmrig-amd.git
mkdir xmrig-amd/build
cd xmrig-amd/build
cmake ..
make
```

## Downloading and building on Mac
With [Xcode](https://developer.apple.com/xcode/) and [Homebrew](https://brew.sh/) installed, run the following commands in a terminal:

```
brew install cmake libuv libmicrohttpd openssl
git clone https://github.com/xmrig/xmrig.git
cd xmrig
mkdir build
cd build
cmake .. -DOPENSSL_ROOT_DIR=/usr/local/opt/openssl
make
```

## Setup and Configuration
### For CPU and GPU
1. Unzip and extract the files into a new folder
2. Open the ```config.json``` file with your favorite text editor
3. Find and change the following lines:
* ```"algo: "cryptonight"```
* ```"url: "[pool address]"```
* ```"user: "[wallet address]"```
* ```"variant": 0```

You can generate a paper wallet [here](https://github.com/qwertycoin-org/qwertycoin/wiki/Making-a-Paper-Wallet) if you don't already have a Qwertycoin wallet yet.

You can find a list of Qwertycoin pools [here](https://explorer.qwertycoin.org/#pools).

4. Save the file and start ```xmrig.exe```.

**Remember:**  if you want to mine with both your CPU and your GPU you must have both programs open at the same time!

You can also use [this website](https://config.xmrig.com/xmrig) to generate your conf.json file.
