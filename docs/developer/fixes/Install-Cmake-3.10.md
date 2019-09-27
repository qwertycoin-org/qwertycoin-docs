---
title: Install Cmake 3.10
---

## With these lines you can install cmake for Linux in the correct version.

```
wget https://github.com/Kitware/CMake/releases/download/v3.14.0-rc2/cmake-3.14.0-rc2-Linux-x86_64.tar.gz
tar -xvf cmake-3.14.0-rc2-Linux-x86_64.tar.gz
cd cmake-3.14.0-rc2-Linux-x86_64
sudo cp -r bin /usr/
sudo cp -r share /usr/  
sudo cp -r doc /usr/share/  
sudo cp -r man /usr/share/
```
