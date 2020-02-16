---
title: Wallet RPC API
---

On this page you will find description of every method in Qwertycoin RPC Wallet API. Qwertycoin RPC Wallet is a HTTP server which provides JSON 2.0 RPC interface for Qwertycoin payment operations and address management. Each method has its own page that can be found by clicking on this method.

More on how to start and operate Qwertycoin RPC Wallet can be found here: [Using-RPC-Wallet.md Qwertycoin RPC Wallet].

To make a JSON PRC request to your Qwertycoin RPC Wallet you should use POST request that looks like this:

```
 http://<service address>:<service port>/json_rpc
```

Where:
* <service address> is an IP of Qwertycoin RPC Wallet, if RPC Wallet is located on local machine it is either 127.0.0.1 or localhost,
* <service port> is Qwertycoin RPC Wallet port, by default it is binded to 8070 port, but it can be manually binded to any port you want, read more about this


## Reset

**reset()** method allows you to re-sync your wallet.


Input.

| Argument      | Mandatory | Description      | Format | Example                                                          |
|---------------|-----------|------------------|--------|------------------------------------------------------------------|
| viewSecretKey | No        | Private view key | string | 4a2583e42d010e8aabfed22743789569714196246bf01b5f2fec35af9232d907 |


No output in case of success.


**Important:** If the view_secret_key was not pointed out reset() methods resets the wallet and re-syncs it. If the view_secret_key argument was pointed out reset() method substitutes the existing wallet with a new one with a specified view_secret_key and creates an address for it.


Input value example:
```
 {  
   'params':{  
      'viewSecretKey':'4a2583e42d010e8aabfed22743789569714196246bf01b5f2fec35af9232d907'
   },
   'jsonrpc':'2.0',
   'id':'test',
   'method':'reset'
 }
```
Output value example:
```
 {  
   'jsonrpc':'2.0',
   'id':'test',
   'result':{  
   }
 }
```

## Save

**save()** method allows you to save your wallet by request.


No input.

No output in case of success.


Input value example:
```
 {  
   'params':{  
   },
   'jsonrpc':'2.0',
   'id':'test',
   'method':'save'
 }
```
Output value example:
```
 {  
   'jsonrpc':'2.0',
   'id':'test',
   'result':{  
   }
 }
```

## Get view key

**getViewKey()** method returns your view key.


No input.


Output:

| Argument      | Description      | Format | Example                                                          |
|---------------|------------------|--------|------------------------------------------------------------------|
| viewSecretKey | Private view key | string | 4a2583e42d010e8aabfed22743789569714196246bf01b5f2fec35af9232d907 |


Input Example:
```
 {  
   'params':{  
   },
   'jsonrpc':'2.0',
   'id':'test',
   'method':'getViewKey'
 }
```

Return value example:
```
 {  
   'jsonrpc':'2.0',
   'id':'test',
   'result':{  
      'viewSecretKey':'4a2583e42d010e8aabfed22743789569714196246bf01b5f2fec35af9232d907'
   }
 }
```

## Get spend keys

**getSpendKeys()** method returns your spend keys.


| Argument | Mandatory | Description                                  | Format | Example                                                                                         |
|----------|-----------|----------------------------------------------|--------|-------------------------------------------------------------------------------------------------|
| address  | Yes       | Valid and existing in this container address | string | KfXkT5VmdqmA7bWqSH37p87hSXBdTpTogN4mGHPARUSJaLse6jbXaVbVkLs3DwcmuD88xfu835Zvh6qBPCUXw6CHK8koDCt |

Output:

| Argument       | Description       | Format | Example                                                          |
|----------------|-------------------|--------|------------------------------------------------------------------|
| spendSecretKey | Private spend key | string | 4a2583e42d010e8aabfed22743789569714196246bf01b5f2fec35af9232d907 |
| spendPublicKey | Public spend key  | string | 4a2583e42d010e8aabfed22743789569714196246bf01b5f2fec35af9232d907 |


Input Example:
```
 {  
   'params':{  
      'address':'KfXkT5VmdqmA7bWqSH37p87hSXBdTpTogN4mGHPARUSJaLse6jbXaVbVkLs3DwcmuD88xfu835Zvh6qBPCUXw6CHK8koDCt'
   },
   'jsonrpc':'2.0',
   'id':'test',
   'method':'getSpendKeys'
 }
```

