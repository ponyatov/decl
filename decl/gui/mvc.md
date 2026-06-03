# mv
## Model-View

`decl` uses simplified [[decl/core/gui|gui]] model with only two actors:

```decl
/// compiles to `class NameModel`
class Model: Actor {}

/// compiles to `class NameView`
class View: Actor,GUI {
	init model {
		self.model = model // view knows model
		model.view = self  // and model knows its view
	}
}
```

## demo code with visual timer model

target: single page HTML with embedded JS

```decl
model Counter {
	seconds:uint = 0
	timer 1s { seconds++ } // change internal state
}

form Counter  {
	init model {
		self.model = model
		model.seconds.set = this.update // subscribe to model update
	}
	
	update {
		self.display = self.model.seconds  // dump model state
	}
}
```
