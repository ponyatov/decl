.PHONY: sync
sync: doc
	rm -rf doc/$(APP)/ ; rsync -r $(HOME)/metadoc/$(APP)/ doc/$(APP)/
	git add doc/$(APP)
