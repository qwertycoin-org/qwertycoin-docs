---
title: Load Checkpoints
---

You can start your Qwertycoin Daemon (>= 5.0.1) with a CSV which contains at least 1 Checkpoint.
This can be useful to solve synchronization problems.

A checkpoint is the combination of block height and the associated block hash. You can find these informations on our Explorer: [https://explorer.qwertycoin.org](https://explorer.qwertycoin.org)

Under `Recent blocks` you will find the Blocks and the corresponding Hashes.
This is an example Checkpoint:  
`269588,dd0e5f6232fde383e8249dfefb3d1d8e60834cac0edeeb26ce3179ee7fbbe7c6`

We have provided an API which automatically creates the most recent block in [checkpoint format](https://explorer.qwertycoin.org/q/checkpoint_raw). You can choose between a [single line](https://explorer.qwertycoin.org/q/checkpoint_raw/) that you can use to create the CSV yourself, or you can [download a CSV file](https://explorer.qwertycoin.org/q/checkpoint_csv) – checkpoint (CSV Export).

## How to start Daemon with Checkpoint.csv
1. [Download a checkpoint.csv from here](https://explorer.qwertycoin.org/q/checkpoint_csv)
2. Save this checkpoint.csv in the folder with your qwertycoind.exe
3. Open a CMD or a Terminal and launch your Daemon with the following command:  
`qwertycoind --load-checkpoints checkpoint.csv`
4. Your Daemon launch and you will see a message like this:  
`Loading checkpoints from file...`  
`Loaded 1 checkpoint from checkpoint.csv`

5. Your daemon will now sync without an error to the checkpoint height. If the error occurs again, repeat steps 1 to 5 with new checkpoint.
6. Done
