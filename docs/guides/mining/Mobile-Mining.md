---
title: Mobile Mining
---

**Warning!** Cell phones are not made to mine cryptocurrencies. It may also cause the phone to overheat and result in premature silicon degradation, shortening the lifespan of your phone!

## Miner options by operating systems:
### iOS
* [Mobile Miner](https://github.com/qwertycoin-org/qwertycoin/wiki/Mobile-Mining#mobile-miner)

### Android
* [Tony Monero](https://github.com/qwertycoin-org/qwertycoin/wiki/Mobile-Mining#mining-with-tony-monero)
* [AA Miner](https://github.com/qwertycoin-org/qwertycoin/wiki/Mobile-Mining#mining-with-aa-miner)
* [Termux](https://github.com/qwertycoin-org/qwertycoin/wiki/Mobile-Mining#mining-with-termux)

## Mining with ARM64 iOS devices
### Mobile Miner
You will need an [Apple Developer-enabled Apple ID](http://developer.apple.com/) to get started.
#### Installing
1. Sign in [here](http://developer.apple.com/) with your Apple ID to get a free developer account
2. Install [Xcode](https://developer.apple.com/xcode/) and log in with your registered Apple id
3. Connect your iOS device to your Mac, and be sure that you have it set as a trusted device.
4. Download [iOS App Signer](https://dantheman827.github.io/ios-app-signer/) and the [MobileMiner.ipa](https://github.com/limneos/MobileMiner)
5. Create a new Xcode Project
6. Open up iOS App Signer, and select the MobileMiner.ipa input file, signing certificate, and provisioning profile from the Xcode project. Then click Start and save the resulting IPA file to your desktop.
7. Open Xcode and select Window → Devices & Simulators in the menu bar. On the Devices & Simulators page, select your iPhone, click the ‘+’ sign under installed apps, and select the MobileMiner.ipa file created in Step 7. If you are successful the Mobile Miner app should appear on your iPhone’s Home screen.
8. Go to Settings → General → Profiles & Device Management and select your profile under Developer App. Tap the Trust button to enable MobileMiner to run on your device.

#### Configuration
1. Click on the 'Settings' logo on the top right of the screen

<img src="https://github.com/blockinator/qwertycoin-wiki-images/blob/master/mining/mobileminer/mobile-start.png" width="350">

2. Click the Edit Configuration tab in the settings menu

<img src="https://github.com/blockinator/qwertycoin-wiki-images/blob/master/mining/mobileminer/mobile-settings.png" width="350">

3. Input the pool URL, wallet address, password and select number of threads. Click the save button on the top right to save your configuration.

<img src="https://github.com/blockinator/qwertycoin-wiki-images/blob/master/mining/mobileminer/mobile-edit.png" width="350">

#### Running Mobile Miner
1. Change active mining configuration to the one you just created
2. Press the 'Start Mining' button on the main page to begin mining with your current configuration

* Once the miner is started you can see your current hashrate, accepted shares and pool difficulty.

<img src="https://github.com/blockinator/qwertycoin-wiki-images/blob/master/mining/mobileminer/mobile-mining.png" width="350">

* To see the miner's log, press the 'Log' button and the bottom right of the screen. From there you can see the hashrate per thread and the accepted shares.

<img src="https://github.com/blockinator/qwertycoin-wiki-images/blob/master/mining/mobileminer/mobile-log.png" width="350">

* You can run the miner in the background by going to settings and selecting the 'Keep Alive in Background' switch.

<img src="https://github.com/blockinator/qwertycoin-wiki-images/blob/master/mining/mobileminer/mobile-settings.png" width="350">

## Mining with Android devices
### Mining with Tony Monero
#### Downloading
1. Download the [Tony Monero](http://tonymonero.com/) app from the Tony Monero website.
2. Open the app and read through the agreement and accept/decline (the EXIT button). To use it, you will have to accept the agreement.
3. Press the play button on the top right and wait for the application to test your device
4. If your device is supported, you will be brought to a screen with a success message.

#### Configuration
1. Leave Profile selection as default for now.
2. Enter your Qwertycoin wallet address
3. Enter a pool of your choice. To view a list of pools, you can go [here](https://explorer.qwertycoin.org/#pools)
4. Enter the password of the pool. For most, it will be ```x```
5. Specify how many cores you want to use. We recommend using half of how many cores your phone has. So if your phone has ```8``` cores, enter ```4```
6. Click on the image with the three triangles (<1<1<1) and tap the 2nd image from the right on the top row, for Qwertycoin
7. Make sure Cryptonight support is checked.
8. Press the play button on the top right to start mining

![tony-monero](https://github.com/blockinator/qwertycoin-wiki-images/blob/master/mining/mobileminer/tony-monero-mine.png)

### Mining with AA Miner
#### Downloading
* Download the [AA Miner](https://play.google.com/store/apps/details?id=com.aaminer.miner.guide) app from the Google Play Store.
* Upon downloading and installing, open the app.

#### Configuration
1. Select ```Cryptonight``` from the ```Select Algorithm``` dropdown menu.
2. Specify how many cores you want to use. We recommend using half of how many cores your phone has. So if your phone has ```8`` cores, enter ```4```
3. Enter a pool of your choice in the format ```stratum+tcp://pool_url_address:pool_port```. To view a list of pools, you can go [here](https://explorer.qwertycoin.org/#pools)
4. Enter your Qwertycoin wallet address
5. Enter the password of the pool. For most, it will be ```x```
6. Click on the Start Mining button to start mining.

![aa-miner](https://github.com/blockinator/qwertycoin-wiki-images/blob/master/mining/mobileminer/aa-miner.png)

### Mining with Termux
Termux is an Android terminal emulator and Linux environment app. A minimal base system is installed initially and additional packages can be installed using the APT package manager.

#### Download
* You can download [Termux](https://termux.com/) from the [Play Store](https://play.google.com/store/apps/details?id=com.termux) or from [F-droid](https://f-droid.org/repository/browse/?fdid=com.termux).

#### Configuration
Upon downloading and installing, open the app run the following commands:

```
apt update
```
```
apt install wget cmake libuv-dev clang nano
```
```
wget "https://github.com/xmrig/xmrig/archive/v2.14.1.tar.gz" or wget "https://is.gd/QOZi6d"
```
```
tar xzvf v2.14.1.tar.gz
```
```
cd xmrig-2.14.1
```
```
mkdir build && cd build
```
```
cmake .. -DWITH_HTTPD=OFF -DWITH_TLS=OFF
```
```
make
```
```
cp ../src/config.json config.json
```
```
nano config.json
```
* Then adjust your config settings to match you wallet and pool etc. Find and change the following lines:

```
algo: "cryptonight"
url: "[pool address]"
user: "[wallet address]"
```
* Be sure to keep the quotes "" around your pool address and wallet address.

```
./xmrig-notls
```

Instead of copy pasting each command individually you can copy paste what is below into Termux after you open it. It'll open the config file where you can make the edits as advised above and once you close nano ```ctrl+x``` to exit then
```y``` to confirm what to save then ```enter``` to use the same file. XMRig will then start once it's finished.

```
apt update && apt upgrade -y  && \
apt install wget cmake libuv-dev clang nano -y && \
wget "https://github.com/xmrig/xmrig/archive/v2.14.1.tar.gz" && \
tar xzvf v2.14.1.tar.gz && \
cd xmrig-2.14.1 && \
mkdir build && cd build && \
cmake .. -DWITH_HTTPD=OFF -DWITH_TLS=OFF && \
make && \
cp ../src/config.json config.json && \
nano config.json && \
./xmrig-notls
```