Return value example:
```
 {  
   'jsonrpc':'2.0',
   'id':'test',
   'result':{  
      'spendSecretKey':'4a2583e42d010e8aabfed22743789569714196246bf01b5f2fec35af9232d907'
      'spendPublicKey':'4a2583e42d010e8aabfed22743789569714196246bf01b5f2fec35af9232d907'
   }
 }
```

## Get addresses

**getAddresses()** method returns an array of your RPC Wallet's addresses.


No input.


Output:

| Argument  | Description                                        | Format | Example   |
|-----------|----------------------------------------------------|--------|-----------|
| addresses | Array of strings, where each strings is an address | array  | See below |


Input example:
```
 {  
   'params':{  
   },
   'jsonrpc':'2.0',
   'id':'test',
   'method':'getAddresses'
 }
```
Output example:
```
 {  
   'jsonrpc':'2.0',
   'id':'test',
   'result':{  
      'addresses':[  
         'KfXkT5VmdqmA7bWqSH37p87hSXBdTpTogN4mGHPARUSJaLse6jbXaVbVkLs3DwcmuD88xfu835Zvh6qBPCUXw6CHK8koDCt',
         'KfXkT5VmdqmA7bWqSH37p87hSXBdTpTogN4mGHPARUSJaLse6jbXaVbVkLs3DwcmuD88xfu835Zvh6qBPCUXw6CHK8koDCt'
      ]
   }
 }
```

## Create address

**createAddress()** method creates an additional address in your wallet.


Input:

| Argument       | Mandatory | Description                                                                          | Format | Example |
|----------------|-----------|--------------------------------------------------------------------------------------|--------|---------|
| secretSpendKey | No        | Private spend key. If secretSpendKey was specified, RPC Wallet creates spend address | string |         |
| publicSpendKey | No        | Public spend key. If publicSpendKey was specified, RPC Wallet creates view address   | string |         |

**Note:** If none of the above mentioned parameters were specified, RPC Wallet creates spend address with generated spend key.

**Note:** both above mentioned parameters can't be present in a single request


Output:

| Argument | Description     | Format | Example                                                                                         |
|----------|-----------------|--------|-------------------------------------------------------------------------------------------------|
| address  | Created address | string | KfXkT5VmdqmA7bWqSH37p87hSXBdTpTogN4mGHPARUSJaLse6jbXaVbVkLs3DwcmuD88xfu835Zvh6qBPCUXw6CHK8koDCt |


Input value example:
```
 {  
   'params':{  
   },
   'jsonrpc':'2.0',
   'id':'test',
   'method':'createAddress'
 }
```
Output value example:
```
 {  
   'jsonrpc':'2.0',
   'id':'test',
   'result':{  
      'address':'KfXkT5VmdqmA7bWqSH37p87hSXBdTpTogN4mGHPARUSJaLse6jbXaVbVkLs3DwcmuD88xfu835Zvh6qBPCUXw6CHK8koDCt'
   }
 }
```

## Delete address

**deleteAddress()** method deletes a specified address.


Input:

| Argument | Mandatory | Description               | Format | Example                                                                                         |
|----------|-----------|---------------------------|--------|-------------------------------------------------------------------------------------------------|
| address  | Yes       | An address to be deleted. | string | KfXkT5VmdqmA7bWqSH37p87hSXBdTpTogN4mGHPARUSJaLse6jbXaVbVkLs3DwcmuD88xfu835Zvh6qBPCUXw6CHK8koDCt |


Output:

In case of success returns an empty JSON object.


Input example:
```
 {  
   'params':{  
      'address':'KfXkT5VmdqmA7bWqSH37p87hSXBdTpTogN4mGHPARUSJaLse6jbXaVbVkLs3DwcmuD88xfu835Zvh6qBPCUXw6CHK8koDCt'
   },
   'jsonrpc':'2.0',
   'id':'test',
   'method':'deleteAddress'
 }
```
Output example:
```
 {  
   'jsonrpc':'2.0',
   'id':'test',
   'result':{  
   }
 }
```


## Get balance

**getBalance()** method returns a balance for a specified address.

**Please note:** If address is not specified, returns a cumulative balance of all RPC Wallet's addresses.


Input:

