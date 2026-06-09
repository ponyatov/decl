.PHONY: ai
ai: sync
	cat README.md \
		decl/*.md decl/core/*.md decl/gui/*.md decl/net/*.md \
		decl/tutor/*.md decl/linkedin/*.md \
		decl/vending/*.md \
			> tmp/$(APP).ai.md
# 		ts/*.ts package.json tsconfig.json js/*.mjs \
# 		decl/js/*.md *package.json js/*.mjs ts/*.ts \
# 		decl/hw/*.md decl/esp/*.md \
# 		decl/py/*.md \

Machine
	States
		Global
		Buses
		Sections
			Spiral
				Row
				Col
				Cells
				IO
				Lift
			Postomat
				Row
				Col
				Cells
				IO
