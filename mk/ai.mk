.PHONY: ai
ai:
	cat README.md \
		decl/decl/*.md \
		decl/js/*.md package.json js/*.mjs js/*.js \
			> tmp/$(APP).ai.md
