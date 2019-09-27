---
title: Using RPC Wallet
---

== Overview ==
Qwertycoin RPC Wallet is a HTTP server which provides JSON 2.0 RPC interface for Qwertycoin payment operations and address management. Qwertycoin RPC Wallet allows you to accept incoming payments, generate an address for each user via Qwertycoin RPC Wallet JSON RPC API and much more. [Wallet-RPC-API.md RPC Wallet API] page contains detailed description of every method.
__TOC__

== Download Qwertycoin RPC Wallet ==
Before you begin the integration process you will need to first download the Qwertycoin RPC Wallet. You can find the download here: https://qwertycoin.org/wallet/

Or if you would rather build it from source code, you can do that here: https://github.com/qwertycoin-org/qwertycoin


== Generate a new wallet ==
Once you have compiled or built the RPC wallet you are going to want to generate a container. The container file is the only file that stores all the data required to run your service. It contains the user addresses and private keys required to operate them. '''Make sure to backup this file regularly'''.

To generate a new container you should run the following command in your terminal:

 $ ./walletd --container-file=<mycontainer> --container-password=<mypassword> --generate-container

where:
* '''<mycontainer>''' is the container file name and a path to it (relative or absolute); path is optional in this argument, specifying only a container's name will result in new file located in the same folder as RPC Wallet
* '''<mypass>''' is a secret password for the new wallet file. Whichever you like;
* '''--generate-container''' option tells RPC wallet to generate container file and exit.

'''Note:''' if '''<mycontainer>''' exists Qwertycoin RPC Wallet will show you the notification and will ask you to provide a different name.

If the container generation was successful you will get a corresponding message with your new Qwertycoin address. At the same time, Qwertycoin RPC Wallet will save your container on the local disk (in the same folder where Qwertycoin RPC Wallet is located) and shut down.


== Starting Qwertycoin RPC Wallet ==
There are two ways to start Qwertycoin RPC wallet:

=== 1. Start with a remote connection to the Daemon ===
Starting with a remote connection allows you to bind your Qwertycoin RPC Wallet to a remote Qwertycoin daemon (Qwertycoind). This type of connection allows you to start Qwertycoin RPC Wallet on a relatively slow machine while a heavy loaded daemon runs on a separate more powerful server.

* For local daemons use localhost or 127.0.0.1 as an IP address.
* For remote daemons specify the remote daemon's IP address.
* The default Qwertycoin daemon ports are 8196 and 8197.

You can use the following command to start Qwertycoin RPC Wallet with a remote connection:

 $ ./walletd --container-file=mycontainer --container-password=mypassword --daemon-address=remote_ip --daemon-port=8197

'''Note:''' The Qwertycoin daemon (Qwertycoind) should be running before you start the RPC wallet.

'''Note:''' Qwertycoin RPC Wallet will still provide some functionality even if Daemon server fails. For example, you will be able to generate addresses for your users.


=== 2. Start as in-process node ===
If you don't want to start the RPC Wallet with a remote daemon, you can start it with an in-process node instead. This allows you to start the RPC Wallet out-of-box with no external daemon required. You will still get a fully functional node for Qwertycoin network inside Qwertycoin RPC Wallet. You don't have to download or install anything besides Qwertycoin RPC Wallet to use this feature. This approach can help reduce the overhead cost required for infrastructure maintenance.

You can use the following command to start Qwertycoin RPC Wallet with an in-process node:

 $ ./walletd --container-file=mycontainer --container-password=mypassword --local


== How to configure Qwertycoin RPC Wallet ==
You can use both the command line and a config file to configure your RPC Wallet. A config file allows you to configure your settings only once and use "--config" option further. The command below launches Qwertycoin RPC Wallet with a specific config file:

=== 1. Starting with a Config File ===
The command below launches Qwertycoin RPC Wallet with a specific config file:

  $ ./walletd --config=/home/Downloads/myconfig.conf

To get help on available options run:

  $ ./walletd -h

Please note, Qwertycoin RPC Wallet config file may consist only of these options:

