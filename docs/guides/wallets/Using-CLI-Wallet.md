---
title: Using CLI Wallet
---

CLI Wallet is a desktop platform software programmed to run on Windows, Mac or Linux operating system using Command Line Interface.

## Download source code
You can find the binary distributions [here](https://github.com/qwertycoin-org/qwertycoin/releases/latest).

From here you will be able to choose the appropriate file for your chosen platform (ex. Linux, Windows, Mac). The binaries are provided in .zip files.

## Install
### Linux
Extract the .zip file

```
upzip qwertycoin-linux-v5.0.0.zip
```
### Windows
Extract the .zip file

```
qwertycoin-win64-v5.0.0.zip
```
### Mac
Download .dmg file

## Syncing the blockchain
Running ```qwertycoind``` will start the network daemon which will start downloading and verifying the Qwertycoin blockchain.

This can take sometime because qwertycoind must verify every block.

### Syncing the blockchain using checkpoints
You can sync the blockchain much faster by using checkpoints.

#### Setup
* Right click [this link](https://github.com/qwertycoin-org/checkpoints/raw/master/checkpoints.csv) and choose ```Save link as...``` to download the latest checkpoints.csv.
* Place checkpoints.csv in the same folder as your Qwertycoind daemon
* You can get Qwertycoind from here if you don't have it already: https://github.com/qwertycoin-org/qwertycoin/releases
* Make sure you shut down any GUI wallets, or any other instances of Qwertycoind.

#### Usage
##### Linux, Apple
* First, open a command prompt in the same directory as Qwertycoind.
* You can use the ```cd``` command to change to this directory. For example, ```cd Downloads/qwertycoincoin-v3.0.1```
* Alternatively, your file manager may provide the ability to open a terminal in your current directory. Navigate to the folder with Qwertycoind in, and try right clicking, to see if you can open a terminal there:
* Finally, type ```./Qwertycoind --load-checkpoints checkpoints.csv``` in the terminal.

##### Windows
* First, open a command prompt in the same directory as Qwertycoind.
* This can easily be done by moving to the Qwertycoind directory in Windows Explorer, then typing ```cmd``` in the search bar and hitting enter:
* Finally, type Qwertycoind.exe --load-checkpoints checkpoints.csv in the command prompt.

#### Expected Output
If you did the steps correctly, you should see something like this output.

```
2018-May-13 11:58:39.654478 INFO    Welcome to Qwertycoind v3.0.1.1948 (HEAVY)
2018-May-13 11:58:39.654914 INFO    Module folder: Qwertycoind
2018-May-13 11:58:39.655249 INFO    Loading Checkpoints for faster initial sync...
2018-May-13 11:58:40.854979 INFO    Loaded 90695 checkpoints from checkpoints.csv
```
* Qwertycoind will then start syncing from checkpoints.
* If you are using the CLI wallet, then you can just wait for it to finish syncing, and open your wallet.
* If you are using a GUI wallet, let it finish syncing, close it down by typing ```exit``` in the window, then open your GUI wallet.

## Using simplewallet
With ```qwertycoind``` still running in the background or another terminal prompt, open simplewallet.

### Linux/Mac

```
./simplewallet
```

### Windows
Run the ```simplewallet.exe``` executable from the extracted folder.

## Simplewallet commands
### Generate a wallet
To create a wallet, type ```G``` and press ```enter``` and then answer the questions when prompted. I provided an example below.

```
What do you want to do?: g
O - open wallet
G - generate new wallet
I - import wallet from keys
R - restore backup/paperwallet
T - import tracking wallet
E - exit

Specify wallet file name (e.g., wallet.bin).
Wallet file name: testwallet
password: **********
confirm password: **********
Generated new wallet: QWC1PHRpPucbuQ9PGRG5n8TnGttFhdQ5yatecnQS9kz3F1Su2EodYiUBGVT3mwzpVfXkbTd6YEuR5J1ynrL8dBHP1SbYMGVDJ8
view key: 4f4572eacda8c813b7deb8614e0f7f317eed0de6779d38a51e4eed89eaf6f109
PLEASE NOTE: the following 25 words can be used to recover access to your wallet. Please write them down and store them somewhere safe and secure. Please do not store them in your email or on file storage services outside of your immediate control.

dialect vexed onion problems gadget jester kernels trolling boldly pegs knowledge sensible waveform bicycle guest paradise value pliers gnome quick unafraid network dwindling evaluate guest

[wallet QWC1fv]:
```

### Opening a wallet
To open an existing wallet; type ```o``` and press ```enter```. Enter your wallet's name and password when prompted.

### Additional commands and what they do
Commands:

  * **address** - Show current wallet public address

  * **balance**- Show current wallet balance

  * **bc_height** - Show blockchain height

  * **exit** - Close wallet

  * **export_keys** - Show the secret keys of the opened wallet

  * **get_tx_key** - Get secret transaction key for a given <txid>

  * **help** - Show this help

  * **incoming_transfers** - Show incoming transfers

  * **list_transfers** - Show all known transfers

  * **list_msgs** - Show all known messages

  * **outgoing_transfers** - Show outgoing transfers

  * **password** - Change password

  * **payment_id** - Generate random Payment ID

  * **payments** - **payments <payment_id_1> [<payment_id_2> ... <payment_id_N>]** - Show payments <payment_id_1>, ... <payment_id_N>

  * **reset** - Discard cache data and start synchronizing from the start

  * **save** - Save wallet synchronized data

  * **send_msg** - **send_msg <addr_1> <addr_N> -m "Here could be your Message" [-ttl 1 - 840 Minutes] [-fee fee] [-a 0 or 1]**  ttl means time to live, its for self-destructing Messages only. 0 or 1 for anonymity on or off, if 0 the receiver will not see the last 16 digits from your Address.

  * **set_log-set_log <level>** - Change current log level, <level> is a number 0-4

  * **show_seed** - Get wallet recovery phrase (deterministic seed)

  * **sign_message** - Sign the message

  * **start_mining** - start_mining [<number_of_threads>] - Start mining in daemon

  * **stop_mining** - Stop mining in daemon

  * **sweep_dust** - Sweep unmixable dust

  * **tracking_key** - Show the tracking key of the opened wallet

  * **transfer** - **transfer <mixin_count> <addr_1> <amount_1> [<addr_2> <amount_2> ... <addr_N> <amount_N>] [-p payment_id] [-f fee]** - Transfer <amount_1>,... <amount_N> to <address_1>,... <address_N>, respectively. <mixin_count> is the number of transactions yours is indistinguishable from (from 0 to maximum available)

  * **verify_message** - Verify a signature of the message
