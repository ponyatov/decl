.PHONY: ai
ai: sync
	cat README.md \
		decl/*.md decl/core/* decl/gui/* \
		decl/tutor/* decl/linkedin/* \
		decl/js/* package.json js/*.mjs js/*.js \
			> tmp/$(APP).ai.md
# 		decl/hw/* decl/esp/* \
# 		decl/py/* \
