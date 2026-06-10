.PHONY: ai
ai: sync
	cat README.md \
		decl/*.md decl/core/*.md decl/gui/*.md decl/net/*.md \
		decl/rust/*.md \
			> tmp/$(APP).ai.md
# 		decl/tutor/*.md decl/linkedin/*.md \
# 		decl/vending/*.md decl/vending/command/*.md \
# 		ts/*.ts package.json tsconfig.json js/*.mjs \
# 		decl/js/*.md *package.json js/*.mjs ts/*.ts \
# 		decl/hw/*.md decl/esp/*.md \
# 		decl/py/*.md \
