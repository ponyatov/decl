# gui
## `decl` language extension for writing embedded GUI apps

limitations:
- embedded in hardware:
	- tiny LCD low-res and small size screens
		- 2.8" 320x240
		- 1.47" 320x172 [[ST7789]] [[ESP32-C6-LCD]]-1.47
	- fixed-size fonts
- HTML target: embedded emulation
- Android: embedded emulation


```decl
form opt<name> {
	title = default<?name|''>
	theme = enum {
		default<dark>    // dark theme preferred
		light
		bw               // for e-ink and monochrome monitors
		print            // optimized for publications
	}
}
```

```decl
class theme {
	font: {
		size: min<2mm>      // all texts must be readable
		family: monospace   // make the GUI close to console TUI
	}
}
```

```decl
theme print {
	background: transparent // on white paper
	color: on               // colors selected to good look in grayscale
}
```

```decl
theme dark {
	background: #222
	color: lightgreen;  // old style monitor emulation
}
```

- layout
	- gui elements tend to fill all available space both in width and height
