---
title: Fix Sync Issues
---

* **Your Daemon stuck?**
* **Your GUI Wallet stuck?**
* **You see errors like these:**  
-One of outputs for one of inputs have wrong tx.unlockTime = 269549  
-Failed to handle_output for output no = 3, with absolute offset 103181  
-Failed to get output keys for tx with amount = 0.01000000 and count indexes 4  
-Failed to check ring signature for tx ace343256581b8e130[..]f109de8de
* Your Node is not sync with [network height](https://explorer.qwertycoin.org/q/height/)?

## How to fix sync issue

The simplest way is to add an additional checkpoint to your Qwertycoin Daemon.
If you're a Node- or a Pool owner you can copy a Checkpoint from here and paste it in a new line in your [CryptoNoteCheckpoints.h](https://github.com/qwertycoin-org/qwertycoin/blob/master/src/CryptoNoteCheckpoints.h) After saving the file you must build your project again.

You can start the Qwertycoin Daemon with a Checkpoint using `--load-checkpoints arg` Command. If you have a stuck GUI Wallet you have to quit it first and download the CLI client to continue. You can [download the CLI here](https://github.com/qwertycoin-org/qwertycoin/releases).

Download a checkpoint from [here](https://explorer.qwertycoin.org/q/checkpoint_csv) and start your Daemon with `--load-checkpoints checkpoint.csv` command. Please read our article about starting the daemon with checkpoints from CSV:  

[Start Daemon with additional Checkpoint](https://github.com/qwertycoin-org/qwertycoin/wiki/C04.-%7C-Load-Checkpoints-from-CSV)
