# cross
## cross-compilation is a first-class method

target specification has this components:
- `hw` concrete target hardware
    - `pc` generic x86 PC
    - `qemu386` emulated (virtualbox compatible)
- `cpu` concrete CPU/MCU used on `hw`
    - `i5` default for host PC
    - `i686` atom-based netbooks etc
    - `i386` retro computers
    - `stm32f4`
    - `lx107`
- `arch` generic architecture for `cpu`
    - `x86_64`
    - `i386`
    - `cortexm`
    - `xtensa`
- `os` target OS
  - `linux` embedded Linux
  - `bare` bare-metal
  - `rtos` FreeRTOS

```decl
class HW {}
class CPU {}
class ARCH {}
class OS {}
```
```decl
hw pc {}
hw qemu386 {}
```
```decl
cpu i5 { arch=x86_64 }
cpu i686 { arch=i386 }
cpu i486 { arch=i386 }
```
```decl
arch x86 {}
arch x86_64:x86 {}
arch i386:x86 {}
```
```decl
arch cortexm {}
arch cortexm4: cortexm {}
arch cortexm3: cortexm {}
arch cortexm1: cortexm {}
arch cortexm0: cortexm {}
```
```decl
arch esp
arch xtensa:esp {}
arch riscv:esp {}
cpu lx106 { arch=xtensa }
cpu lx107 { arch=xtensa }
hw esp8266 { cpu=lx106 }
hw esp32 { cpu=lx107 }
hw esp32s { arch=xtensa }
hw esp32c { arch=riscv }
hw esp32c3: esp32c {}
hw esp32c6: esp32c {}
```
