.PHONY: ai
ai: sync
	cat README.md \
		decl/*.md decl/core/* decl/gui/* decl/net/* \
		decl/tutor/* decl/linkedin/* \
		ts/*.ts package.json tsconfig.json js/*.mjs \
		decl/vending/* \
			> tmp/$(APP).ai.md
# 		decl/js/* *package.json js/*.mjs ts/*.ts \
# 		decl/hw/* decl/esp/* \
# 		decl/py/* \