| Argument | Mandatory | Description                                          | Format | Example                                                                                         |
|----------|-----------|------------------------------------------------------|--------|-------------------------------------------------------------------------------------------------|
| address  | No        | Valid and existing address in this particular wallet | string | KfXkT5VmdqmA7bWqSH37p87hSXBdTpTogN4mGHPARUSJaLse6jbXaVbVkLs3DwcmuD88xfu835Zvh6qBPCUXw6CHK8koDCt |

Output:

| Argument         | Description                                | Format | Example |
|------------------|--------------------------------------------|--------|---------|
| availableBalance | Available balance of the specified address | uint64 | 123123  |
| lockedAmount     | Locked amount of the specified address     | uint64 | 123123  |


Input example:
```
 {  
   'params':{  
      'address':'KfXkT5VmdqmA7bWqSH37p87hSXBdTpTogN4mGHPARUSJaLse6jbXaVbVkLs3DwcmuD88xfu835Zvh6qBPCUXw6CHK8koDCt'
   },
   'jsonrpc':'2.0',
   'id':'test',
   'method':'getBalance'
 }
```
Output example:
```
 {  
   'jsonrpc':'2.0',
   'id':'test',
   'result':{  
      'lockedAmount':210,
      'availableBalance':110
   }
 }
```


## Get block hashes

**getBlockHashes()** method returns an array of block hashes for a specified block range.


Input:

| Argument        | Mandatory | Description                 | Format | Example |
|-----------------|-----------|-----------------------------|--------|---------|
| firstBlockIndex | Yes       | Starting height             | uint32 | 123123  |
| blockCount      | Yes       | Number of blocks to process | uint32 | 20      |

Output:

| Argument    | Description                                          | Format | Example |
|-------------|------------------------------------------------------|--------|---------|
| blockHashes | Array of strings, where each element is a block hash | array  | example |


Input example:
```
 {  
   'params':{  
      'blockCount':11,
      'firstBlockIndex':0
   },
   'jsonrpc':'2.0',
   'id':'test',
   'method':'getBlockHashes'
 }
```
Output example:
```
 {  
   'jsonrpc':'2.0',
   'id':'test',
   'result':{  
      'blockHashes':[  
         '8a6f1cb7ed7a9db4751d7b283a0482baff20567173dbfae136c9bceb188e51c4',
         '657cd1c33df7f4250d581c97db665cb4a1856ebfadd6efabaeab745c2c76b1be',
         '21047174f74576b6722e72646d7bd553e17d7c9f07fef05151bb1f9df7ed9dd8',
         '504b9bfb2cd34531551cb2d68ea3e34e030d991164589ba7ed24e16fed3ea374',
         'd9d36b5226d11b2cf60e3cf2038b21032c4ac753eabc32fbdd506158f95a69ca',
         '171be105f8e39729838144c78ced336d0ebc29a4bd2c7a22901c0e8c0eaabb42',
         '5f7933bd0257649a44e571d59a9f4083297acbdd338c1c0094a7226ade8d0f0f',
         '967fd52a57e8193f56329bb37abdddce717098429f62c00776342c605a28e19b',
         '6b1a21634a3d72821c43a244af16098eba7c0a59a2e409efa38bd420702f7594',
         '7bb5ca944c5f916f80d50246f48789cc4605efd166efc2308553fe0d208fbe12',
         '83dfef7c288121d87e60f52c74d3da6b422d4b8581ce732ef8b54273bd6c4f45'
      ]
   }
 }
```


## Get transaction hashes

***getTransactionHashes()*** method returns an array of block and transaction hashes.

Transaction consists of transfers. Transfer is an amount-address pair. There could be several transfers in a single transaction.


Input:

| Argument        | Mandatory                                                                   | Description                                        | Format | Example                                                                                         |
|-----------------|-----------------------------------------------------------------------------|----------------------------------------------------|--------|-------------------------------------------------------------------------------------------------|
| addresses       | No                                                                          | Array of strings, where each string is an address  | array  | KfXkT5VmdqmA7bWqSH37p87hSXBdTpTogN4mGHPARUSJaLse6jbXaVbVkLs3DwcmuD88xfu835Zvh6qBPCUXw6CHK8koDCt |
| blockHash       | **Only one of these parameters (blockHash or firstBlockIndex) is allowed.** | Hash of the starting block                         | string | f8f07ace392474bfbdc0fc30749a45f779a8aea10c489a103270f63ed88178ad                                |
| firstBlockIndex | **Only one of these parameters (blockHash or firstBlockIndex) is allowed.** | Starting height                                    | uint32 | 123123                                                                                          |
| blockCount      | Yes                                                                         | Number of blocks to return transaction hashes from | uint32 | 20                                                                                              |
| paymentId       | No                                                                          | Valid payment\_id                                  | string | somePaymentId                                                                                   |

