# Actor Model

```decl
class Actor {
	name:opt<str>
	mailbox:msg[]
	init(?name)
	push(msg)               { mailbox.push msg; awake self; }
	pop -> msg              { msg.pop }
	send dst:actor data:any { dst.push(msg self dst data); }
	
	// message dispatch
	dispatch()              { while msg process (msg.pop) ; sleep; } 
}
```

- [[msg|msg]]
	- [[core/js/msg]]
- [[decl/js/actor|actor]]
