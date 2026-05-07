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

## x86

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

## Cortex-M

```decl
arch cortexm {}
arch cortexm4: cortexm {}
arch cortexm3: cortexm {}
arch cortexm1: cortexm {}
arch cortexm0: cortexm {}
```

## ESP32

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

## OS

```decl
os linux {}     // embedded/backend
os win32 {}     // retro WinXP+ still most compatible for modern systems
os win64 {}     // Win10+
os bare {}      // bare-metal
os rtos {}      // target-specific FreeRTOS port
```

## cross source generation

specific code generates to this dirsectories:

```
hw/
    pc/
    qemu386/
cpu/
    i5/
    stm32f103c8t/
arch/
    i386/
    x86_64/
os/
    linux/
    bare/
    rtos/
```

every cross directory has:
```
X/
    inc/
        X.hpp
        *.hpp
    src/
        X.cpp
        *.cpp
```

## sample: generate x86 cross dirs & files

```sh
mkdir -p hw/{pc,qemu386}/{inc,src}
mkdir -p cpu/{i5,i686,i486}/{inc,src}
mkdir -p arch/{x86,i386,x86_64}/{inc,src}
mkdir -p os/{linux,win32,win64,bare,rtos}/{inc,src}
```
```sh
touch hw/{pc,qemu386}/{inc,src}/.gitignore
touch cpu/{i5,i686,i486}/{inc,src}/.gitignore
touch arch/{x86,i386,x86_64}/{inc,src}/.gitignore
touch os/{linux,win32,win64,bare,rtos}/{inc,src}/.gitignore
```