.PHONY: ai
ai:
	cat README.md \
		decl/decl/* decl/log/* \
		decl/js/* package.json js/*.mjs js/*.js \
			> tmp/$(APP).ai.md
