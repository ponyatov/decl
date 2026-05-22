# Message
## actor message

```decl
class Message {
	#short = 'msg'
	src:actor     // sender
	dst:actor     // receiver
	ts:timestamp  // send time marker
	data:?any     // any data to be passed
}
```

- [[core/js/Message]]
