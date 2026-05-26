.PHONY: ai
ai: sync
	cat README.md \
		decl/*.md decl/core/* decl/hw/* \
		decl/py/* \
			> tmp/$(APP).ai.md
# 		decl/js/* package.json js/*.mjs js/*.js \