***Note:*** if **paymentId** parameter is set, getTransactionHashes() method returns transaction hashes of transactions that contain specified payment_id. (in the set block range)

**Note:** if **addresses** parameter is set, getTransactionHashes() method returns transaction hashes of transactions that contain transfer from at least one of specified addresses.

**Note:** if both above mentioned parameters are set, getTransactionHashes() method returns transaction hashes of transactions that contain both specified payment_id and transfer from at least one of specified addresses.


Output:

| Argument | Description                                                                               | Format | Example   |
|----------|-------------------------------------------------------------------------------------------|--------|-----------|


Input example:
```
 {  
   'params':{  
      'blockCount':100,
      'firstBlockIndex':0,
      'addresses':[  
         'KfXkT5VmdqmA7bWqSH37p87hSXBdTpTogN4mGHPARUSJaLse6jbXaVbVkLs3DwcmuD88xfu835Zvh6qBPCUXw6CHK8koDCt'
      ]
   },
   'jsonrpc':'2.0',
   'id':'test',
   'method':'getTransactionHashes'
 }
```
Output example:
```
 {  
   'jsonrpc':'2.0',
   'id':'test',
   'result':{  
      'items':[  
         {  
            'transactionHashes':[  
                957dcbf54f327846ea0c7a16b2ae8c24ba3fa8305cc3bbc6424e85e7d358b44b
                25bb751814dd39bf46c972bd760e7516e34200f5e5dd02fda696671e11201f78
            ],
            'blockHash':'8a6f1cb7ed7a9db4751d7b283a0482baff20567173dbfae136c9bceb188e51c4'
         }
      ]
   }
}
```

## Get transactions

**getTransactions()** method returns an array of block and transaction hashes.

Transaction consists of transfers. Transfer is an amount-address pair. There could be several transfers in a single transaction.


Input:

| Argument        | Mandatory                                                               | Description                                        | Format | Example                                                          |
|-----------------|-------------------------------------------------------------------------|----------------------------------------------------|--------|------------------------------------------------------------------|
| addresses       | No                                                                      | Array of strings, where each string is an address  | array  | See below                                                        |
| blockHash       | Only one of these parameters (blockHash or firstBlockIndex) is allowed. | Hash of the starting block                         | string | 8fa07712cbf22c263834c0ac9a3f05058856a1fa7fa3d3eda332f63519b23bd1 |
| firstBlockIndex | Only one of these parameters (blockHash or firstBlockIndex) is allowed. | Starting height                                    | uint32 | 123123                                                           |
| blockCount      | Yes                                                                     | Number of blocks to return transaction hashes from | uint32 | 20                                                               |
| paymentId       | No                                                                      | Valid payment\_id                                  | string | somePaymentId                                                    |


**Note:** if **paymentId** parameter is set, getTransactions() method returns transactions that contain specified payment_id. (in the set block range)

**Note:** if **addresses** parameter is set, getTransactions() method returns transactions that contain transfer from at least one of specified addresses.

**Note:** if both above mentioned parameters are set, getTransactions() method returns transactions that contain both specified payment_id and transfer from at least one of specified addresses.


Output:

| Argument | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Format | Example   |
|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|-----------|
| items    | Array that contains:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

            -   block\_hash - string - hash of the block which contains a transaction                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
            -   transactions - array - contains                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

            ** transactionHash - string - hash of the transaction ** blockIndex - uint32 - number of the block that contains a transaction ** timestamp - uint64 - timestamp of the transaction ** isBase - boolean - shows if the transaction is a coinbase transaction or not ** unlockTime - uint64 - height of the block when transaction is going to be available for spending ** amount - int64 - amount of the transaction ** fee - uint64- transaction fee ** extra - string ** paymentId - string - payment\_id of the transaction (optional) ** transfers - array - contains **\* address - string **\* amount - int64  | array  | See below |