{| cellspacing="0" cellpadding="5" border="1"
! Option
! Description
! Config Example
! Console Example
|-
| bind-address
| Which address to bind Qwertycoin RPC Wallet to. Default value is 0.0.0.0
| bind-address = 127.0.0.1
| --bind-address=127.0.0.1
|-
| bind-port
| Which port to bind Qwertycoin RPC Wallet to. Default value is 8070
| bind-port = 8071
| --bind-port=8071
|-
| daemon-address
| Qwertycoin daemon (Qwertycoind) address for remote daemon connection infrastructure
| daemon-address = 127.0.0.1
| --daemon-address=127.0.0.1
|-
| daemon-port
| Qwertycoin daemon (Qwertycoind) port for remote daemon connection infrastructure. Default Qwertycoin daemon ports are 8196 and 8197
| daemon-port = 8197
| --daemon-port=8197
|-
| container-file
| '''Mandatory'''. Your container's file name
| container-file = mycontainer
| --container-file=mycontainer
|-
| container-password
| '''Mandatory'''. Your container's password
| container-password = mypassword
| --container-password=mypassword
|-
| log-file
| A name of log file that you want to use for logging. Default is walletd.log
| log-file = mylog.log
| --log-file=mylog.log
|-
| server-root
| Working directory that you wish to use for Qwertycoin RPC Wallet. Default is current working directory.
| server-root = /home/Downloads/RPCWallet
| --server-root=/home/Downloads/RPCWallet
|-
| log-level
| Level of logging. Default is 1.
| log-level = 2
| --log-level=2
|-
| testnet
| Allows you to run Qwertycoin RPC Wallet in testnet.
| testnet = no
| --testnet=no
|-
| local
| Option that allows you to start Qwertycoin RPC Wallet as an in-process node
| local
| --local
|}


Here's an example of a config file:

  $ cat rpc_wallet.conf
  container-file = mycontainer
  container-password = mypassword
  daemon-port = 8197
  bind-port = 8050
  testnet = no


=== 2. Starting with console arguments ===
You may specify Qwertycoin config directly through console arguments. Here's the same example as above in console:

 $ ./walletd --container-file=mycontainer --container-password=mypassword --daemon-port=8197 --bind-port=8050 --testnet=no

'''Note:''' config file's path is relative to current working directory, not server root.

'''Note:''' options "container-file" and "container-password" should ALWAYS be set (in either command line or config file mode).

'''Note:'''' "container-file" and "log-file" options are relative to "server-root". "server-root" default is the current working directory.

== How to run the Qwertycoin RPC Wallet ==
The Qwertycoin RPC wallet can be started in both daemon and console modes.

* '''Daemon mode''' - Qwertycoin RPC Wallet is launched in the background, while you can continue to work with a console window.

* '''Console mode''' - Qwertycoin RPC Wallet is launched and prints log messages on the screen.

'''The Qwertycoin RPC wallet starts in console mode by default.'''

=== Start as daemon (UNIX only) ===

To start RPC wallet as daemon just set "--daemon" (or short "-d") option.

 $ ./walletd --container-file=mycontainer --container-password=mypassword --daemon

'''Note:''' it's a common practice for daemons to set in the server's root directory.

Server root is the directory where RPC Wallet stores all its files. All relative paths in RPC Wallet configuration are relative to the server root directory.

=== Start as service (Windows only) ===

To run RPC wallet as a service on Windows you have to do the following:

1. Create a config file and place it in the same directory where your RPC wallet's executable resides in.

A note for Windows Users: In case the server root in config file is not specified all paths should be ABSOLUTE. If you set server root you can use relative paths (relative to your server root);

2. Register your Qwertycoin RPC Wallet as a service. To do so, run the following command as an ADMINISTRATOR:

 $ walletd.exe --register-service

3. After you see message about successful service registration you can run it in your Services panel.

=== Uninstall service (Windows only) ===

If you want to delete RPC Wallet you have to unregister the Windows service first (if you have registered it before). Run as an ADMINISTRATOR:

 $ walletd.exe --unregister-service

== Qwertycoin RPC Wallet JSON RPC API ==
The Qwertycoin RPC Wallet API allows you to create addresses for your users, accept and send transactions and much more.

A detailed description for every Qwertycoin RPC Wallet API method can be found here: [https://github.com/qwertycoin-org/qwertycoin/wiki/B12.-Wallet-%7C-RPC-Wallet-API RPC Wallet API]
