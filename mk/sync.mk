.PHONY: sync
sync: doc
# 	rsync -av ~/metadoc/$(APP)/ ./lib/$(APP)/
# 	meld lib/$(APP) ~/metadoc/$(APP)
	unison $(APP)
# 	scp operator1@10.130.2.11:modbus/tmp/* tmp/
# 	scp operator1@10.130.2.11:modbus/etc/* etc/
# 	scp operator1@10.130.2.11:modbus/src/*.py src/
# 	scp src/*.py operator1@10.130.2.11:modbus/src/
