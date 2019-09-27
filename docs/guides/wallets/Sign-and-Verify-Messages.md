---
title: Sign and Verify Messages
---

You can sign a message using the CLI sign_message command like this

`sign_message <"Your Message">`

The signature will then be printed to the screen. You may then provide this signature to someone else to verify. The command to verify is:

`verify_message <"Your Message"> <address> <signature>`

### Try it yourself

You may reproduce those steps and make sure you get the same results:
Create a wallet using the seed
> dodge ouch present sake aquarium mystery woken cell aztec duplex inundate vogue vinegar afloat rumble aphid siren sowed junk otter potato argue banjo bays duplex

**(do not use this seed for anything else except this test)**

Open this wallet and type
`sign_message "My Message"`
> SigV1fYJ8t1rf4UkNATJFK7fxmJAcg9GCBGG9dXrr7bs4KZNBjnFgNJ33256MFRX7AG2q1Kdi8XQDruMkZbiNwXwAsLb9

This is your signature. Then verify the signature:

`verify_message "My Message" QWC1LxPvCVibmBUAaJu1hm8xk35UjJqYvTA4AisTSerheZ53Yse3SwAg8U7WkPcDAxZH1QpqDVxBcKvDUmMUuRJuAEZa9HzZm9 SigV1fYJ8t1rf4UkNATJFK7fxmJAcg9GCBGG9dXrr7bs4KZNBjnFgNJ33256MFRX7AG2q1Kdi8XQDruMkZbiNwXwAsLb9`

> Valid signature from QWC1LxPvCVibmBUAaJu1hm8xk35UjJqYvTA4AisTSerheZ53Yse3SwAg8U7WkPcDAxZH1QpqDVxBcKvDUmMUuRJuAEZa9HzZm9

If you sign this text yourself you will probably get a different signature than me. This is because the signing is not deterministic. Nevertheless, you should be able to verify my signature without problems.

## Sign & Verify using the GUI Wallet

1. Create a new wallet from the example seed above
2. Navigate to File > Sign message
Write My Message in the the message field at the top.
3. Copy the generated "Signature" into the verification field (Verify message) or navigate to File > "Verify signed message"
Copy the message into the verification "message" field. Paste the Qwertycoin address in the "Address" field
Your Message will be verified.

![](https://cdn.qwertycoin.org/images/other/signverify.PNG)