Input example:
```
 {  
   'params':{  
      'blockCount':1000,
      'firstBlockIndex':1,
      'addresses':[  
         'KfXkT5VmdqmA7bWqSH37p87hSXBdTpTogN4mGHPARUSJaLse6jbXaVbVkLs3DwcmuD88xfu835Zvh6qBPCUXw6CHK8koDCt',
         'KegWNCZv8CQ5YoUZFLAUpxQhHt9FAo5KhXBEaHGTeaDD1t5ZZsKoEMQ8sgUMcyKbwpFJGaaY73Bwf3bUXVLsgAZa7nCv85k',
         'KiQ5AonXm7saDTsNEi9uJsb5HswnafrsVLn2vWT1PGGTi1KFbJypdqs7xWrdU54ieXcdQtiV1bDAcVZjYjwFg41v9v7x869'
      ],
      paymentId:'somePaymentId'
   },
   'jsonrpc':'2.0',
   'id':'test',
   'method':'getTransactions'
 }
```
Output example:
```
 {  
   'jsonrpc':'2.0',
   'id':'test',
   'result':{  
      'items':[  
         {  
            'blockHash':'01bd06ca731914f27e143bbb902ce0bc05bff13d76faa027ea817e68f217488c',
            'transactions':[  
               {  
                  'fee':-70368475742208,
                  'extra':'0127cea59bfadc49aa02ed4a225936671e55607b5241621abca2a5e14405906dbb',
                  'timestamp':1446029698,
                  'blockIndex':1,
                  'state':0,
                  'transactionHash':'06ec210a8359f253f8b2160a0d6040cf89f2a05a553aaa577b7f508ee5d831f9',
                  'amount':70368475742208,
                  'unlockTime':11,
                  'transfers':[  
                     {  
                        'amount':70368475742208,
                        'type':0,
                        'address':'KfXkT5VmdqmA7bWqSH37p87hSXBdTpTogN4mGHPARUSJaLse6jbXaVbVkLs3DwcmuD88xfu835Zvh6qBPCUXw6CHK8koDCt'
                     }
                  ],
                  'paymentId':'',
                  'isBase':True
               }
            ]
         },
         {  
            'blockHash':'28aa7d32f4274f6387969d7671bd4db98fd871bf0dd510a1df5e2ef4b1d41a35',
            'transactions':[  
               {  
                  'fee':-70368207307776,
                  'extra':'01a8e6e408282b2ddf343e20d5e9aab283723ba10ab7ab7b3131f6981b02a84431',
                  'timestamp':1446029698,
                  'blockIndex':2,
                  'state':0,
                  'transactionHash':'922d00d2e6eaed63f62d8e3b968cb08b6ea5c555fe0e6af948ab06efe6eb213a',
                  'amount':70368207307776,
                  'unlockTime':12,
                  'transfers':[  
                     {  
                        'amount':70368207307776,
                        'type':0,
                        'address':'KfXkT5VmdqmA7bWqSH37p87hSXBdTpTogN4mGHPARUSJaLse6jbXaVbVkLs3DwcmuD88xfu835Zvh6qBPCUXw6CHK8koDCt'
                     }
                  ],
                  'paymentId':'',
                  'isBase':True
               }
            ]
         }
      ]
   }
 }
```


## Get unconfirmed transaction hashes

**getUnconfirmedTransactionHashes()** method returns information about the current unconfirmed transaction pool or for a specified addresses.

Transaction consists of transfers. Transfer is an amount-address pair. There could be several transfers in a single transaction.


Input:

| Argument  | Mandatory | Description                                            | Format | Example   |
|-----------|-----------|--------------------------------------------------------|--------|-----------|
| addresses | No        | Array of strings, where each string is a valid address | array  | See below |


**Note:** if **addresses** parameter is set, getUnconfirmedTransactionHashes() method returns transactions that contain transfer from at least one of specified addresses.


Output:

| Argument          | Description                                                                 | Format | Example   |
|-------------------|-----------------------------------------------------------------------------|--------|-----------|
| transactionHashes | Array of strings, where each string is a hash of an unconfirmed transaction | array  | See below |


