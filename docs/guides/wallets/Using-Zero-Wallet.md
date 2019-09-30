---
title: Using Zero Wallet
---

## Downloading
Binary distributions can be found [here](https://github.com/qwertycoin-org/qwertycoin-zero/releases).

Select the appropriate file for the target platform (Windows, Mac, Linux).

Windows and Linux binaries are provided in ```.zip``` format, while Mac binaries are provided in ```.dmg``` format.

## Installing
### Installing on Linux
Extract the ```.zip``` file (```qwertycoin-zero-linux-v1.1.3.zip```).

### Installing on Mac
Download the ```.dmg``` file (```qwertycoin-zero-macos-high-sierra-v1.1.3.dmg```).

### Installing on Windows
Extract the ```.zip``` file (```qwertycoin-zero-win64-v1.1.3.zip```).

## Starting Wallet
### Linux
Double click ```qwertycoin-zero-linux-v1.1.3.zip``` and run executable.

### Mac
Double click ```qwertycoin-zero-macos-high-sierra-v1.1.3.dmg```.

If you have a blocking warning that says that this app comes from an unknown developer, right-click on the app, then click Open > Open.

### Windows
Double click ```qwertycoin-zero-win64-v1.1.3.zip``` and run the executable from the extracted files.

## Creating New Wallet
On the start screen you will have two options. Once is to create a new wallet and the second is to open an existing one. Click 'Create New Wallet'.

![zero-create](https://github.com/blockinator/qwertycoin-wiki-images/blob/master/wallets/zerowallet/zero-create.png)

A popup will then appear with a mnemonic phrase.

**Make sure to write down the mnemonic phrase and store it in a safe place because that is how you restore your wallet!**

## Synchronizing the Blockchain
Once the wallet is created it will automatically start syncing from a remote node to ensure that you can connect with the network quickly without using excessive storage. The Zero wallet doesn't download the entire blockchain like the GUI wallet that requires you to download the entire blockchain before using the wallet.

You will not be able to use the zero wallet until it has finished syncing.

## Using Wallet
### Encrypting wallet
By default your wallet is not encrypted. To encrypt it with a password click the 'Set password' button under your wallet address at the top of the screen. Click 'OK' to confirm.

![zero-pswd](assets/wallets/zerowallet/zero-pswd.png)

### Viewing Wallet Address
Your wallet address can be seen at the top of the wallet as a string of numbers and letters beginning with 'QWC'.

### Exporting Keys
It is important to export your keys and save them in a safe place. In the event that your wallet crashes or becomes corrupted, the keys are the only way to restore a wallet and recover the funds that it holds.

To export, go to the 'Wallet' tab and click 'Export private key'. Copy your View and Spend secret keys and store them in a safe place.

![zero-savepvt](assets/wallets/zerowallet/zero-savepvt.png)

**Do not share these with anyone!**

### Viewing Wallet Balance
You can view your wallet balance by pressing the 'Overview' button on the left hand side of the wallet.

### Sending Qwertycoin
You can send QWC by clicking the 'Send' button on the left side of the wallet. To send QWC paste the wallet address of the person you are sending funds to in the 'Pay to' box.

Next enter the amount that you would like to send into the amount box.

(optional):
You can also set the priority of the transaction (pay a higher fee to send it faster) or add more anonymity to it.

When you are done click the 'Send' button at the bottom left of the screen.

![zero-send](assets/wallets/zerowallet/zero-send.png)

### Saving Wallet
To safely close your wallet click the 'x' button at the top of the wallet.

### Restoring from Backup
#### Private View and Spend Keys
You can easily restore your wallet with your private view and spend keys.

To restore, click on 'Wallet' tab and press 'Import private key'. Paste in your private key and enter where you would like to save the file and click 'OK'.

The wallet will be restored and begin syncing with the blockchain.

![zero-pvtimport](assets/wallets/zerowallet/zero-pvtimport.png)

#### Mnemonic Seed
If you want to recover your wallet with your mnemonic phrase, it's pretty easy as well.

To restore, go to the 'Wallet' tab and click 'Restore from mnemonic seed'. Enter your phrase and indicate where you would like to save the new wallet file. Click 'OK' when you are finished.

The wallet will be restored and begin syncing with the blockchain.

![zero-mnemimport](assets/wallets/zerowallet/zero-mnemimport.png)

## ***(Optional)*** Compiling wallet from source

### Prerequisites Linux (Ubuntu)
* You will need the following packages: boost (1.64 or higher), QT Library (5.9.0 or higher) cmake (3.10 or higher), git, gcc (4.9 or higher), g++ (4.9 or higher), make, and python. Most of these should already be installed on your system.
* For example on ubuntu: ```sudo apt-get install build-essential python-dev gcc g++ git cmake libboost-all-dev qtbase5-dev```
* After this you can build your Qwertycoin Zero Wallet.

#### Building
* After installing dependencies run simple script:

```
git clone --recurse-submodules https://github.com/qwertycoin-org/qwertycoin-zero
cd ./qwertycoin-zero
mkdir ./build
cd ./build
cmake ..
cmake --build . --config Release
```

* If all went well, it will complete successfully, and you will find all your binaries in the ```./build/Release directory.```

### Prerequisites Mac
* Install Xcode and Developer Tools
* Install [cmake](https://cmake.org/). See [here](https://stackoverflow.com/questions/23849962/cmake-installer-for-mac-fails-to-create-usr-bin-symlinks) if you are unable to call ```cmake``` from the terminal after installing
* Install git

#### Building
* After installing dependencies run simple script:

```
git clone https://github.com/qwertycoin-org/qwertycoin-zero
cd ./qwertycoin-zero
mkdir ./build
cd ./build
cmake ..
cmake --build . --config Release
```

* If all went well, it will complete successfully, and you will find all your binaries in the ./build/Release directory.

### Prerequisites Windows
* Install [Visual Studio 2017 Community Edition](Visual Studio 2017 Community Edition).
* When installing Visual Studio, it is **required** that you install **Desktop development with C++** and the **VC++ v140 toolchain** when selecting features. The option to install the v140 toolchain can be found by expanding the "Desktop development with C++" node on the right. You will need this for the project to build correctly.
* Make sure that bundled cmake version is 3.10 or higher.

#### Building
* From the start menu, open "x64 Native Tools Command Prompt for vs2017" and the run the following commands:
```
git clone https://github.com/qwertycoin-org/qwertycoin-zero
cd qwertycoin-zero
md build
cd build
cmake -G "Visual Studio 15 2017 Win64" ..
cmake --build . --config Release
```

* If all went well, it will complete successfully, and you will find all your binaries in the ```.\build\Release``` directory.
* Additionally, a ```.sln``` file will have been created in the ```build``` directory. If you wish to open the project in Visual Studio with this, you can.
