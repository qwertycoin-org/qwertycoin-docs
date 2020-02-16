---
title: Google Breakpad Integration
---

## Overview
After crash occurs and intercepted by **breakpad** it creates `minidump` file (`*.dmp`) with useful crash related information. Extracting human readable information from `minidump` file format requires running of `minidump_stackwalk` tool with specially pre-generated symbol files on application binaries.

## Getting readable stack trace from user submitted files

1. Original [breakpad repository](https://github.com/google/breakpad#getting-started-from-master) should be checked out on dev machine and built locally;
2. Use `dump_syms` tool to generate symbols file from application binary file:
```
google-breakpad/src/tools/linux/dump_syms/dump_syms ./ApplicationBinary > ./ApplicationBinary.sym
head -n1 ./ApplicationBinary.sym
```
Above command output may look something like this:
```
MODULE Windows x86_64 6EDC6ACDB282125843FD59DA9C81BD830 ApplicationBinary
```
3. To structure symbols file correctly you can do following next:
```
mkdir -p ./symbols/ApplicationBinary/6EDC6ACDB282125843FD59DA9C81BD830
mv ./ApplicationBinary.sym ./symbols/ApplicationBinary/6EDC6ACDB282125843FD59DA9C81BD830
```
4. Generate readable stack trace pointing to the place with crash by running `minidump_stackwalk` tool on minidump file with passing the path to previously generated symbol files:
```
google-breakpad/src/processor/minidump_stackwalk 09fd98ec-d55c-29e1-4ae067b0-4aaec0d6.dmp ./symbols
```
NOTES:
- symbols can be generated only for application binaries with debug info (`Debug` or `RelWithDebInfo`);
- warn users that dumps may contain sensitive infomatiom;
- (for wallet binaries) ask users to generate dumps locally instead of sharing raw `minidump` file publicly.
