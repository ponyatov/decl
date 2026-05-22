# Actor Model

![[decl/core/Message]]

```decl
class Actor {
	#short = 'actor'
	name:?str               // optional name
	mailbox:msg[]
	init name:?str
	push msg                { mailbox.push msg; awake self; }
	pop -> msg              { msg.pop }
	send dst:actor data:any { dst.push (msg self dst data); }
	dispatch                { while msg process (msg.pop) ; sleep; } 
}
```

- [[decl/js/Actor|Actor]]

## minimal actors interaction


```decl
alice = actor
bob   = actor
bob ! msg alice bob 'hello' // message with src/dst/data defined
alice ! bob, 'world'        // tuple can be used to add `src` and other args
bob ! "i'm system thread"   // send message to bob from current code owner
```

## [[decl/core/pubsub]]