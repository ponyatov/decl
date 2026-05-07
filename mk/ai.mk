.PHONY: ai
ai:
	cat README.md lib/*.md > tmp/$(APP).ai.md
