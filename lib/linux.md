# linux
## embedded Linux

```decl
os linux { hw=[x86,rpi] }     // embedded/backend
```

all cross dirs for items that able to run minimal Linux must contain files:
```files
X/
    X.linux     // Linux kernel config string specific for X item
    X.uclibc    // uClibc config strings
```