Input example:
```
 {  
   'params':{  
      'addresses':[  
         'KdbDPifEfmQDZAxMxjrkbPPLHtwv1ezGr2GRB3P377ecToxGkrTFTe2EEjAKbhPqA61FPTi14UpkMVMh2pn1et1y8PdDwn4',
         'KfBV6ryfQdrNFhQ3pwnWw21mKomejKpdVj8diVdu5nAdYh7vft5JcMHjMshEcAqAJGaUSmDvTPKTtSWyGxc52R1c4JFVKUP',
         'KdA226MT2R3CtZH6oVHVQJ3J1j6HS7ircHNrJMvSb3tRTqnGEBjqojdUHzPKRigkjecw1iwW15qRp4bWvV2dTuz8QNMdAU8'
      ]
   },
   'jsonrpc':'2.0',
   'id':'test',
   'method':'getUnconfirmedTransactionHashes'
 }
```
Output example:
```
 {  
   'jsonrpc':'2.0',
   'id':'test',
   'result':{  
      'transactionHashes':[  
         ...,
         ...,
         ...
      ]
   }
 }
```


## Get transaction

**getTransaction()** method returns information about a particular transaction.

Transaction consists of transfers. Transfer is an amount-address pair. There could be several transfers in a single transaction.


Input:

| Argument        | Mandatory | Description                       | Format | Example |
|-----------------|-----------|-----------------------------------|--------|---------|
| transactionHash | Yes       | Hash of the requested transaction | string | example |

Output:

| Argument    | Description                                                                                          | Format | Example   |
|-------------|------------------------------------------------------------------------------------------------------|--------|-----------|
| transaction | Contains:                                                                                            

               -   transactionHash - string - hash of the transaction                                                
               -   blockIndex - uint32 - number of the block that contains a transaction (optional)                  
               -   timestamp - uint64 - timestamp of the transaction (optional)                                      
               -   isBase - boolean - shows if the transaction is a coinbase transaction or not                      
               -   unlockTime - uint64 - height of the block when transaction is going to be available for spending  
               -   amount - int64 - amount of the transaction                                                        
               -   fee - uint64- transaction fee                                                                     
               -   extra - string - ?                                                                                
               -   paymentId - string - payment\_id of the transaction (optional)                                    
               -   transfers - array - contains                                                                      

               ** address - string ** amount - int64                                                               | array  | See below |


Input example:
```
 {  
   'params':{  
      'transactionHash':'92423b0857d36bd172b3f2effbd47ea477bfe0618a50c29d475542c6d5d1b835'
   },
   'jsonrpc':'2.0',
   'id':'test',
   'method':'getTransaction'
 }
```
Output example:
```
 {  
   'jsonrpc':'2.0',
   'id':'test',
   'result':{  
      'transaction':{  
         'fee':1000000,
         'extra':'0130b4472974f2deb9fae7d8fd6602b26396379f3fa05cca2430e10e9e60179f42',
         'timestamp':0,
         'blockIndex':4294967295,
         'state':0,
         'transactionHash':'92423b0857d36bd172b3f2effbd47ea477bfe0618a50c29d475542c6d5d1b835',
         'amount':-1703701,
         'unlockTime':0,
         'transfers':[  
            {  
               'amount':123456,
               'type':0,
               'address':'KiQxu9U3F7vdGggu4NQ3CKDhk59vMQyMaFbLtu7TU4TdUkNtuJufqpo67r2e5j5p44SBsBBygaRdmeB4gwH9CF1C3zufGWd'
            },
            {  
               'amount':234567,
               'type':0,
               'address':'KccShmn49D4JZED1g4CM98RpszuMbbDEaYNVpCWjUkDuWPVpo8EEUHaReKeHBmpoNdTENs841QUBRNitFHD7W29oDVfV9ze'
            },
            {  
               'amount':345678,
               'type':0,
               'address':'KfCPBzzR28edvZqLv6t8XVY98jeK6YEjS3birBPTHjY1hXSFM5k5pjUNSur6UhbP8EaqhZ69PVJF991KqCtYFox7NUSvcjw'
            }
         ],
         'paymentId':'',
         'isBase':False
      }
   }
 }
```

## Send transaction

**sendTransaction()** method allows you to send transaction to one or several addresses. Also, it allows you to use a payment_id for a transaction to a single address.

Input:

