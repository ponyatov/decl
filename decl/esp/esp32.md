# esp32

```decl
arch esp
arch xtensa:esp {}
arch riscv:esp {}
cpu lx106 { arch=xtensa }
cpu lx107 { arch=xtensa }
hw esp8266 { cpu=lx106 }              // depricated but require support in decl
hw esp32 { cpu=lx107 ; os=rtos }
hw esp32s { arch=xtensa ; os=rtos }
hw esp32c { arch=riscv ; os=rtos }
hw esp32c3: esp32c {}
hw esp32c6: esp32c {}
```
