.PHONY: ai
ai:
	cat README.md \
		package.json js/*.mjs js/*.js \
		decl/*.md decl/*/*.md \
			> tmp/$(APP).ai.md
