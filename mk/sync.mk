.PHONY: sync
sync: doc
# 	rsync -av ~/metadoc/ventest/ ./lib/ventest/
	meld lib/ventest ~/metadoc/ventest
