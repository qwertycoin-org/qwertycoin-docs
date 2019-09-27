---
title: Using GUI Wallet
---

## Downloading
Binary distributions can be found [here](https://github.com/qwertycoin-org/qwertycoin-gui/releases).

Select the appropriate file for the target platform (Windows, Mac, Linux).

Windows and Mac binaries are provided in ```.zip``` format, while Linux binaries are provided in ```.tar.gz``` format.

## Installing
### Installing on Linux
Extract the ```.tar.gz``` file (```qwertycoin-gui-linux-v5.0.0.zip```).

### Installing on Mac
Download the ```.dmg``` file (```qwertycoin-gui-macos-high-sierra-v5.0.0.dmg```).

### Installing on Windows
Extract the ```.zip``` file (```qwertycoin-gui-win64-v5.0.0.zip```).

## Starting Wallet
### Linux
Double click ```qwertycoin-gui-linux-v5.0.0.zip``` and run executable.

### Mac
Double click ```qwertycoin-gui-macos-high-sierra-v5.0.0.dmg```.

If you have a blocking warning that says that this app comes from an unknown developer, right-click on the app, then click Open > Open.

### Windows
Double click ```qwertycoin-gui-win64-v5.0.0.zip``` and run the executable from the extracted files.

## Creating New Wallet
On the start screen you will have two options. Once is to create a new wallet and the second is to open an existing one. Click 'Create New Wallet'.

A popup will then appear with a mnemonic phrase. Repeat the phrase in the box below and click 'OK'.

**Make sure to write down the mnemonic phrase and store it in a safe place because that is how you restore your wallet!**

## Synchronizing the Blockchain
Once the wallet is created it will automatically start syncing from a public node to ensure that you can connect with the network quickly without using excessive storage.

You will not be able to use the wallet until it is fully synced.

## Using Wallet
### Encrypting wallet
By default your wallet is not encrypted. To encrypt it with a password go to the 'Wallet' tab and click 'Encrypt Wallet'. Next enter a password and confirm it then press 'OK' to finish.

### Viewing Wallet Address
Your wallet address can be seen at the top of the wallet as a string of numbers and letters beginning with 'QWC'.

### Exporting Keys
It is important to export your keys and save them in a safe place. In the event that your wallet crashes or becomes corrupted, the keys are the only way to restore a wallet and recover the funds that it holds.

To export, go to the 'Wallet' tab and click 'Export private key'. Copy your View and Spend secret keys and store them in a safe place.

**Do not share these with anyone!**

### Viewing Wallet Balance
You can view your wallet balance by pressing the 'Overview' button on the left hand side of the wallet.

### Sending Qwertycoin
You can send QWC by clicking the 'Send' button on the left side of the wallet. To send QWC paste the wallet address of the person you are sending funds to in the 'Pay to' box.

Next enter the amount that you would like to send into the amount box.

When you are done click the 'Send' button at the bottom left of the screen.

### Saving Wallet
To safely close your wallet click the 'x' button at the top of the wallet.

### Restoring from Backup
#### Private View and Spend Keys
You can easily restore your wallet with your private view and spend keys.

To restore, click on 'Wallet' tab and press 'Import private key'. Paste in your private key and enter where you would like to save the file and click 'OK'.

The wallet will be restored and begin syncing with the blockchain.

#### 25 Word Mnemonic Seed
If you want to recover your wallet with your mnemonic phrase, it's pretty easy as well.

To restore, go to the 'Wallet' tab and click 'Restore from mnemonic seed'. Enter your phrase and indicate where you would like to save the new wallet file. Click 'OK' when you are finished.

The wallet will be restored and begin syncing with the blockchain.


## ***(Optional)*** Compiling wallet from source

### Prerequisites
* You will need the following packages: boost (1.55 or higher), QT Library (5.9.0 orhigher) cmake, git, gcc (4.9 or higher), g++ (4.9 or higher), make, and python. Most of these should already be installed on your system.
* For example on ubuntu: ```sudo apt-get install build-essential python-dev gcc g++ git cmake libboost-all-dev qtbase5-dev```
* After this you can compile your Qwertycoin

### 1. Clone wallet sources

```git clone https://github.com/qwertycoin-org/qwertycoin-gui```

### 2. Set symbolic link to coin sources at the same level as src. For example:

```ln -s ../qwertycoin cryptonote```

Alternative way is to create git submodule:

```git submodule add https://github.com/qwertycoin-org/qwertycoin.git cryptonote```

### 3. Build

```mkdir build && cd build && cmake .. && make```
