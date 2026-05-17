.PHONY: ai
ai: sync
	cat README.md \
		decl/*.md decl/core/* \
		decl/js/* package.json js/*.mjs js/*.js \
			> tmp/$(APP).ai.md
