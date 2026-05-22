# Message
## actor message

```decl
class Message {
	#short = 'msg'
	src:actor     // sender
	dst:actor     // receiver
	id:uniq<uint> // unical message id
	ts:timestamp  // send time marker
	data:?any     // any data to be passed
}
```

- [[core/js/Message]]