| Argument      | Mandatory | Description                                                                                                                                                                                          | Format | Example                                                                                                                             |
|---------------|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|-------------------------------------------------------------------------------------------------------------------------------------|
| addresses     | No        | Array of strings, where each string is an address to take the funds from                                                                                                                             | array  | See below                                                                                                                           |
| transfers     | Yes       | Array that contains:                                      • address  - string • amount - int64                                                                                                                                                                                    | array  | "amount": 10000000000, "address": "Kcpg4B4kjwefDeBHGyRdUbgeq5FSYHCof7db8uj6dkFAjkvLSQBc3J7iDSwFx75TUj6MnDYKM5Eu3UmtaAJhvEjdKw1Jkz5" |
| fee           | Yes       | Transaction fee. Minimal fee in Qwertycoin network is 1 QWC. This parameter should be specified in minimal available QWC units. For example, if your fee is 1.1 QWC, you should pass it as 110000000 | uint64 | 1000000                                                                                                                             |
| unlockTime    | No        | Height of the block until which transaction is going to be locked for spending.                                                                                                                      | uint64 | 0                                                                                                                                   |
| anonymity     | Yes       | Privacy level (a discrete number from 1 to infinity). Level 6 and higher is recommended.                                                                                                             | uint64 | 6                                                                                                                                   |
| extra         | No        | String of variable length. Can contain A-Z, 0-9 characters.                                                                                                                                          | string |                                                                                                                                     |
| paymentId     | No        | payment\_id                                                                                                                                                                                          | string | somePaymentId                                                                                                                       |
| changeAddress | No        | Valid and existing in this container address.                                                                                                                                                        | string | KaUMDHkTqSpaDBtK2pZc4MDaveb2DhQfYiUZ2ACy7evsKYYwWefrvhy34RHNChptMPbefT387qpH7MGkWCsdQJAeGpjmhfz                                     |

Note: if container contains only 1 address, **changeAddress** field can be left empty and the change is going to be sent to this address

Note: if **addresses** field contains only 1 address, **changeAddress** can be left empty and the change is going to be sent to this address

Note: in the rest of the cases, **changeAddress** field is mandatory and must contain an address.



Output:

| Argument        | Description                   | Format | Example                                                          |
|-----------------|-------------------------------|--------|------------------------------------------------------------------|
| transactionHash | Hash of the sent transaction. | string | 93faedc8b8a80a084a02dfeffd163934746c2163f23a1b6022b32423ec9ae08f |


Input Example:
```
 {  
   'params':{  
      'anonymity':0,
      'fee':1000000,
      'unlockTime':0,
      'paymentId':'somePaymentId',
      'addresses':[  
         'KbzvFzjQeWCZawinhkDZUKF6pjDv1TLU678poSAEFKWRL3kgWk48sxCN8z6tpfkzMZ82AQyfhiU4uZ66mnU942AHKokr6PG',
         'KiHzZqEzezyaZCP5AdZ1v6K1dAi5aBrU3E9czrZbS6whPUVDBLPLdqU4aiLviNUFfXMEh2kQwSEJGBNpegY6To4wQ9aBwDU',
         'KacpStR6z373JoBgBAVoUch9C1Uzbp3p3e95NJkZtcGPe7sJ3AZNzfzL1qzh7zqvekDxvBZepZGqcRsa7MhCmP3NL27GH5V'
      ],
      'transfers':[  
         {  
            'amount':123456,
            'address':'KbjVbfZkw5eYMMBBYCEoc3TtMe6yNQgPvSepH1KRqxhc3Pr2VBtFLrtD1E6oQAEbtJQsbJrtqWjMoKo1q5HtKAFdUcYBH41'
         },
         {  
            'amount':234567,
            'address':'Kis97C9AM1PQataUmbpjmXbZz2KSynxgURYb8moceDPXVWBwt4pjGtvAmfY3qmhcrBZgyKfLGnhGCW8LxBHGiDrrC5GLjhD'
         },
         {  
            'amount':345678,
            'address':'KdAzF8benG4aygdY5v5R5j8bLrzN1hSTfb2c8UneNbNW1VB4QnWD7SSPGpne17HGiLhid1VGq73B3Wc6ZWLaq2GZEaw9hrc'
         }
      ],
      'changeAddress':'KbzvFzjQeWCZawinhkDZUKF6pjDv1TLU678poSAEFKWRL3kgWk48sxCN8z6tpfkzMZ82AQyfhiU4uZ66mnU942AHKokr6PG'
   },
   'jsonrpc':'2.0',
   'id':'test',
   'method':'sendTransaction'
 }
```

Return value example:
```
 {  
   'jsonrpc':'2.0',
   'id':'test',
   'result':{  
      'transactionHash':'93faedc8b8a80a084a02dfeffd163934746c2163f23a1b6022b32423ec9ae08f'
   }
 }
```
