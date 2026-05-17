# deepseek
## free public chat used as AI engine

- deepseek
	  - can't work with file system directly
	  - can't read any ASCII files, has very limited list of supported text formats
		- so upload all .md files from `~/decl/lib`
			- treated as Mardown+Decl code ([[Literate Programming]])
- all answers from AI must be in a simple english
	- inluding code comments
	- to allow easy read generated code & docs both by non-native people and any AI
- for short `decl` snippets in chat
	- work as a high-level code translator from `decl`
	- into selected target language: JS
