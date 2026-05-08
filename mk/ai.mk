.PHONY: ai
ai:
	cat README.md lib/decl/*.md lib/$(APP)/*.md \
		package.json js/*.mjs js/*.js \
			> tmp/$(APP).ai.md
