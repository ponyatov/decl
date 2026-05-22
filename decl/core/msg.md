# msg
## actor message

```decl
class msg {
	src:actor     // sender
	dst:actor     // receiver
	ts:timestamp  // send time marker
	data:opt<any> // any data to be passed
}
```

- [[core/js/msg]]
