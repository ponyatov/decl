```decl
// interactive or display-only form
class Form: GUI {
	title = default<?name|''>
	theme = enum {
		default<dark>    // dark theme preferred
		light            // for sunny weather can be better
		bw               // for e-ink and monochrome monitors
		print            // optimized for publications
	}
}
```
