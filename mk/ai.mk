.PHONY: ai
ai: sync
	cat README.md \
		decl/*.md decl/core/* decl/tutor/* decl/hw/* \
		decl/js/* package.json js/*.mjs js/*.js \
			> tmp/$(APP).ai.md
# 		decl/py/* \
