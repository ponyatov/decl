# group
## [[decl/core/Actor|Actor]]s group

```decl
class Group: Actor[] {
	policy = enum {         // message policy
		default<all>        // all members
		idles               // all in idle state
		random
		last                // last used dst
		roundrobin          // next dst
		balance             // less loaded dst
		idle                // single in idle state
		busy                // most loaded
		sticky<key>         // key such as uid, session,..
		least<n>            // at least n members
	}
}

glob all = Group<*>         // all actors in a system
```

```decl
// send to group with custom policy
workers.idles!shutdown  // free resources used by unloaded workers
all.random!kill         // test system for faults
```
