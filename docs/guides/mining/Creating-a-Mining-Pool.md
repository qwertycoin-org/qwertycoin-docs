---
title: Creating a Mining Pool
---

## Prepare Server
### Create AWS Account
Create an account with [Amazon AWS](https://portal.aws.amazon.com/billing/signup?nc2=h_ct&src=default&redirect_url=https%3A%2F%2Faws.amazon.com%2Fregistration-confirmation#/start).

![pool-aws](https://github.com/blockinator/qwertycoin-wiki-images/blob/master/mining/creatingpool/pool-aws.png)

### Setup Instance
On the home page, click the services tab and then go to compute and click 'EC2'. Once you are there you will chose your region on the top of the page in the header section. Next click the 'Launch Instance' button at the center of the page and then select an AMI. For this tutorial I am using Ubuntu Server 16.04 LTS.

![pool-choose](https://github.com/blockinator/qwertycoin-wiki-images/blob/master/mining/creatingpool/pool-choose.png)

Next you will need to choose an instance type. I am just going to use the t2.large for the tutorial.

![pool-choosetype](https://github.com/blockinator/qwertycoin-wiki-images/blob/master/mining/creatingpool/pool-choosetype.png)

You can then skip to step six and under the source tap select my IP.

![pool-security](https://github.com/blockinator/qwertycoin-wiki-images/blob/master/mining/creatingpool/pool-security.png)

Next press Review and Launch and then create a new key pair to be able to connect with your instance. Once the instance is live, you can connect to your instance using an SSH through Terminal, PuTTY or similar program.

![pool-createkey](https://github.com/blockinator/qwertycoin-wiki-images/blob/master/mining/creatingpool/pool-createkey.png)

### SSH into instance
1. Download key pair that you created earlier

2. Make sure you are in the same directory as the key and allow permissions

```
chmod 600 <key-name>.pem
```

3. SSH into instance

```
ssh -i <key-name>.pem ubuntu@<EC2-IP-Address>
```

### Install dependancies

```
sudo apt-get install aptitude
```

```
sudo aptitude update
```

```
sudo aptitude install –with-recommends build-essential autotools-dev autoconf automake libcurl3 libcurl4-gnutls-dev git make cmake libssl-dev pkg-config libevent-dev libunbound-dev libminiupnpc-dev doxygen supervisor jq libboost-all-dev htop
```

```
sudo apt-get install build-essential libtool autotools-dev autoconf pkg-config libssl-dev
```

```
sudo apt-get install libboost-all-dev git npm nodejs nodejs-legacy libminiupnpc-dev redis-server
```

```
add-apt-repository ppa:bitcoin/bitcoin
```

```
sudo apt-get update
```

```
apt-get install libdb4.8-dev libdb4.8++-dev
```

```
curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh -o install_nvm.sh
```

```
bash install_nvm.sh
```

* After npm is installed you will have to log out and then back into your instance and continue installing dependancies.

```
source ~/.profile
```

```
nvm install 0.10.48
```

```
nvm use 0.10.48
```

```
nvm alias default 0.10.48
```

```
nvm use default
```

* Install Apache2 for hosting the front end.

```
sudo apt-get update
```

```
sudo apt-get install apache2
```

* Adjust firewall to allow Apache full.

```
sudo ufw allow 'Apache Full'
```

## Install Qwertycoin

```
git clone --recurse-submodules https://github.com/qwertycoin-org/qwertycoin
```
```
cd ./qwertycoin
```
```
mkdir ./build
```
```
cd ./build
```
```
cmake ..
```
```
cmake --build . --config Release
```

### Start daemon and let it sync

```
 cd build/src
```

```
tmux
```

```
./qwertycoind
```

* Let the blockchain sync before continuing
* To sync the blockchain faster follow [this guide](https://github.com/qwertycoin-org/qwertycoin/wiki/C04.-%7C-Load-Checkpoints-from-CSV)

* control b + d to exit tmux

### Start simple wallet and follow steps to generate a new simplewallet

* After you generated a new wallet exit it and run this:

```
tmux
```
```
./simplewallet --wallet-file <wallet_name> --password <wallet_password> --rpc-bind-port 8198
```
* control b + d to exit tmux

## Install pool software
### Install dependancies

```
sudo apt-get install libssl-dev libboost-all-dev
```
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash
```
```
sudo apt-get install -y nodejs
```
```
sudo add-apt-repository ppa:chris-lea/redis-server
```
```
sudo apt-get update
```
```
sudo apt-get install redis-server
```

* Clone repository

```
git clone https://github.com/dvandal/cryptonote-nodejs-pool.git pool
```
```
cd pool && npm update
```

### Pool Configuration
* Copy the ```config_examples/qwertycoin.json``` file to ```config.json```

```
cp config_examples/qwertycoin.json config.json
```

Change the following variables:
Line 2 -  Pool host to your pools IP Address
Line 30 - Your simplewallet address that you generated
Line 138 - Set your API password
Line 125-127 - (Optional) change pool fees

### Copy website_example files to html directory

```
sudo cp -rf js/ lang/ pages/ themes/ admin.html config.js index.html /var/www/html
```

### Configuring website_example
* Edit ```config.js``` to use your pool's specific configuration

![pool-config](https://github.com/blockinator/qwertycoin-wiki-images/blob/master/mining/creatingpool/pool-config.png)

### Start the mining pool
```
cd && cd pool
```
```
node init.js
```

* Your pool should now be visible at your server's IP address

* You can visit your admin page by appending ```admin.html``` to your server IP address in your browsers search bar like so:

```http://server-ip-address/admin.html```

* Your admin password is your API password you set earlier in ```config.json```
