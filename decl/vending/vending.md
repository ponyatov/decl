# vending
## Industrial Vending Machine

```decl
Industrial Vending Machine
hw Machine {
    section spiral {}      // rotary spirals matrix
    section postomat {}    // locked boxes matrix
    section power {}       // power subsystem
    section hmi {          // human machine interface components
	    hw r10mf:QRScanner // RusGuard R10-MF
	    hw touch
    }
    section network {}     // network infrastructure
    hub low {}
    hub mid {}
    hub high {}
}
```
```decl
hw Hub:cm4 {
	vendor = 'WaveShare'
	model  = 'CM4-ETH-RS485-BASE-B'
	ports  = [
		usb[]
		rs485[]
		eth
	]
}
```

![[decl/vending/network]]
[[decl/hw/cm4]]