---
title: Hosting Faucet
---

## Installation
This faucet runs on a Linux environment with PHP and MYSQL, and was tested on Ubuntu 15.04 with PHP 5.6.4 and MariaDB 5.5.

The faucet is set to work on the same server as the Qwertycoin wallet and Qwertycoin daemon.

### Clone the repository
The first step is to clone the Qwertycoin faucet repository.

```
git clone https://github.com/qwertycoin-org/qwertycoin-faucet.git
```

## Configuration
### Create a database
Next you will need to create a new database and create this table on it for the faucet to save all requests:

```
CREATE TABLE `payouts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `ip_address` varchar(45) NOT NULL,
  `payout_amount` float NOT NULL,
  `payout_address` varchar(100) NOT NULL,
  `payment_id` varchar(75) NOT NULL,
  `timestamp` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `payouts`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `payouts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;
```

### Edit the ```config.php``` file
After you create your database you will need to edit the ```config.php``` file with all your custom parameters and database information.

## Install and run Qwertycoin daemon and simplewallet
The Qwertycoin faucet requires that you run qwertycoind and simplewallet. You can find the precompiled Qwertycoin binaries [here](https://github.com/qwertycoin-org/qwertycoin/releases).

Once it is downloaded you can start the Qwertycoin daemon like so:

```
./qwertycoind --restricted-rpc --enable-cors=*  --enable-blockchain-indexes --rpc-bind-ip=0.0.0.0
```

Now start simplewallet and follow the steps to create a wallet. Make sure to write down your private keys and store them in a safe place.

For the faucet to be able to communicate with the Qwertycoin wallet, you need to run simplewallet like so:

```
./simplewallet --wallet-file=walletName --pass=password --rpc-bind-port=18070 --rpc-bind-ip=127.0.0.1
```

*Note: Run this command after you have already created a wallet.*

* ```wallet.bin``` needs to be the wallet file name that you enter when you created your wallet.
* ```password``` needs to be the password to open your wallet
* ```rpc-bind-port``` and ```rpc-bind-ip``` can be changed if so, you need to edit index.php and request.php (Please don't edit, as you may end up opening the wallet rpc to the public)

*To keep qwertycoind and simplewallet running in the background you can use the ```screen``` command.*

## Running Ads *(optional)*
Advertisements can be edited in the ```index.php``` file. They are between these lines for an easy location:

```
       <!-- ADS ADS ADS ADS ADS ADS ADS ADS ADS -->
       <!-- ADS ADS ADS ADS ADS ADS ADS ADS ADS -->
```

After all these steps you should be ready to go.
