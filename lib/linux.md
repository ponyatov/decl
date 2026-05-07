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

## default config

```files
etc/
    all.linux        // linux kernel sub-config for any target
    all.uclbc        // uClibc sub-config for any target
    ${APP}.linux     // \ application-specific linux subconfig
    ${APP}.uclibc    // / (some optional features can be disabled for smaller kernel and faster rebuild)
```

## main

- `os/linux/inc/linux.hpp`
```cpp
#pragma once

extern int main(int argc,m char *argv[]); ///< program entry point
extern void arg(int argc,m char *argv  ); ///< print command line argument
```

- `os/linux/src/linux.cpp`
