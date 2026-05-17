.PHONY: sync
sync: doc
# 	rsync -av ~/metadoc/$(APP)/ ./lib/$(APP)/
# 	meld lib/$(APP) ~/metadoc/$(APP)
	unison $(APP)
