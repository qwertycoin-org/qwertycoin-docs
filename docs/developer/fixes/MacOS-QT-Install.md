---
title: MacOS QT Install
---

## Download the GUI or the Zero wallet and got this Error?

> Dyld Error Message:    
Library not loaded: /usr/local/opt/qt@5.5/lib/QtDBus.framework/Versions/5/QtDBus    
Referenced from: /Qwertycoin.app/Contents/MacOS/Qwertycoin    
Reason: image not found

Solution:

Open a terminal and write:    
`brew install qt5 --with-developer`    
then wait untill installation is finished. Type in terminal:    
`echo 'export PATH="/usr/local/opt/qt/bin:$PATH"' >> ~/.bash_profile`

Use finder click go --> Go to Folder then type in `/usr/local/opt`    
theres a folder now: qt@5.11, clone it then rename the clone to qt@5.5    
Then start QWC Wallet GUI
