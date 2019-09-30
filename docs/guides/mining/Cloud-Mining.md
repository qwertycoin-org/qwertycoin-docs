---
title: Cloud Mining
---

## Setting up EC2 instance

### Create AWS Account
* Create an account with [Amazon AWS](https://portal.aws.amazon.com/billing/signup?nc2=h_ct&src=default&redirect_url=https%3A%2F%2Faws.amazon.com%2Fregistration-confirmation#/start).

![cloud-start](assets/mining/cloudmining/cloud-start.png)

### Setup Instance
* On the home page, click the services tab and then go to compute and click 'EC2'. Once you are there you will chose your region on the top of the page in the header section. Next click the 'Launch Instance' button at the center of the page and then select an AMI. For this tutorial I am using Ubuntu Server 16.04 LTS.

![cloud-pick](assets/mining/cloudmining/cloud-pick.png)

* Next you will need to choose an instance type. I am just going to use the preselected t2.micro for the tutorial. For the purpose of mining, the Compute Optimized and the GPU instances are your best choices.

![cloud-choose](assets/mining/cloudmining/cloud-choose.png)

* You can then skip to step six and under the source tap select my IP.

![cloud-security](assets/mining/cloudmining/cloud-security.png)

* Next press Review and Launch and then create a new key pair to be able to connect with your instance. Once the instance is live, you can connect to your instance using an SSH through Terminal, PuTTY or similar program.

![cloud-pickkey](assets/mining/cloudmining/cloud-createkey.png)

* The final step is to install your mining software of choice and start mining! With a compute optimized c4.8xlarge instance you will get about 750 H/s when mining for Cryptonote currencies such as Qwertycoin.

### SSH into instance
1. Download key pair that you created earlier

2. Make sure you are in the same directory as the key and allow permissions

```chmod 600 <key-name>.pem```

3. SSH into instance

```ssh -i <key-name>.pem ubuntu@<EC2-IP-Address>```

## Install mining software
1. In the terminal install dependencies by running this command

```sudo apt install libmicrohttpd-dev libssl-dev cmake build-essential libhwloc-dev git```

2. Clone the package

```git clone https://github.com/fireice-uk/xmr-stak.git```

3. To remove donations, type

```nano xmr-stak/xmrstak/donate-level.hpp```

Change
```constexpr double fDevDonationLevel = 2.0 / 100.0;```

to
```constexpr double fDevDonationLevel = 0.0 / 100.0;```

4. Make build directory

```mkdir xmr-stak/build```

5. Move into the new directory

```cd xmr-stak/build```

6. Run cmake

```cmake .. -DCUDA_ENABLE=OFF -DOpenCL_ENABLE=OFF```

7. Finish building it

```make install```

8. XMR-Stak will now be located in ```/home/user/xmr-stak/build/bin```

9. Move to where it's at

```cd bin```

10. Launch XMR-Stak

```./xmr-stak```

11. Check [XMR-Stak Setup and Configuration](guides/mining/XMR-Stak)
