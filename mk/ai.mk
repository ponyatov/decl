.PHONY: ai
ai: sync
	cat README.md \
		decl/*.md decl/core/* decl/tutor/* decl/hw/* \
		decl/esp/* \
			> tmp/$(APP).ai.md
# 		decl/js/* package.json js/*.mjs js/*.js \
# 		decl/py/* \
