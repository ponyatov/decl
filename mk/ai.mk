.PHONY: ai
ai: sync
	cat README.md \
		decl/*.md decl/core/* \
		decl/js/* decl/hw/* package.json js/*.mjs js/*.js \
			> tmp/$(APP).ai.md
