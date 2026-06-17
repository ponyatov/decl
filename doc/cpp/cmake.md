# cmake
## build scripts

```files
CMakeLists.txt
cmake/
    clean.cmake
    fw.cmake
    install.cmake
    net.cmake
    src.cmake
    syntax.cmake
    version.cmake
```

## libs/tools search

```
cmake/
    FindRAGEL.cmake
    FindREADLINE.cmake
    FindZMQ.cmake
```

## target toolchain configuration

- cross-build target can be switched using CMake presets

```files
CMakePresets.json
cmake/
    any_toolchain.cmake              // shared config
    x86_64-linux-gnu.cmake
    i686-w64-mingw32.cmake
    mingw-w64-ucrt-x86_64.cmake
    aarch64-linux-gnu.cmake
    armv7-linux-gnu.cmake
    arm-none-eabi.cmake
    xtensa-lx106-elf.cmake
```
